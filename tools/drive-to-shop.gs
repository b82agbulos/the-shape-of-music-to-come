/**
 * DRIVE → THE SHAPE OF MUSIC TO COME
 * ------------------------------------------------------------------
 * Reads your music folder (Genre / [Sub-genre /] Artist / Album) and saves
 * a file called "drive-albums.js" at the top of your My Drive.
 * Download it and put it in the website's js/ folder (replacing the old one).
 *
 * ONE-TIME SETUP — at script.google.com, signed in as the Google account
 * that owns the music folder (the one your Drive link opens as /u/1/):
 *   1. New project. Delete the sample code and paste this whole file in.
 *   2. Left sidebar: Services (+)  ->  Drive API  ->  Add.
 *   3. In the toolbar, pick "exportAlbums" and press Run. Approve access.
 *      Google will say "Google hasn't verified this app". It's your own
 *      script: click Advanced -> Go to (your project name) -> Allow.
 *   4. The Execution log shows how many albums it found and links the file.
 *
 * Rerun it whenever you add albums. It overwrites the same file, and your
 * Staff Picks / notes in js/inventory.js are kept (the site merges the two).
 *
 * It only READS your music folder. The one thing it writes is drive-albums.js.
 */

const MUSIC_FOLDER_ID = '1Ugp0HRfHdXt9v36hCvln1lC5Tmh85vJS';
const OUTPUT_NAME = 'drive-albums.js';

// Folders inside an album that belong to it rather than being albums themselves.
const PART_OF_ALBUM = /^((cd|disc|disk|side)\s*(\d{1,2}|[a-d])\b.*|art|artwork|scans?|booklet|covers|extras|bonus( tracks)?)$/i;

const FOLDER = 'application/vnd.google-apps.folder';

function exportAlbums() {
  if (typeof Drive === 'undefined' || !Drive.Files) {
    throw new Error('Add the Drive API service first: left sidebar -> Services (+) -> Drive API -> Add.');
  }
  const started = Date.now();
  const root = Drive.Files.get(MUSIC_FOLDER_ID, { fields: 'id,name', supportsAllDrives: true });
  if (!root.name && root.title) throw new Error('The Drive API service is on version v2. Remove it and add it again with version v3.');

  // 1) Walk the folder tree, one level at a time
  const nodes = {};
  nodes[root.id] = { id: root.id, name: root.name, parent: null, kids: [], depth: 0 };
  let frontier = [root.id];
  while (frontier.length) {
    const next = [];
    childFolders_(frontier).forEach(function (f) {
      if (nodes[f.id]) return;
      const parentId = (f.parents || []).filter(function (p) { return nodes[p]; })[0];
      if (!parentId) return;
      nodes[f.id] = { id: f.id, name: f.name, parent: parentId, kids: [], depth: nodes[parentId].depth + 1 };
      nodes[parentId].kids.push(f.id);
      next.push(f.id);
    });
    frontier = next;
  }

  // 2) Albums = the deepest folders (ignoring Disc 1 / Artwork style sub-folders)
  const candidates = Object.keys(nodes).map(function (id) { return nodes[id]; }).filter(function (n) {
    if (n.depth < 2 || PART_OF_ALBUM.test(n.name)) return false;
    return n.kids.every(function (k) { return PART_OF_ALBUM.test(nodes[k].name); });
  });

  // 3) Look inside each album (and its Disc/Artwork folders) for files and a cover image
  const owner = {};   // folder id -> album id
  candidates.forEach(function (a) {
    owner[a.id] = a.id;
    a.kids.forEach(function (k) { owner[k] = a.id; });
    a.files = 0; a.images = [];
  });
  childFiles_(Object.keys(owner)).forEach(function (f) {
    const albumId = (f.parents || []).map(function (p) { return owner[p]; }).filter(Boolean)[0];
    if (!albumId) return;
    const a = nodes[albumId];
    a.files++;
    if (/^image\//.test(f.mimeType || '')) a.images.push({ id: f.id, name: f.name || '', direct: f.parents.indexOf(albumId) > -1 });
  });

  const albums = candidates.filter(function (a) { return a.files > 0; });
  const empty = candidates.filter(function (a) { return a.files === 0; });

  // 4) Write drive-albums.js
  const rows = albums.map(function (a) {
    const path = [];
    for (let n = a; n && n.parent; n = nodes[n.parent]) path.unshift(n.name);
    const row = { p: path, id: a.id };
    const cover = pickCover_(a.images);
    if (cover) row.c = cover;
    return row;
  }).sort(function (x, y) { return x.p.join('\u0001').localeCompare(y.p.join('\u0001')); });

  const stamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
  const text =
    '/* Made by drive-to-shop.gs on ' + stamp + ' from "' + root.name + '".\n' +
    '   Don\'t edit this file: rerun the script instead. Put overrides, Staff Picks\n' +
    '   and notes in js/inventory.js.  p = folder path, id = album folder, c = cover image */\n' +
    'window.DRIVE_ALBUMS = [\n' + rows.map(function (r) { return '  ' + JSON.stringify(r); }).join(',\n') + '\n];\n';

  const found = DriveApp.getRootFolder().getFilesByName(OUTPUT_NAME);
  let file;
  if (found.hasNext()) { file = found.next(); file.setContent(text); }
  else { file = DriveApp.createFile(OUTPUT_NAME, text, MimeType.PLAIN_TEXT); }

  // 5) Report
  const perTop = {};
  rows.forEach(function (r) { perTop[r.p[0]] = (perTop[r.p[0]] || 0) + 1; });
  Logger.log('Found %s albums in "%s" (%s with a cover image).', rows.length, root.name, rows.filter(function (r) { return r.c; }).length);
  Object.keys(perTop).sort().forEach(function (k) { Logger.log('  %s: %s', k, perTop[k]); });
  if (empty.length) {
    Logger.log('Skipped %s empty folder(s), e.g.: %s', empty.length,
      empty.slice(0, 10).map(function (a) { return a.name; }).join(' | '));
  }
  Logger.log('Saved %s  ->  %s', OUTPUT_NAME, file.getUrl());
  Logger.log('Took %s seconds.', Math.round((Date.now() - started) / 1000));
}

/* ---------- helpers ---------- */

function listAll_(q, fields) {
  const out = [];
  let pageToken;
  do {
    const res = Drive.Files.list({
      q: q, pageSize: 1000, pageToken: pageToken,
      fields: 'nextPageToken, files(' + fields + ')',
      supportsAllDrives: true, includeItemsFromAllDrives: true
    });
    if (res.items) throw new Error('The Drive API service is on version v2. Remove it and add it again with version v3.');
    (res.files || []).forEach(function (f) { out.push(f); });
    pageToken = res.nextPageToken;
  } while (pageToken);
  return out;
}

function inParents_(ids) {
  return '(' + ids.map(function (id) { return "'" + id + "' in parents"; }).join(' or ') + ')';
}

function chunks_(list, size) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

function childFolders_(parentIds) {
  return chunks_(parentIds, 40).reduce(function (acc, ids) {
    return acc.concat(listAll_(inParents_(ids) + " and mimeType = '" + FOLDER + "' and trashed = false", 'id, name, parents'));
  }, []);
}

function childFiles_(parentIds) {
  return chunks_(parentIds, 40).reduce(function (acc, ids) {
    return acc.concat(listAll_(inParents_(ids) + " and mimeType != '" + FOLDER + "' and trashed = false", 'id, name, mimeType, parents'));
  }, []);
}

function pickCover_(images) {
  if (!images.length) return '';
  function score(img) {
    const n = img.name.toLowerCase();
    let s = img.direct ? 10 : 0;
    if (/^(cover|folder|front)\b/.test(n)) s += 5;
    else if (/cover|front/.test(n)) s += 3;
    if (/small|back|thumb|cd\b|disc|inlay|tray/.test(n)) s -= 6;
    return s;
  }
  return images.slice().sort(function (a, b) { return score(b) - score(a) || a.name.localeCompare(b.name); })[0].id;
}
