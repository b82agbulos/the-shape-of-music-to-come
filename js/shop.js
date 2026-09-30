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
    // encode spaces, apostrophes, #, ? etc. in file names without double-encoding
    if (!src) return "";
    var m = src.match(/^([a-z]+:\/\/[^/]+)?(.*)$/i);
    var path = m[2], query = "";
    if (m[1]) { var q = path.search(/[?#]/); if (q > -1) { query = path.slice(q); path = path.slice(0, q); } }
    path = path.split("/").map(function (seg) {
      try { seg = decodeURIComponent(seg); } catch (e) {}
      return encodeURIComponent(seg);
    }).join("/");
    return (m[1] || "") + path + query;
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
    var m = String(d || "").match(/^(\d{4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/);
    if (!m) return null;
    return m[1] + "-" + (m[2] || "00").padStart(2, "0") + "-" + (m[3] || "00").padStart(2, "0");
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
    var m = String(v || "").match(/(album|playlist|track)[\/:]([A-Za-z0-9]{22})/);
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

  var shelves = {};        // room full id -> the list from its album file
  var fileTrouble = [];    // album files that loaded but didn't run (a typo)

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
      year: dk ? dk.slice(0, 4) : "",
      dateKey: dk,
      artistKey: stripKey(a.sortAs || artist || album),
      titleKey: stripKey(album),
      sections: roomId ? [roomId] : [],
      spotify: spotifyRef(a.spotify),
      link: (spotifyRef(a.spotify) || {}).url || String(a.link || "").trim(),
      cover: coverPath(a.cover),                                       // cover: "..." in the album file
      coverAuto: coverFileName(artist, album),                         // images/covers/Artist - Album.jpg
      coverLib: lib.cover || "",                                       // Melodic Mosaic
      note: a.note || "",
      pick: a.pick === true || a.pick === "yes" || isHousePick(artist, album)   // yours, or on the house list
    };
  }
  function buildRecords() {
    covers = {};
    (window.COVER_LIBRARY || []).forEach(function (c) { covers[recKey(c.artist, c.album)] = c; });

    records = [];
    order.forEach(function (room) {
      var seen = {};
      (shelves[room.fullId] || []).forEach(function (a) {
        if (!a || typeof a !== "object") return;
        if (!String(a.artist || "").trim() && !String(a.album || "").trim()) return;   // the empty example line
        var rec = makeRecord(a, room.fullId);
        if (seen[rec.key]) return;                                       // listed twice in one file
        seen[rec.key] = true;
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

  function recordEl(rec, opts) {
    opts = opts || {};
    var hasLink = !!rec.link;
    var label = (rec.artist ? rec.artist + " — " : "") + rec.album + (rec.year ? " (" + rec.year + ")" : "");
    var el = h(hasLink ? "a" : "div", hasLink
      ? { class: "record", href: rec.link, target: "_blank", rel: "noopener",
          title: (/open\.spotify\.com/.test(rec.link) ? "Play on Spotify: " : "Play: ") + label,
          "aria-label": "Play " + label }
      : { class: "record no-link", tabindex: "0", title: label + " — link coming soon", "aria-label": label + ", no link yet" });

    var sleeve = h("div", { class: "sleeve" }, [h("span", { class: "disc", "aria-hidden": "true" }, [h("i")])]);
    // cover, in order: cover: "..." on the album's line; the album's Spotify cover;
    // images/covers/Artist - Album.jpg (or .png); the Melodic Mosaic cover; a plain labelled sleeve
    var tries = (rec.cover ? [rec.cover] : [])
      .concat(rec.spotify ? [{ spotify: rec.spotify }] : [])
      .concat(!rec.cover && rec.coverAuto ? [rec.coverAuto + ".jpg", rec.coverAuto + ".png"] : [])
      .concat(rec.coverLib && rec.coverLib !== rec.cover ? [rec.coverLib] : []);
    if (tries.length) {
      var n = -1;
      var img = h("img", { class: "cover", alt: "", loading: "lazy", decoding: "async" });
      var next = function () {
        n++;
        if (n >= tries.length) { if (img.parentNode) img.replaceWith(coverFallback(rec)); return; }
        var t = tries[n];
        if (typeof t === "string") { img.src = safeSrc(t); return; }
        spotifyCover(t.spotify).then(function (url) {       // the 640 px image, then the 300 px one
          if (!url) return next();
          var big = spotifyBig(url);
          if (big !== url) tries.splice(n + 1, 0, url);
          img.src = big;
        });
      };
      img.addEventListener("error", next);
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

    // the window display: staff picks before you walk into a room
    var win = windowPicks();
    if (win.length) {
      var perRow = win.length <= 6 ? win.length : Math.ceil(win.length / 2);
      var rows = [];
      for (var i = 0; i < win.length; i += perRow) rows.push(win.slice(i, i + perRow));
      var block = h("section", { class: "block picks window-picks", "aria-labelledby": "window-h" }, [
        h("div", { class: "block-head" }, [
          h("h2", { id: "window-h", class: "tag", text: "Staff Picks" }),
          h("span", { class: "sub", text: "In the window" })
        ])
      ]);
      rows.forEach(function (row) {
        block.appendChild(h("div", { class: "shelf centered" }, row.map(function (w) {
          return h("div", { class: "pick" }, [
            recordEl(w.rec),
            w.rec.note ? h("p", { class: "talker", text: w.rec.note }) : null,
            w.room ? h("a", { class: "window-room", href: roomHref(w.room), text: "Find it in " + w.room.name + " →" }) : null
          ]);
        })));
        block.appendChild(h("div", { class: "plank", "aria-hidden": "true" }));
      });
      dir.appendChild(block);
    }
    var total = new Set(records.map(function (r) { return r.key; })).size;
    document.getElementById("directory-stats").textContent =
      plural(total, "record").replace(/^\d+/, function (n) { return Number(n).toLocaleString(); }) +
      " across " + plural(SHOP.rooms.length, "room") + ". Pick a door.";

    (SHOP.wings || [{ id: "floor", label: "The Floor" }]).forEach(function (w) {
      var rooms = SHOP.rooms.filter(function (r) { return (r.wing || "floor") === w.id; });
      if (!rooms.length) return;
      dir.appendChild(h("section", { class: "wing", "aria-labelledby": "wing-" + w.id }, [
        h("div", { class: "wing-head" }, [h("h2", { id: "wing-" + w.id, text: w.label }), w.note ? h("span", { text: w.note }) : null]),
        h("div", { class: "rooms" }, rooms.map(function (r) { return roomCard(r, "h3"); }))
      ]));
    });
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
        h("p", { style: "color:var(--muted);margin:14px 0 24px", text: id ? 'There\'s no room called "' + id + '" in this shop.' : "No room picked." }),
        h("a", { class: "pill-link", href: "index.html#directory", text: "Back to the Store Directory" })
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

    // 2) staff picks for this room
    var picks = own.filter(function (r) { return isPick(r); })
      .sort(function (a, b) { return SORTS.artist.cmp(a, b, 1); });
    if (picks.length) {
      var shelf = h("div", { class: "shelf" }, picks.map(function (rec) {
        var el = recordEl(rec);
        el.classList.add("pick-record");
        return h("div", { class: "pick" }, [el, rec.note ? h("p", { class: "talker", text: rec.note }) : null]);
      }));
      body.appendChild(h("section", { class: "block picks", "aria-labelledby": "picks-h" }, [
        h("div", { class: "block-head" }, [h("h2", { id: "picks-h", class: "tag", text: "Staff Picks" })]),
        shelf,
        h("div", { class: "plank", "aria-hidden": "true" })
      ]));
    }

    // 3) the room's own bins (records not filed in a sub-room)
    if (own.length || !room.subs.length) body.appendChild(crateBlock(room, own));

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
    var dig = h("input", { class: "dig", type: "search", placeholder: "Dig through this crate…", "aria-label": "Filter records in this room",
      oninput: function () { state.q = dig.value.trim().toLowerCase(); draw(); } });
    var grid = h("div", { class: "crate", id: "crate" });

    section.appendChild(h("div", { class: "crate-head" }, [
      h("h2", { id: "crate-h" }, [heading, count]),
      own.length > 1 ? seg : null, own.length > 1 ? dirBtn : null, own.length > 12 ? dig : null
    ]));
    if (room.subs.length) {
      section.appendChild(h("p", { style: "color:var(--faint);font-size:14px;margin:-8px 0 12px",
        text: "Filed under " + room.name + " but not in one of its sections." }));
    }
    section.appendChild(grid);

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
      if (!own.length) {
        grid.appendChild(h("div", { class: "empty" }, [h("strong", { text: "Still stocking this one." }), "New arrivals are on the way."]));
        count.textContent = "";
        return;
      }
      var s = SORTS[state.mode];
      var list = own.filter(function (r) {
        if (!state.q) return true;
        return (r.artist + " " + r.album + " " + r.year + " " + r.type).toLowerCase().indexOf(state.q) > -1;
      }).sort(function (a, b) { return s.cmp(a, b, state.dir) || a.i - b.i; });

      count.textContent = state.q ? list.length + " of " + own.length : String(own.length);
      if (!list.length) {
        grid.appendChild(h("div", { class: "empty" }, [h("strong", { text: "Nothing in here by that name." }), "Try another dig."]));
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
    el.src = file;
    el.setAttribute("data-room", room.fullId);
    el.onload = function () {
      if (!(room.fullId in shelves)) fileTrouble.push(file);            // loaded but never reached shelf(): a typo
      done();
    };
    el.onerror = function () { shelves[room.fullId] = []; done(); };     // no file for this room: empty shelf
    document.head.appendChild(el);
  });

  function done() {
    if (--pending) return;
    buildRecords();
    if (page === "storefront") renderStorefront();
    else if (page === "room") renderRoom();
    window.TSOMTC = { rooms: byId, records: records };   // for poking at in the console (F12)
  }
})();
