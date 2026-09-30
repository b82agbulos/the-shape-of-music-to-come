/* ===========================================================
   Currently Playing — pulls your latest scrobble from Last.fm
   Settings live in js/shop-map.js -> SHOP.lastfm
   =========================================================== */
(function () {
  "use strict";
  var cfg = (window.SHOP && window.SHOP.lastfm) || {};
  if (!cfg.user || !cfg.apiKey) return;

  var PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f"; // Last.fm's grey-star "no art" image
  var API = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&limit=1" +
            "&user=" + encodeURIComponent(cfg.user) + "&api_key=" + encodeURIComponent(cfg.apiKey);
  var every = Math.max(15, cfg.pollSeconds || 30) * 1000;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var bar = el("aside", "np");
  bar.setAttribute("aria-label", "Currently playing");
  bar.hidden = true;
  var link = el("a", "np-link");
  link.target = "_blank"; link.rel = "noopener";
  var art = el("span", "np-art");
  var vinyl = el("span", "np-vinyl");
  var img = el("img"); img.alt = "";
  var blank = el("span", "np-blank", "♪");
  art.append(vinyl, img, blank);
  var text = el("span", "np-text");
  var label = el("span", "np-label", "Currently Playing");
  var track = el("span", "np-track");
  var sub = el("span", "np-sub");
  text.append(label, track, sub);
  var live = el("span", "sr-only");
  live.setAttribute("aria-live", "polite");
  link.append(art, text);
  var hide = el("button", "np-toggle", "×");
  hide.type = "button"; hide.title = "Minimise"; hide.setAttribute("aria-label", "Minimise Currently Playing");
  var open = el("button", "np-open");
  open.type = "button"; open.setAttribute("aria-label", "Show Currently Playing");
  bar.append(link, hide, open, live);
  document.body.appendChild(bar);

  function setCollapsed(c) {
    bar.classList.toggle("collapsed", c);
    document.body.classList.toggle("has-np", !c && !bar.hidden);
    try { localStorage.setItem("tsomtc.np.collapsed", c ? "1" : "0"); } catch (e) {}
  }
  hide.addEventListener("click", function () { setCollapsed(true); });
  open.addEventListener("click", function () { setCollapsed(false); });
  var startCollapsed = false;
  try { startCollapsed = localStorage.getItem("tsomtc.np.collapsed") === "1"; } catch (e) {}

  function ago(uts) {
    var s = Math.max(0, Date.now() / 1000 - Number(uts));
    if (s < 90) return "just now";
    var m = Math.round(s / 60);
    if (m < 60) return m + " min ago";
    var hr = Math.round(m / 60);
    if (hr < 24) return hr + (hr === 1 ? " hour ago" : " hours ago");
    var d = Math.round(hr / 24);
    return d + (d === 1 ? " day ago" : " days ago");
  }
  function bestImage(list) {
    var src = "";
    (list || []).forEach(function (i) { if (i && i["#text"]) src = i["#text"]; }); // last = largest
    return src.indexOf(PLACEHOLDER) > -1 ? "" : src;
  }

  var lastKey = "";
  function render(t) {
    var isLive = !!(t["@attr"] && t["@attr"].nowplaying === "true");
    var name = t.name || "";
    var artist = (t.artist && (t.artist["#text"] || t.artist.name)) || "";
    var album = (t.album && t.album["#text"]) || "";
    var src = bestImage(t.image);

    bar.classList.toggle("live", isLive);
    label.textContent = isLive ? "Currently Playing" : "Last Played · " + (t.date ? ago(t.date.uts) : "");
    track.textContent = name;
    sub.textContent = [artist, album].filter(Boolean).join(" · ");
    link.href = t.url || ("https://www.last.fm/user/" + encodeURIComponent(cfg.user));
    link.title = "Open on Last.fm";
    if (src) { if (img.getAttribute("src") !== src) img.src = src; img.hidden = false; blank.hidden = true; }
    else { img.hidden = true; blank.hidden = false; }

    var key = [isLive, name, artist].join("|");
    if (key !== lastKey) { live.textContent = (isLive ? "Now playing: " : "Last played: ") + name + " by " + artist; lastKey = key; }

    if (bar.hidden) { bar.hidden = false; setCollapsed(startCollapsed); }
  }

  var timer = null;
  function tick() {
    clearTimeout(timer);
    if (document.hidden) return;                // resume on visibilitychange
    fetch(API, { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (data) {
        var list = data && data.recenttracks && data.recenttracks.track;
        var t = [].concat(list || [])[0];
        if (t) render(t);
      })
      .catch(function (err) {
        console.warn("Currently Playing: " + err.message);
        if (!bar.hidden) label.textContent = "Turntable's quiet right now";
      })
      .then(function () { timer = setTimeout(tick, every); });
  }
  document.addEventListener("visibilitychange", function () { if (!document.hidden) tick(); });
  tick();
})();
