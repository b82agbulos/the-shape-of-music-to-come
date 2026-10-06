/* ===========================================================
   THE SHAPE OF MUSIC TO COME — shop engine
   Builds the storefront directory (index.html) and every room
   (room.html?s=<room-id>) from js/shop-map.js + the albums/ folder.
   You shouldn't need to edit this file to add records or rooms.
   =========================================================== */
(function () {
  "use strict";

  var SHOP = window.SHOP;
  if (!SHOP) { console.error("js/shop-map.js did not load"); return; }

  // the ?v=... on this file's own <script> tag; the album files are loaded with the same stamp,
  // so changing it in index.html and room.html makes every browser fetch fresh album files too
  var VER = (function () {
    var m = ((document.currentScript && document.currentScript.src) || "").match(/[?&]v=([^&#]+)/);
    return m ? m[1] : "";
  })();

  /* ---------- helpers ---------- */
  var collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "style") el.style.cssText = v;
      else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    [].concat(kids || []).forEach(function (c) {
      if (c == null || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key));
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function safeSrc(src) {
    if (!src) return "";
    // a web address (Discogs, Genius, Melodic Mosaic…) is used as written, apart from spaces: re-encoding it
    // would turn Discogs' "rs:fit/g:sm" into "rs%3Afit/g%3Asm", which Discogs doesn't recognise
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(src)) return src.replace(/ /g, "%20").replace(/"/g, "%22");
    // a file of yours: encode spaces, #, ? etc. in its name, without double-encoding
    return src.split("/").map(function (seg) {
      try { seg = decodeURIComponent(seg); } catch (e) {}
      return encodeURIComponent(seg);
    }).join("/");
  }
  function stripKey(s) {
    return String(s || "")
      .replace(/^[^\p{L}\p{N}]+/u, "")          // "...And Justice" -> "And Justice"
      .replace(/^(the|a|an)\s+/i, "")           // "The Clash" -> "Clash"
      .trim();
  }
  function initialOf(key) {
    var c = key.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0).toUpperCase();
    return /[A-Z]/.test(c) ? c : "#";
  }
  function dateKey(d) {
    var m = String(d || "").match(/^(\d{4})(?:-(\d{1,2})(?!\d))?(?:-(\d{1,2}))?/);   // "2020-2021" sorts as 2020, not month 20
    if (!m) return null;
    return m[1] + "-" + (m[2] || "00").padStart(2, "0") + "-" + (m[3] || "00").padStart(2, "0");
  }
  function yearRange(d) {
    var m = String(d || "").match(/^(\d{4})\s*[-–]\s*(\d{4}|present|now)$/i);
    return m ? m[1] + "–" + m[2] : "";
  }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : (many || one + "s")); }
  function roomHref(r) { return "room.html?s=" + r.fullId.split("/").map(encodeURIComponent).join("/"); }

  /* ---------- rooms ---------- */
  var byId = new Map();
  var order = [];
  (function walk(list, parent, depth) {
    (list || []).forEach(function (r) {
      r.fullId = parent ? parent.fullId + "/" + r.id : r.id;
      r.slug = r.fullId.replace(/\//g, "-");
      r.parent = parent || null;
      r.depth = depth;
      r.subs = r.subs || [];
      r.accent = r.accent || (parent && parent.accent) || SHOP.defaultAccent || "#f4b048";
      r.wing = r.wing || (parent && parent.wing) || "floor";
      if (byId.has(r.fullId)) console.warn("Duplicate room id: " + r.fullId);
      byId.set(r.fullId, r);
      order.push(r);
      walk(r.subs, r, depth + 1);
    });
  })(SHOP.rooms, null, 0);

  function imgPath(slugOrPath, thumb) {
    if (/[./]/.test(slugOrPath)) return slugOrPath;            // explicit path or URL
    return "images/rooms/" + (thumb ? "thumbs/" : "") + slugOrPath + ".jpg";
  }
  function roomImage(r, thumb) {
    var cur = r;
    while (cur) {
      if (cur.img !== false) return imgPath(typeof cur.img === "string" ? cur.img : cur.slug, thumb);
      cur = cur.parent;
    }
    return SHOP.storefront;
  }
  function trail(r) { var t = []; for (var c = r; c; c = c.parent) t.unshift(c); return t; }

  /* ---------- records: one albums/<room>.js file per room ---------- */
  function norm(s) {
    return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  function recKey(artist, album) { return norm(stripKey(artist)) + "|" + norm(stripKey(album)); }
  function albumFile(r) { return "albums/" + r.slug + ".js"; }

  // "Muddy Waters" + "The Anthology: 1947–1972" -> "images/covers/Muddy Waters - The Anthology 1947–1972"
  // (characters Windows won't allow in a file name, \ / : * ? " < > |, are left out)
  function coverFileName(artist, album) {
    var name = (artist ? artist + " - " : "") + album;
    name = name.replace(/[\\\/:*?"<>|]/g, "").replace(/\s{2,}/g, " ").replace(/[\s.]+$/, "").trim();
    return name ? "images/covers/" + name : "";
  }
  // spotify: "https://open.spotify.com/album/6eedtCtCjibu80yOhylSGL?si=…", ".../intl-es/album/…" or "spotify:album:6eedt…"
  function spotifyRef(v) {
    var m = String(v || "").match(/(album|playlist|track|show|episode)[\/:]([A-Za-z0-9]{22})/);   // show/episode = podcasts
    return m ? { type: m[1], id: m[2], url: "https://open.spotify.com/" + m[1] + "/" + m[2] } : null;
  }
  // Spotify's public oEmbed gives each album's cover (300 px); the same image id with a
  // different size code is the 640 px version. Answers are remembered in this browser.
  var spotifyCache = store("tsomtc.spotifyCovers") || {};
  var spotifyAsks = {}, spotifyQueue = [], spotifyBusy = 0;
  function spotifyPump() {
    while (spotifyBusy < 4 && spotifyQueue.length) {
      var job = spotifyQueue.shift();
      spotifyBusy++;
      job().then(function () { spotifyBusy--; spotifyPump(); });
    }
  }
  function spotifyCover(ref) {
    if (spotifyCache[ref.url]) return Promise.resolve(spotifyCache[ref.url]);
    if (!spotifyAsks[ref.url]) {
      spotifyAsks[ref.url] = new Promise(function (resolve) {
        spotifyQueue.push(function () {
          return fetch("https://open.spotify.com/oembed?url=" + encodeURIComponent(ref.url))
            .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
            .then(function (j) {
              var url = (j && j.thumbnail_url) || "";
              if (url) { spotifyCache[ref.url] = url; store("tsomtc.spotifyCovers", spotifyCache); }
              resolve(url);
            })
            .catch(function (e) { console.warn("Spotify cover for " + ref.url + ": " + e.message); resolve(""); });
        });
        spotifyPump();
      });
    }
    return spotifyAsks[ref.url];
  }
  // start a cover's lookup only when its record is about to scroll into view
  var coverWatch = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      coverWatch.unobserve(e.target);
      if (e.target._startCover) e.target._startCover();
    });
  }, { rootMargin: "400px 0px" }) : null;
  function spotifyBig(url) { return url.replace("ab67616d00001e02", "ab67616d0000b273"); }

  // cover: "berry.jpg" means images/covers/berry.jpg; a path or web address is used as written
  function coverPath(c) {
    c = String(c || "").trim();
    return c && !/[\/:]/.test(c) ? "images/covers/" + c : c;
  }

  /* ---------- covers from the web, for albums Spotify can't supply: Wikipedia, then MusicBrainz's
     Cover Art Archive, then Apple Music. Each is asked only when the record scrolls into view, the
     answer must match the artist and title, and answers are remembered in this browser
     (a miss is asked again after a week). ---------- */
  var webCache = store("tsomtc.webCovers") || {};
  var WEB_SOURCES = ["wikipedia", "musicbrainz", "apple"];
  var webQ = {
    wikipedia:   { busy: 0, max: 3, gap: 100,  q: [] },
    musicbrainz: { busy: 0, max: 1, gap: 1100, q: [] },     // MusicBrainz asks for about one lookup a second
    apple:       { busy: 0, max: 1, gap: 3100, q: [] }      // Apple allows about 20 a minute
  };
  // how far a record is from the screen; lookups go nearest-first, so whatever you're looking at is
  // answered before records you scrolled past
  function offScreen(els) {
    var best = Infinity, vh = window.innerHeight || 800;
    els.forEach(function (el) {
      if (!el.isConnected) return;
      var r = el.getBoundingClientRect();
      best = Math.min(best, r.bottom < 0 ? -r.bottom : r.top > vh ? r.top - vh : 0);
    });
    return best;
  }
  function webQueue(src, els, job) {       // els: the records waiting on this answer
    var Q = webQ[src];
    return new Promise(function (resolve) {
      Q.q.push({ els: els, run: function () {
        return Promise.resolve().then(job).then(resolve, function () { resolve(undefined); });   // undefined = couldn't ask
      } });
      (function pump() {
        while (Q.busy < Q.max && Q.q.length) {
          var pick = 0, best = Infinity;
          for (var i = 0; i < Q.q.length; i++) {
            var d = offScreen(Q.q[i].els);
            if (d < best) { best = d; pick = i; if (!d) break; }
          }
          Q.busy++;
          Q.q.splice(pick, 1)[0].run().then(function () { setTimeout(function () { Q.busy--; pump(); }, Q.gap); });
        }
      })();
    });
  }
  function sameTitle(a, b) {             // "Nevermind" ~ "Nevermind (Remastered)" ~ "Nevermind - EP"
    a = loose(String(a || "").replace(/\s+-\s+(single|ep)$/i, ""));
    b = loose(String(b || "").replace(/\s+-\s+(single|ep)$/i, ""));
    return !!a && !!b && (a === b || (a.length > 4 && b.length > 4 && (a.indexOf(b + " ") === 0 || b.indexOf(a + " ") === 0)));
  }
  function mentions(text, name) { var n = loose(name); return !!n && (" " + loose(text) + " ").indexOf(" " + n + " ") > -1; }
  function isVarious(artist) { return /^various( artists)?$/i.test(String(artist || "").trim()); }
  var appleN = 0;
  var WEB = {
    wikipedia: function (rec) {
      var q = '"' + rec.album.replace(/"/g, "") + '" ' + (isVarious(rec.artist) ? "compilation" : rec.artist) + " album";
      return fetch("https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&origin=*&redirects=1" +
          "&generator=search&gsrlimit=6&gsrsearch=" + encodeURIComponent(q) +
          "&prop=pageimages%7Cdescription&piprop=thumbnail&pithumbsize=640&pilicense=any")
        .then(function (r) { if (!r.ok) throw r.status; return r.json(); })
        .then(function (d) {
          var pages = ((d.query || {}).pages || []).slice().sort(function (a, b) { return a.index - b.index; });
          for (var i = 0; i < pages.length; i++) {
            var p = pages[i], about = (p.description || "") + " " + p.title;
            if (!p.thumbnail || !sameTitle(p.title.replace(/\s*\([^)]*\)\s*$/, ""), rec.album)) continue;
            if (!/\b(album|EP|mixtape|soundtrack|compilation|record|recording|single|box set)\b/i.test(about)) continue;
            if (isVarious(rec.artist) || mentions(about, rec.artist)) return p.thumbnail.source;
          }
          return null;
        });
    },
    musicbrainz: function (rec) {
      var esc = function (s) { return String(s).replace(/[\\"]/g, "\\$&"); };
      var q = 'releasegroup:"' + esc(rec.album) + '"' + (isVarious(rec.artist) ? "" : ' AND artist:"' + esc(rec.artist) + '"');
      return fetch("https://musicbrainz.org/ws/2/release-group/?fmt=json&limit=5&query=" + encodeURIComponent(q))
        .then(function (r) { if (!r.ok) throw r.status; return r.json(); })
        .then(function (d) {
          var g = (d["release-groups"] || []).filter(function (x) {
            var credit = (x["artist-credit"] || []).map(function (c) { return (c.name || (c.artist || {}).name || "") + (c.joinphrase || ""); }).join("");
            return (x.score || 0) >= 80 && sameTitle(x.title, rec.album) &&
              (isVarious(rec.artist) || mentions(credit, rec.artist) || mentions(rec.artist, credit));
          })[0];
          return g ? "https://coverartarchive.org/release-group/" + g.id + "/front-500" : null;   // no art there = image error, next source
        });
    },
    apple: function (rec) {
      return new Promise(function (resolve, reject) {
        var cb = "tsomtcApple" + (++appleN), s = document.createElement("script"), done = false;
        function finish(v, err) {
          if (done) return; done = true;
          window[cb] = function () {}; s.remove();
          if (err) reject(err); else resolve(v);
        }
        window[cb] = function (d) {
          var hit = ((d && d.results) || []).filter(function (x) {
            return x.artworkUrl100 && sameTitle(x.collectionName, rec.album) &&
              (isVarious(rec.artist) || mentions(x.artistName, rec.artist) || mentions(rec.artist, x.artistName));
          })[0];
          finish(hit ? hit.artworkUrl100.replace(/\/\d+x\d+(bb)?\.(jpg|png|webp)$/i, "/600x600bb.jpg") : null);
        };
        s.src = "https://itunes.apple.com/search?media=music&entity=album&limit=10&term=" +
          encodeURIComponent(rec.artist + " " + rec.album) + "&callback=" + cb;
        s.onerror = function () { finish(null, "network"); };
        setTimeout(function () { finish(null, "timeout"); }, 9000);
        document.head.appendChild(s);
      });
    }
  };
  // no web lookups for lines without an artist, or in rooms marked webCovers: false in js/shop-map.js
  // (the Playlists rooms: your own lists, which a same-named album elsewhere would only mislabel)
  function webCoversOk(rec) {
    var r = byId.get(rec.sections[0]);
    return !!rec.artist && !(r && r.webCovers === false);
  }
  var webAsks = {};        // lookups already waiting, so a re-sort or the dig filter doesn't ask twice
  function webCover(src, rec, el) {
    if (!rec.album || /^podcast$/i.test(rec.album)) return Promise.resolve(null);
    var key = src + "|" + rec.key, hit = webCache[key], now = Date.now();
    if (hit && (hit.u || now - hit.t < 7 * 864e5)) return Promise.resolve(hit.u || null);
    if (webAsks[key]) { webAsks[key].els.push(el); return webAsks[key].p; }
    var ask = webAsks[key] = { els: [el] };
    ask.p = webQueue(src, ask.els, function () { return WEB[src](rec); }).then(function (u) {
      delete webAsks[key];
      if (u === undefined) return null;                       // offline or blocked: don't remember a miss
      webCache[key] = { u: u || "", t: Date.now() };
      store("tsomtc.webCovers", webCache);
      return u || null;
    });
    return ask.p;
  }

  var shelves = {};        // room full id -> the list from its album file
  var fileTrouble = [];    // album files that loaded but didn't run (a typo)
  var fileMissing = [];    // album files the browser couldn't find (not in the albums folder)

  // each albums/*.js file calls shelf([ ... ]) — the room comes from which file it is
  window.shelf = function (a, b) {
    var list = Array.isArray(a) ? a : b;
    var el = document.currentScript;
    var id = (el && el.getAttribute("data-room")) || (typeof a === "string" ? a : "");
    if (!byId.has(id)) { console.warn("shelf(): can't tell which room this list is for", a); return; }
    shelves[id] = Array.isArray(list) ? list : [];
  };

  /* ---------- house Staff Picks (js/staff-picks.js) ---------- */
  // loose names: capitals, accents, punctuation, a leading "The", "&"/"and" and (bracketed bits) don't matter
  function loose(s) {
    return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .replace(/&/g, " and ").replace(/[\(\[][^\)\]]*[\)\]]/g, " ")
      .replace(/[^a-z0-9 ]+/g, "").replace(/\s+/g, " ").trim().replace(/^(the|a|an) /, "");
  }
  function looseAlbums(a) {
    var names = [a.album].concat(a.also || []);
    var out = [];
    names.forEach(function (n) {
      var k = loose(n);
      if (k) out.push(k, k.replace(/^untitled aka /, ""));
    });
    return out;
  }
  function artistsMatch(x, y) {                       // "jimi hendrix" ~ "jimi hendrix experience"
    if (!x || !y) return x === y;
    return x === y || x.indexOf(y + " ") === 0 || y.indexOf(x + " ") === 0;
  }
  var HOUSE = window.HOUSE_PICKS || {};
  var houseAlways = (HOUSE.always || []).map(function (a) { return { artist: loose(a.artist), albums: looseAlbums(a) }; });
  function isHousePick(artist, album) {
    var ar = loose(artist), al = looseAlbums({ album: album });
    return houseAlways.some(function (h) {
      return artistsMatch(h.artist, ar) && h.albums.some(function (k) { return al.indexOf(k) > -1; });
    });
  }
  function sameAlbum(entry, rec) {
    var al = looseAlbums(rec.src || rec);
    return artistsMatch(loose(entry.artist), loose(rec.artist)) && looseAlbums(entry).some(function (k) { return al.indexOf(k) > -1; });
  }

  var records = [];
  var covers = {};
  var geniusCovers = {};   // js/genius-covers.js, made by genius-covers.ps1 on your computer
  function makeRecord(a, roomId) {
    var artist = String(a.artist || "").trim(), album = String(a.album || "").trim();
    var key = recKey(artist, album);
    var lib = covers[key] || {};                                       // Melodic Mosaic cover + date
    var released = a.released || a.year || "";
    if (lib.released && (!released || String(lib.released).slice(0, 4) === String(released).slice(0, 4)) && String(released).length < 10) released = lib.released;
    var dk = dateKey(released);
    return {
      src: a, key: key,
      artist: artist,
      album: album || "Untitled",
      type: a.type || "",
      year: yearRange(released) || (dk ? dk.slice(0, 4) : ""),       // "2020-2021" shows as a range (podcasts, series)
      dateKey: dk,
      artistKey: stripKey(a.sortAs || (isVarious(artist) ? album : artist) || album),   // compilations file under their title
      titleKey: stripKey(album),
      sections: roomId ? [roomId] : [],
      spotify: spotifyRef(a.spotify),
      // Play opens link: when there is one (e.g. your Google Drive folder), otherwise the Spotify album;
      // a Spotify link alongside a link: still supplies the cover
      link: String(a.link || "").trim() || (spotifyRef(a.spotify) || {}).url || "",
      ownLink: !!String(a.link || "").trim(),
      cover: coverPath(a.cover),                                       // cover: "..." in the album file
      coverAuto: coverFileName(artist, album),                         // images/covers/Artist - Album.jpg
      coverLib: lib.cover || "",                                       // Melodic Mosaic
      coverGenius: geniusCovers[key] || "",                            // Genius (images/genius/)
      note: a.note || "",
      pick: a.pick === true || a.pick === "yes" || isHousePick(artist, album)   // yours, or on the house list
    };
  }
  function buildRecords() {
    covers = {};
    (window.COVER_LIBRARY || []).forEach(function (c) { covers[recKey(c.artist, c.album)] = c; });
    geniusCovers = {};
    (window.GENIUS_COVERS || []).forEach(function (c) { if (c && c.cover) geniusCovers[recKey(c.artist, c.album)] = c.cover; });

    records = [];
    order.forEach(function (room) {
      var seen = {};
      (shelves[room.fullId] || []).forEach(function (a) {
        if (!a || typeof a !== "object") return;
        if (!String(a.artist || "").trim() && !String(a.album || "").trim()) return;   // the empty example line
        var rec = makeRecord(a, room.fullId);
        var dup = rec.key + "|" + String(a.released || "").slice(0, 4);   // same album, same year = listed twice
        if (seen[dup]) return;                                           // (two editions with different years both show)
        seen[dup] = true;
        rec.i = records.length;
        records.push(rec);
      });
    });
  }

  // the window display: the staff-picks.js line, overridden by the room's line if the album is filed somewhere
  // (so a blank spotify: "" in the room file doesn't erase the window's link)
  function windowPicks() {
    return (HOUSE.window || []).map(function (w) {
      var filed = records.filter(function (r) { return sameAlbum(w, r); })[0];
      if (!filed) return { rec: makeRecord(w, ""), room: null };
      var merged = Object.assign({}, w);
      Object.keys(filed.src).forEach(function (k) {
        var v = filed.src[k];
        if (v !== "" && v != null) merged[k] = v;
      });
      return { rec: makeRecord(merged, filed.sections[0]), room: byId.get(filed.sections[0]) };
    });
  }

  function inRoom(room) { return records.filter(function (r) { return r.sections.indexOf(room.fullId) > -1; }); }
  function deepCount(room) {
    var ids = new Set();
    (function walk(r) { ids.add(r.fullId); r.subs.forEach(walk); })(room);
    return records.filter(function (r) { return r.sections.some(function (s) { return ids.has(s); }); }).length;
  }
  function isPick(rec) { return rec.pick; }

  /* ---------- Ask the Staff: search every room in the shop ---------- */
  // accents, capitals, punctuation and "&"/"and" don't matter: "bjork" finds Björk, "ac dc" finds AC/DC
  function fold(s) {
    return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
      .replace(/&/g, " and ").replace(/[^a-z0-9]+/g, " ").trim();
  }
  function words(q) { return fold(q).split(" ").filter(Boolean); }
  function hay(rec) {
    if (rec._hay == null) rec._hay = " " + fold([rec.artist, rec.album, rec.year, rec.type].join(" ")) + " ";
    return rec._hay;
  }
  function matches(rec, w) { var s = hay(rec); return w.every(function (x) { return s.indexOf(x) > -1; }); }

  var stock = null;           // one entry per album (artist + title + year), with every room it's filed in
  function stockList() {
    if (stock) return stock;
    var byKey = new Map();
    stock = [];
    records.forEach(function (r) {
      var k = r.key + "|" + r.year, e = byKey.get(k);
      if (!e) { e = { rec: r, rooms: [] }; byKey.set(k, e); stock.push(e); }
      if (!e.rec.link && r.link) e.rec = r;                     // the copy with a link is the one that plays
      r.sections.forEach(function (s) { if (e.rooms.indexOf(s) < 0) e.rooms.push(s); });
    });
    return stock;
  }
  // best matches first: the artist you typed, then the title, then names that start with it
  function askStaff(q) {
    var w = words(q);
    if (!w.length) return [];
    var whole = w.join(" "), bare = function (s) { return s.replace(/^(the|a|an) /, ""); };
    return stockList().filter(function (e) { return matches(e.rec, w); }).map(function (e) {
      var a = fold(e.rec.artist), t = fold(e.rec.album);
      var score = (a === whole || bare(a) === whole) ? 0 : (t === whole || bare(t) === whole) ? 1
        : (a.indexOf(whole) === 0 || bare(a).indexOf(whole) === 0) ? 2
        : (t.indexOf(whole) === 0 || bare(t).indexOf(whole) === 0) ? 3
        : w.every(function (x) { return hay(e.rec).indexOf(" " + x) > -1; }) ? 4 : 5;
      return { e: e, score: score };
    }).sort(function (x, y) {
      return x.score - y.score || SORTS.artist.cmp(x.e.rec, y.e.rec, 1);
    }).map(function (x) { return x.e; });
  }
  // a room's name, with its main room in front when another room has the same name
  // ("Halloween › Spoken Word" vs "Stage & Screen › Spoken Word")
  function roomLabel(r) {
    var twins = order.filter(function (o) { return o.name === r.name; }).length > 1;
    return twins && r.parent ? trail(r)[0].name + " › " + r.name : r.name;
  }
  function findItIn(ids) {
    var rooms = ids.map(function (id) { return byId.get(id); }).filter(Boolean);
    if (!rooms.length) return null;
    var kids = ["Find it in "];
    rooms.forEach(function (r, i) {
      if (i) kids.push(" · ");
      kids.push(h("a", { href: roomHref(r), text: roomLabel(r) }));
    });
    kids.push(" →");
    return h("p", { class: "window-room" }, kids);
  }
  // the staff's answer: records from anywhere in the shop, each with where to find it.
  // opts.exclude: this room (its own records are already in its crate); opts.limit: how many before "Show all"
  function staffAnswer(q, opts) {
    opts = opts || {};
    var found = askStaff(q).map(function (e) {
      return { rec: e.rec, rooms: e.rooms.filter(function (id) { return id !== opts.exclude; }) };
    }).filter(function (x) { return x.rooms.length; });
    if (!found.length) return null;
    var limit = opts.limit || 48;
    var box = h("div", { class: "ask-found" });
    function fill(n) {
      box.innerHTML = "";
      box.appendChild(h("p", { class: "ask-count", text: plural(found.length, "record").replace(/^\d+/, function (d) { return Number(d).toLocaleString(); }) +
        (opts.exclude ? " elsewhere in the shop" : " in the shop") }));
      box.appendChild(h("div", { class: "ask-grid" }, found.slice(0, n).map(function (x) {
        return h("div", { class: "result" }, [recordEl(x.rec), findItIn(x.rooms)]);
      })));
      if (found.length > n) {
        box.appendChild(h("button", { type: "button", class: "pill-link ask-more", text: "Show all " + found.length.toLocaleString(),
          onclick: function () { fill(found.length); } }));
      }
      if (player) placePlayer();
    }
    fill(limit);
    return box;
  }

  /* ---------- sorting ---------- */
  function cmpDate(a, b, dir) {
    if (a.dateKey === b.dateKey) return 0;
    if (!a.dateKey) return 1;                 // undated always last
    if (!b.dateKey) return -1;
    return (a.dateKey < b.dateKey ? -1 : 1) * dir;
  }
  var SORTS = {
    artist: {
      label: "Artist · Title",
      cmp: function (a, b, dir) {
        return collator.compare(a.artistKey, b.artistKey) || collator.compare(a.titleKey, b.titleKey) || cmpDate(a, b, 1);
      },
      group: function (r) { return initialOf(r.artistKey); }
    },
    "artist-date": {
      label: "Artist · Release date",
      dated: true,
      cmp: function (a, b, dir) {
        return collator.compare(a.artistKey, b.artistKey) || cmpDate(a, b, dir) || collator.compare(a.titleKey, b.titleKey);
      },
      group: function (r) { return initialOf(r.artistKey); }
    },
    date: {
      label: "Release date",
      dated: true,
      cmp: function (a, b, dir) {
        return cmpDate(a, b, dir) || collator.compare(a.artistKey, b.artistKey) || collator.compare(a.titleKey, b.titleKey);
      },
      group: function (r) { return r.dateKey ? r.dateKey.slice(0, 3) + "0s" : "Undated"; }
    }
  };

  /* ---------- a single record ---------- */
  var PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 4.5v15a1 1 0 0 0 1.52.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z"/></svg>';

  function coverFallback(rec) {
    return h("div", { class: "cover-fallback", "aria-hidden": "true" }, [rec.artist ? h("b", { text: rec.artist }) : null, h("i", { text: rec.album })]);
  }

  /* ---------- the player: clicking a record pops Spotify's player out next to it,
     so visitors stay on the site (like the mix-tape page). Same record again, ×, or Esc puts it away.
     Ctrl/⌘-click or middle-click still opens the album on Spotify in a new tab. ---------- */
  var player = null;
  var EMBED_H = { album: 352, playlist: 352, show: 352, episode: 232, track: 152 };
  function closePlayer() {
    if (!player) return;
    player.box.remove();
    document.querySelectorAll(".record.is-playing").forEach(function (r) {
      r.classList.remove("is-playing"); r.setAttribute("aria-expanded", "false");
    });
    window.removeEventListener("resize", placePlayer);
    player = null;
  }
  function placePlayer() {
    if (!player) return;
    var el = player.rec;
    if (!el.isConnected) {                       // the bins were re-sorted: follow the record to its new spot
      var same = [].filter.call(document.querySelectorAll(".record[data-key]"), function (r) {
        return r.getAttribute("data-key") === player.key && r.offsetParent !== null;
      });
      if (!same.length) return;                  // filtered out for now: leave the player where it is
      el = player.rec = same.filter(function (r) { return !!r.closest(".picks") === player.inPicks; })[0] || same[0];
      el.classList.add("is-playing"); el.setAttribute("aria-expanded", "true");
    }
    var box = player.box, r = el.getBoundingClientRect(), sleeve = el.querySelector(".sleeve").getBoundingClientRect();
    var vw = document.documentElement.clientWidth, gap = 16, w = box.offsetWidth;
    var left, top, side;
    if (vw - r.right - gap >= w + 12) { side = "right"; left = r.right + gap; }
    else if (r.left - gap >= w + 12) { side = "left"; left = r.left - gap - w; }
    else { side = "below"; left = Math.min(Math.max(12, r.left + r.width / 2 - w / 2), vw - w - 12); }
    top = side === "below" ? r.bottom + 14 : Math.max(sleeve.top, stickyFloor() + 8);   // not under the sticky bars
    box.setAttribute("data-side", side);
    box.style.setProperty("--arrow", side === "below"
      ? Math.round(Math.min(Math.max(r.left + r.width / 2 - left, 18), w - 18)) + "px"
      : Math.round(Math.min(sleeve.height / 2, 120)) + "px");
    box.style.left = Math.round(left + window.scrollX) + "px";
    box.style.top = Math.round(top + window.scrollY) + "px";
  }
  function openPlayer(el, rec, label) {
    if (player && player.rec === el) { closePlayer(); return; }    // same record again: put it back
    closePlayer();
    var ref = rec.spotify;
    var close = h("button", { class: "player-close", type: "button", "aria-label": "Close the player", html: "&times;" });
    var box = h("div", { class: "player", role: "dialog", "aria-label": "Player: " + label }, [
      h("div", { class: "player-head" }, [
        h("div", { class: "player-info" }, [
          rec.artist ? h("strong", { text: rec.artist }) : null,
          h("span", { text: rec.album }),
          rec.year ? h("small", { text: rec.year }) : null
        ]),
        close
      ]),
      h("iframe", { class: "player-embed", title: "Spotify player: " + label,
        src: "https://open.spotify.com/embed/" + ref.type + "/" + ref.id + "?utm_source=generator&theme=0",
        height: EMBED_H[ref.type] || 352, frameborder: "0", loading: "lazy",
        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" }),
      h("a", { class: "player-out", href: ref.url, target: "_blank", rel: "noopener", text: "Open in Spotify ↗" })
    ]);
    close.addEventListener("click", function () { var r = player && player.rec; closePlayer(); if (r) r.focus({ preventScroll: true }); });
    document.body.appendChild(box);
    el.classList.add("is-playing"); el.setAttribute("aria-expanded", "true");
    player = { box: box, rec: el, key: el.getAttribute("data-key"), inPicks: !!el.closest(".picks") };
    placePlayer();
    window.addEventListener("resize", placePlayer);
    // bring it on screen if it opened past the bottom edge (or behind Currently Playing), never under the top bars
    var bx = box.getBoundingClientRect(), floor = stickyFloor() + 8, bottom = window.innerHeight - 12;
    var np = document.querySelector(".np");
    if (np && !np.hidden) {
      var nr = np.getBoundingClientRect();
      if (nr.width && nr.left < bx.right && nr.right > bx.left) bottom = Math.min(bottom, nr.top - 12);
    }
    var dy = 0;
    if (bx.bottom > bottom) dy = Math.min(bx.bottom - bottom, bx.top - floor);
    else if (bx.top < floor) dy = bx.top - floor;
    if (dy) window.scrollBy({ top: dy, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  function stickyFloor() {                                  // bottom of whatever is stuck to the top of the screen
    var f = 0;
    document.querySelectorAll(".topbar, .crate-head").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (getComputedStyle(el).position === "sticky" && r.top <= f + 1 && r.bottom > f) f = r.bottom;
    });
    return f;
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" || !player) return;
    var r = player.rec; closePlayer(); if (r && r.isConnected) r.focus({ preventScroll: true });
  });

  function recordEl(rec, opts) {
    opts = opts || {};
    var hasLink = !!rec.link;
    var label = (rec.artist ? rec.artist + " — " : "") + rec.album + (rec.year ? " (" + rec.year + ")" : "");
    var popOut = !!rec.spotify && !rec.ownLink;                  // Spotify's player pops out beside the record
    var where = /^https?:\/\/(drive|docs)\.google\.com\//i.test(rec.link) ? "Open in Google Drive" : "Play";
    var el = h(hasLink ? "a" : "div", hasLink
      ? { class: "record", href: rec.link, target: "_blank", rel: "noopener", "data-key": rec.key,
          title: where + ": " + label, "aria-label": where + " " + label + (where === "Play" ? "" : " (opens in a new tab)"),
          "aria-expanded": popOut ? "false" : null }
      : { class: "record no-link", tabindex: "0", title: label + " — link coming soon", "aria-label": label + ", no link yet" });
    if (popOut) el.addEventListener("click", function (e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;   // let modified clicks open Spotify
      e.preventDefault();
      openPlayer(el, rec, label);
    });

    var sleeve = h("div", { class: "sleeve" }, [h("span", { class: "disc", "aria-hidden": "true" }, [h("i")])]);
    // cover, in order: cover: "..." on the album's line; the album's Spotify cover;
    // images/covers/Artist - Album.jpg (or .png); the Melodic Mosaic cover; Genius; Wikipedia; MusicBrainz;
    // Apple Music. The plain labelled sleeve sits underneath until one of them arrives (or for good).
    var tries = (rec.cover ? [rec.cover] : [])
      .concat(rec.spotify ? [{ spotify: rec.spotify }] : [])
      .concat(!rec.cover && rec.coverAuto ? [rec.coverAuto + ".jpg", rec.coverAuto + ".png"] : [])
      .concat(rec.coverLib && rec.coverLib !== rec.cover ? [rec.coverLib] : [])
      .concat(rec.coverGenius ? [rec.coverGenius] : [])
      .concat(webCoversOk(rec) ? WEB_SOURCES.map(function (s) { return { web: s }; }) : []);
    if (tries.length) {
      var n = -1;
      sleeve.appendChild(coverFallback(rec));
      var img = h("img", { class: "cover", alt: "", loading: "lazy", decoding: "async" });
      var next = function () {
        n++;
        if (n >= tries.length) { img.remove(); return; }
        var t = tries[n];
        if (typeof t === "string") { img.src = safeSrc(t); return; }
        if (t.web) { webCover(t.web, rec, sleeve).then(function (url) { if (url) img.src = url; else next(); }); return; }
        spotifyCover(t.spotify).then(function (url) {       // the 640 px image, then the 300 px one
          if (!url) return next();
          var big = spotifyBig(url);
          if (big !== url) tries.splice(n + 1, 0, url);
          img.src = big;
        });
      };
      img.addEventListener("error", next);
      img.addEventListener("load", function () { img.classList.add("loaded"); });   // fades in over the plain sleeve
      sleeve.appendChild(img);
      if (coverWatch) { sleeve._startCover = next; coverWatch.observe(sleeve); }
      else next();
    } else {
      sleeve.appendChild(coverFallback(rec));
    }
    sleeve.appendChild(h("span", { class: "play", "aria-hidden": "true", html: hasLink ? PLAY_SVG : "Link coming" }));
    if (rec.type) sleeve.appendChild(h("span", { class: "badge", text: rec.type.toUpperCase() }));
    el.appendChild(sleeve);

    el.appendChild(h("div", { class: "meta" }, [
      rec.artist ? h("span", { class: "a", text: rec.artist }) : null,
      h("span", { class: rec.artist ? "t" : "a", text: rec.album }),
      rec.year ? h("span", { class: "y", text: rec.year }) : null
    ]));
    return el;
  }

  function imgWithFallback(srcs, alt, cls) {
    // try each src in turn; if all fail, mark the frame as empty
    var i = 0;
    var img = h("img", { src: safeSrc(srcs[0]), alt: alt || "", loading: cls === "eager" ? "eager" : "lazy", decoding: "async" });
    img.addEventListener("error", function () {
      i++;
      if (i < srcs.length) img.src = safeSrc(srcs[i]);
      else if (img.parentNode) img.parentNode.classList.add("no-img");
    });
    return img;
  }

  /* ---------- directory card (used on storefront + for sub-rooms) ---------- */
  function roomCard(r, headingTag) {
    // sections stay hidden until you walk into the room: no section names or section counts here
    var n = deepCount(r);
    var shot = h("div", { class: "shot" }, [imgWithFallback([roomImage(r, true), roomImage(r, false)], "")]);
    return h("article", { class: "room-card", style: "--accent:" + r.accent }, [
      shot,
      h("div", { class: "accent-bar" }),
      h("div", { class: "body" }, [
        h(headingTag || "h3", null, [h("a", { href: roomHref(r), text: r.name })]),
        h("p", { class: "count", text: plural(n, "record") })
      ])
    ]);
  }

  // the Ask the Staff box: type an artist, an album or a year, and the staff point you to the room
  function askBlock(opts) {
    opts = opts || {};
    var id = opts.id || "ask-h";
    var input = h("input", { class: "ask-input", type: "search", placeholder: "An artist, an album, a year…",
      "aria-label": "Ask the staff: search every room in the shop", autocomplete: "off", spellcheck: "false", enterkeyhint: "search" });
    var out = h("div", { class: "ask-out", "aria-live": "polite" });
    var timer = null;
    function run() {
      clearTimeout(timer);
      var q = input.value.trim();
      out.innerHTML = "";
      if (q) {
        out.appendChild(staffAnswer(q, { exclude: opts.exclude, limit: opts.limit }) ||
          h("p", { class: "ask-none" }, [h("strong", { text: "Not in stock." }), "Nothing in the shop goes by that name. Try another spelling."]));
      }
      if (opts.onQuery) opts.onQuery(q);
    }
    input.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(run, 160); });
    input.addEventListener("search", run);                               // the clear (×) button
    var form = h("form", { class: "ask-bar", onsubmit: function (e) { e.preventDefault(); run(); input.blur(); } }, [input]);
    var block = h("section", { class: "ask", role: "search", "aria-labelledby": id }, [
      h("div", { class: "block-head" }, [
        h("h2", { id: id, class: "tag", text: "Ask the Staff" }),
        h("span", { class: "sub", text: opts.sub || "Looking for something? We'll tell you which room it's in." })
      ]),
      form, out
    ]);
    block.ask = function (q) { input.value = q; run(); };
    return block;
  }

  /* =========================================================
     STOREFRONT
     ========================================================= */
  function setupStreet() {
    document.title = SHOP.name;
    var street = document.getElementById("street");
    if (!street) return;
    street.querySelector(".street-blur").style.backgroundImage = "url('" + safeSrc(SHOP.storefront) + "')";
    var fimg = street.querySelector(".facade img");
    fimg.src = safeSrc(SHOP.storefront);
    fimg.addEventListener("error", function () { street.querySelector(".facade").classList.add("no-img"); });
    var door = street.querySelector(".door");
    door.addEventListener("click", function (e) {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;                                  // plain jump
      e.preventDefault();
      var facade = street.querySelector(".facade");
      facade.classList.add("entering");
      setTimeout(function () {
        document.getElementById("directory").scrollIntoView({ behavior: "auto" });
        history.replaceState(null, "", "#directory");
        setTimeout(function () { facade.classList.remove("entering"); }, 400);
      }, 650);
    });
  }

  var LOCAL = /^(file:|https?:\/\/(localhost|127\.0\.0\.1))/.test(location.href);

  function fileCheck() {
    // only when you preview from your own computer: album files with a typo in them
    if (!fileTrouble.length || !LOCAL) return null;
    return h("aside", { class: "file-check", role: "alert" }, [
      h("strong", { text: fileTrouble.length === 1 ? "1 album file has a typo, so its room shows empty:" : fileTrouble.length + " album files have a typo, so their rooms show empty:" }),
      h("ul", null, fileTrouble.map(function (f) { return h("li", null, [h("code", { text: f })]); })),
      h("p", { text: "Usually a missing comma between two { } lines, or a missing quote. Press F12 → Console for the line number. Only you see this (local preview)." })
    ]);
  }

  function renderStorefront() {
    var dir = document.getElementById("directory-rooms");
    dir.innerHTML = "";
    var check = fileCheck();
    if (check) dir.appendChild(check);

    var total = new Set(records.map(function (r) { return r.key; })).size;
    document.getElementById("directory-stats").textContent =
      plural(total, "record").replace(/^\d+/, function (n) { return Number(n).toLocaleString(); }) +
      " across " + plural(SHOP.rooms.length, "room") + ". Pick a door.";

    // Ask the Staff: the search is kept in the address (?ask=...), so Back from a room brings it back
    var asked = new URLSearchParams(location.search).get("ask") || "";
    var ask = askBlock({ onQuery: function (q) {
      try {
        var u = new URL(location.href);
        if (q) u.searchParams.set("ask", q); else u.searchParams.delete("ask");
        history.replaceState(null, "", u.pathname + u.search + u.hash);
      } catch (e) {}
    } });
    dir.appendChild(ask);
    if (asked) ask.ask(asked);

    (SHOP.wings || [{ id: "floor", label: "The Floor" }]).forEach(function (w) {
      var rooms = SHOP.rooms.filter(function (r) { return (r.wing || "floor") === w.id; });
      if (!rooms.length) return;
      dir.appendChild(h("section", { class: "wing", "aria-labelledby": "wing-" + w.id }, [
        h("div", { class: "wing-head" }, [h("h2", { id: "wing-" + w.id, text: w.label }), w.note ? h("span", { text: w.note }) : null]),
        h("div", { class: "rooms" }, rooms.map(function (r) { return roomCard(r, "h3"); }))
      ]));
    });

    // house Staff Picks (js/staff-picks.js -> window): at the bottom, below the rooms
    var win = windowPicks().sort(function (a, b) { return SORTS.date.cmp(a.rec, b.rec, 1); });   // oldest first
    if (win.length) {
      var perRow = win.length <= 6 ? win.length : Math.ceil(win.length / 2);
      var rows = [];
      for (var i = 0; i < win.length; i += perRow) rows.push(win.slice(i, i + perRow));
      var block = h("section", { class: "block picks window-picks", "aria-labelledby": "window-h" }, [
        h("div", { class: "block-head" }, [
          h("h2", { id: "window-h", class: "tag", text: "Staff Picks" }),
          h("span", { class: "sub", text: "From across the rooms" })
        ])
      ]);
      rows.forEach(function (row) {
        block.appendChild(h("div", { class: "shelf centered" }, row.map(function (w) {
          return h("div", { class: "pick" }, [
            recordEl(w.rec),
            w.rec.note ? h("p", { class: "talker", text: w.rec.note }) : null,
            w.room ? findItIn([w.room.fullId]) : null
          ]);
        })));
        block.appendChild(h("div", { class: "plank", "aria-hidden": "true" }));
      });
      dir.appendChild(block);
    }
  }

  /* =========================================================
     ROOM
     ========================================================= */
  function renderRoom() {
    var params = new URLSearchParams(location.search);
    var id = (params.get("s") || "").replace(/^\/+|\/+$/g, "");
    var room = byId.get(id);
    var main = document.getElementById("room");
    main.innerHTML = "";
    document.getElementById("crumbs").innerHTML = "";

    if (!room) {
      document.title = "Wrong turn — " + SHOP.name;
      main.appendChild(h("div", { class: "wrap", style: "padding:120px 0;text-align:center" }, [
        h("h1", { class: "neon", style: "font-size:40px", text: "Wrong turn" }),
        h("p", { style: "color:var(--muted);margin:14px 0 24px", text: id ? 'There\'s no room called "' + id + '" here.' : "No room picked." }),
        h("a", { class: "pill-link", href: "index.html#directory", text: "Back to the Directory" })
      ]));
      return;
    }

    document.title = room.name + " — " + SHOP.name;
    document.documentElement.style.setProperty("--accent", room.accent);
    var t = trail(room);

    // breadcrumbs
    var crumbs = document.getElementById("crumbs");
    crumbs.appendChild(h("a", { href: "index.html#directory", text: "Directory" }));
    t.forEach(function (r, i) {
      crumbs.appendChild(h("span", { class: "sep", "aria-hidden": "true", text: "›" }));
      crumbs.appendChild(i === t.length - 1
        ? h("span", { "aria-current": "page", text: r.name })
        : h("a", { href: roomHref(r), text: r.name }));
    });

    // scene
    var sceneSrc = roomImage(room, false);
    var scene = h("section", { class: "scene", "aria-label": room.name + " room" }, [
      h("div", { class: "street-blur", style: "background-image:url('" + safeSrc(sceneSrc) + "')" }),
      h("div", { class: "scene-img" }, [imgWithFallback([sceneSrc], room.name + " room", "eager")])
    ]);
    main.appendChild(scene);

    var own = inRoom(room);
    var total = deepCount(room);
    var statBits = [plural(total, "record")];

    main.appendChild(h("header", { class: "plaque" }, [
      t.length > 1 ? h("p", { class: "parent-path" }, t.slice(0, -1).reduce(function (acc, r, i) {
        if (i) acc.push(" › ");
        acc.push(h("a", { href: roomHref(r), text: r.name }));
        return acc;
      }, [])) : null,
      h("h1", { class: "neon", text: room.name }),
      room.blurb ? h("p", { class: "blurb", text: room.blurb }) : null,
      h("p", { class: "stats", text: statBits.join(" · ") })
    ]));

    var body = h("div", { class: "wrap" });
    main.appendChild(body);
    if (LOCAL && fileTrouble.indexOf(albumFile(room)) > -1) body.appendChild(fileCheck());

    // 1) sub-rooms first
    if (room.subs.length) {
      body.appendChild(h("section", { class: "block", "aria-labelledby": "subs-h" }, [
        h("div", { class: "block-head" }, [h("h2", { id: "subs-h", text: "Sections" }), h("span", { class: "sub", text: "Step through to a sub-room" })]),
        h("div", { class: "doorways" }, room.subs.map(function (s) { return roomCard(s, "h3"); }))
      ]));
    }

    // 2) staff picks for this room, plus the picks in its sections (Neo Soul's show in R&B / Soul / Funk too)
    var below = [];
    (function walk(r) { r.subs.forEach(function (s) { below.push(s.fullId); walk(s); }); })(room);
    var pickSeen = {}, picks = [];
    own.concat(records.filter(function (r) { return r.sections.some(function (s) { return below.indexOf(s) > -1; }); }))
      .forEach(function (rec) {
        var k = rec.key + "|" + rec.year;
        if (!isPick(rec) || pickSeen[k]) return;
        pickSeen[k] = true;
        picks.push(rec);
      });
    picks.sort(function (a, b) { return SORTS.date.cmp(a, b, 1); });     // oldest first; undated at the end
    if (picks.length) {
      var shelf = h("div", { class: "shelf" }, picks.map(function (rec) {
        var el = recordEl(rec);
        el.classList.add("pick-record");
        var from = rec.sections[0] !== room.fullId ? findItIn([rec.sections[0]]) : null;
        return h("div", { class: "pick" }, [el, rec.note ? h("p", { class: "talker", text: rec.note }) : null, from]);
      }));
      body.appendChild(h("section", { class: "block picks", "aria-labelledby": "picks-h" }, [
        h("div", { class: "block-head" }, [h("h2", { id: "picks-h", class: "tag", text: "Staff Picks" })]),
        shelf,
        h("div", { class: "plank", "aria-hidden": "true" })
      ]));
    }

    // 3) the room's own bins (records not filed in a sub-room); a room that is only sections gets the search box
    if (own.length || !room.subs.length) body.appendChild(crateBlock(room, own));
    else body.appendChild(h("div", { class: "block" }, [askBlock({ exclude: room.fullId })]));

    // walk to neighbouring rooms
    var idx = order.indexOf(room);
    var prev = order[idx - 1], next = order[idx + 1];
    function walkName(r) { return trail(r).map(function (x) { return x.name; }).join(" › "); }
    body.appendChild(h("nav", { class: "walk", "aria-label": "Walk to another room" }, [
      prev ? h("a", { class: "prev", href: roomHref(prev) }, [h("small", { text: "← Previous room" }), h("span", { text: walkName(prev) })]) : null,
      next ? h("a", { class: "next", href: roomHref(next) }, [h("small", { text: "Next room →" }), h("span", { text: walkName(next) })]) : null
    ]));
  }

  function crateBlock(room, own) {
    var saved = store("tsomtc.sort") || {};
    var state = {
      mode: SORTS[saved.mode] ? saved.mode : "artist",
      dir: saved.dir === -1 ? -1 : 1,
      q: ""
    };

    var section = h("section", { class: "block", "aria-labelledby": "crate-h" });
    if (room.crateImg && own.length) {
      section.appendChild(h("div", { class: "crate-banner" }, [imgWithFallback([imgPath(room.crateImg, false)], "")]));
    }

    var heading = room.subs.length ? "The " + room.name + " bins" : "The bins";
    var count = h("small");
    var segBtns = {};
    var seg = h("div", { class: "seg", role: "group", "aria-label": "Sort records" },
      Object.keys(SORTS).map(function (k) {
        var b = h("button", { type: "button", "aria-pressed": String(k === state.mode), text: SORTS[k].label,
          onclick: function () { state.mode = k; sync(); } });
        segBtns[k] = b;
        return b;
      }));
    var dirBtn = h("button", { type: "button", class: "dir-btn", onclick: function () { state.dir *= -1; sync(); } });
    var digTimer = null;
    var dig = h("input", { class: "dig", type: "search", placeholder: "Dig through this crate…", autocomplete: "off", spellcheck: "false",
      "aria-label": "Search this room; matches in other rooms are listed under the crate",
      oninput: function () { state.q = dig.value.trim(); clearTimeout(digTimer); digTimer = setTimeout(draw, 120); } });
    var grid = h("div", { class: "crate", id: "crate" });
    var away = h("div", { class: "elsewhere", "aria-live": "polite" });     // Ask the Staff: the same search, other rooms

    section.appendChild(h("div", { class: "crate-head" }, [
      h("h2", { id: "crate-h" }, [heading, count]),
      own.length > 1 ? seg : null, own.length > 1 ? dirBtn : null, own.length ? dig : null
    ]));
    if (room.subs.length) {
      section.appendChild(h("p", { style: "color:var(--faint);font-size:14px;margin:-8px 0 12px",
        text: "Filed under " + room.name + " but not in one of its sections." }));
    }
    section.appendChild(grid);
    section.appendChild(away);

    function sync() {
      store("tsomtc.sort", { mode: state.mode, dir: state.dir });
      Object.keys(segBtns).forEach(function (k) { segBtns[k].setAttribute("aria-pressed", String(k === state.mode)); });
      dirBtn.hidden = !SORTS[state.mode].dated;
      dirBtn.textContent = state.dir === 1 ? "Oldest first ↑" : "Newest first ↓";
      dirBtn.setAttribute("aria-label", "Date order: " + dirBtn.textContent + ". Click to reverse.");
      draw();
    }

    function draw() {
      grid.innerHTML = "";
      away.innerHTML = "";
      var elsewhere = state.q ? staffAnswer(state.q, { exclude: room.fullId, limit: 12 }) : null;
      if (elsewhere) {
        away.appendChild(h("div", { class: "block-head" }, [
          h("h3", { class: "tag", text: "Ask the Staff" }),
          h("span", { class: "sub", text: "Found outside " + room.name })
        ]));
        away.appendChild(elsewhere);
      }
      if (!own.length) {
        // an empty room because its album file is missing or broken says so (a note for you, small print for visitors)
        var f = albumFile(room);
        var why = fileMissing.indexOf(f) > -1 ? f + " wasn't found. It belongs in the albums folder, named exactly that."
          : fileTrouble.indexOf(f) > -1 ? f + " has a typo, so nothing on it could be read (F12 → Console shows the line)." : "";
        grid.appendChild(h("div", { class: "empty" }, [h("strong", { text: "Still stocking this one." }), "New arrivals are on the way.",
          why ? h("small", { class: "empty-why", text: why }) : null]));
        count.textContent = "";
        return;
      }
      var s = SORTS[state.mode], w = words(state.q);
      var list = own.filter(function (r) { return !w.length || matches(r, w); })
        .sort(function (a, b) { return s.cmp(a, b, state.dir) || a.i - b.i; });

      count.textContent = w.length ? list.length + " of " + own.length : String(own.length);
      if (!list.length) {
        grid.appendChild(h("div", { class: "empty" }, elsewhere
          ? [h("strong", { text: "Not in this crate." }), "But the staff found it elsewhere in the shop, just below."]
          : [h("strong", { text: "Nothing in the shop by that name." }), "Try another dig."]));
        return;
      }
      var frag = document.createDocumentFragment();
      var last = null;
      list.forEach(function (rec) {
        var g = s.group(rec);
        var el = recordEl(rec);
        if (g !== last) {
          // divider card: a tab standing up behind the first record of each letter / decade
          el.classList.add("first-of-group");
          el.insertBefore(h("span", { class: state.mode === "date" ? "tab decade" : "tab", "aria-hidden": "true", text: g }), el.firstChild);
          last = g;
        }
        frag.appendChild(el);
      });
      grid.appendChild(frag);
      if (player) placePlayer();                 // keep an open player beside its record after a re-sort
    }

    sync();
    return section;
  }

  /* ---------- boot: load every room's album file, then build the page ---------- */
  var page = document.body.getAttribute("data-page");
  if (page === "storefront") setupStreet();

  var pending = order.length;
  order.forEach(function (room) {
    var file = albumFile(room);
    var el = document.createElement("script");
    el.src = file + (VER ? "?v=" + encodeURIComponent(VER) : "");
    el.setAttribute("data-room", room.fullId);
    el.onload = function () {
      if (!(room.fullId in shelves)) fileTrouble.push(file);            // loaded but never reached shelf(): a typo
      done();
    };
    el.onerror = function () { shelves[room.fullId] = []; fileMissing.push(file); done(); };     // no file for this room: empty shelf
    document.head.appendChild(el);
  });

  var moved = false;                       // the visitor scrolled while the albums were loading: leave them be
  ["wheel", "touchmove", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, function () { moved = true; }, { once: true, passive: true });
  });

  function done() {
    if (--pending) return;
    buildRecords();
    if (page === "storefront") {
      renderStorefront();
      var target = new URLSearchParams(location.search).get("ask") ? document.querySelector(".ask")
        : location.hash === "#directory" ? document.getElementById("directory") : null;
      if (target && !moved) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - (target.id ? 0 : 24), behavior: "instant" });
    }
    if (page === "room") renderRoom();
    requestAnimationFrame(function () { document.documentElement.classList.add("smooth"); });
    window.TSOMTC = { rooms: byId, records: records };   // for poking at in the console (F12)
  }
})();
