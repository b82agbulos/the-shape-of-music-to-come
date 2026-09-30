/**
 * THE SHAPE OF MUSIC TO COME — sheet feed
 * ------------------------------------------------------------------
 * Lets the website read this spreadsheet: every tab, every column, every
 * "Artist - Album" cell, and the link you put on each cell.
 *
 * ONE-TIME SETUP (inside the spreadsheet):
 *   1. Extensions -> Apps Script. Delete the sample code, paste this whole file, Save.
 *   2. Deploy -> New deployment -> gear icon -> Web app.
 *        Execute as:      Me
 *        Who has access:  Anyone
 *      Deploy -> Authorize access. Google will say "Google hasn't verified this app":
 *      it's your own script, so Advanced -> Go to (project) -> Allow.
 *   3. Copy the "Web app" URL (ends in /exec) and paste it into js/shop-map.js:
 *        sheetFeed: "https://script.google.com/macros/s/..../exec",
 *
 * LINKING AN ALBUM: click its cell, Ctrl+K (Insert -> Link), paste the album's
 * Drive folder link. =HYPERLINK("url", "Artist - Album") cells work too.
 *
 * The site sees edits within a few seconds (the feed's copy is cleared on every
 * edit). If something doesn't show, use the "Website" menu -> "Refresh the website now".
 *
 * Nothing here changes your sheet. Anyone with the /exec URL can read the album
 * names and links, which is what the website shows anyway.
 */

// Tabs the website should ignore (the master list, notes, etc.). Matched against the tab name.
const SKIP_TABS = /^(00|all\b|master|index|notes?\b|template)/i;

const CACHE_KEY = 'shop-feed';
const CACHE_SECONDS = 21600;   // 6 hours (the most Google allows); edits clear it sooner

function doGet() {
  let json = readCache_();
  if (!json) {
    json = buildFeed_();
    writeCache_(json);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function buildFeed_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const tabs = ss.getSheets()
    .filter(function (sh) { return !sh.isSheetHidden() && !SKIP_TABS.test(sh.getName().trim()); })
    .map(function (sh) {
      const range = sh.getDataRange();
      const text = range.getDisplayValues();
      const rich = range.getRichTextValues();
      const formulas = range.getFormulas();
      const nCols = text.length ? text[0].length : 0;
      const cols = [];
      for (let c = 0; c < nCols; c++) {
        const col = [];
        for (let r = 0; r < text.length; r++) {
          const t = String(text[r][c] || '').trim();
          if (!t) continue;
          const link = linkOf_(rich[r][c], formulas[r][c]);
          col.push(link ? [t, link] : [t]);
        }
        cols.push(col);
      }
      return { name: sh.getName().trim(), cols: cols };
    });
  return JSON.stringify({ updated: new Date().toISOString(), tabs: tabs });
}

function linkOf_(rt, formula) {
  if (rt) {
    const whole = rt.getLinkUrl();
    if (whole) return whole;
    const runs = rt.getRuns();
    for (let i = 0; i < runs.length; i++) {
      const u = runs[i].getLinkUrl();
      if (u) return u;
    }
  }
  const m = String(formula || '').match(/HYPERLINK\(\s*"([^"]+)"/i);
  return m ? m[1] : '';
}

/* ---------- cache (Google caps each entry at 100 KB, so the feed is stored in pieces) ---------- */

function readCache_() {
  const cache = CacheService.getScriptCache();
  const n = Number(cache.get(CACHE_KEY + ':n'));
  if (!n) return null;
  const keys = [];
  for (let i = 0; i < n; i++) keys.push(CACHE_KEY + ':' + i);
  const parts = cache.getAll(keys);
  let out = '';
  for (let i = 0; i < n; i++) {
    const p = parts[CACHE_KEY + ':' + i];
    if (p == null) return null;
    out += p;
  }
  return out;
}

function writeCache_(json) {
  const size = 90000;
  const pieces = {};
  let n = 0;
  for (let i = 0; i < json.length; i += size) pieces[CACHE_KEY + ':' + (n++)] = json.slice(i, i + size);
  pieces[CACHE_KEY + ':n'] = String(n);
  try { CacheService.getScriptCache().putAll(pieces, CACHE_SECONDS); } catch (e) { /* too big to cache: serve uncached */ }
}

function clearFeedCache() {
  CacheService.getScriptCache().remove(CACHE_KEY + ':n');
}

/* ---------- keep the website in step with edits ---------- */

function onEdit() { clearFeedCache(); }

function onOpen() {
  SpreadsheetApp.getUi().createMenu('Website')
    .addItem('Refresh the website now', 'refreshWebsite')
    .addToUi();
}

function refreshWebsite() {
  clearFeedCache();
  writeCache_(buildFeed_());
  SpreadsheetApp.getActiveSpreadsheet().toast('The website will show your latest edits on its next load.', 'Website', 5);
}
