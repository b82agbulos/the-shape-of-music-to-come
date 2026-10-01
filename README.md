# The Shape of Music to Come

A record hang-out you walk through: entrance → Directory → rooms → sub-rooms.
Static site (HTML/CSS/JS, no build step). Runs on GitHub Pages the same way Melodic Mosaic does,
and opens straight from your hard drive for previewing (double-click `index.html`).

```
index.html            entrance + Directory
room.html             every room and section (room.html?s=metal/thrash)
albums/               ONE FILE PER ROOM OR SECTION: the albums you put on its shelves
js/shop-map.js        the store layout: rooms, order, colours, images, Last.fm
js/cover-library.js   Melodic Mosaic covers + dates, lent to matching albums
js/staff-picks.js     house Staff Picks: the window display + albums that are always picks
css/shop.css          all styling
js/shop.js            the engine (no need to edit)
js/now-playing.js     Currently Playing bar (no need to edit)
prepare-images.ps1    renames + compresses your 50 room pictures into images/rooms/
```

You add albums in `albums/`, and occasionally change rooms in `js/shop-map.js`. Nothing else needs editing.

---

## 1. Put the room pictures in

Your images are in `Downloads\The Shape of Music to Come images`. From this folder, in PowerShell:

```
powershell -ExecutionPolicy Bypass -File .\prepare-images.ps1
```

It matches each file by name (spaces, dashes and punctuation don't matter), then writes a
1920-wide JPG and a 640-wide thumbnail for each into `images\rooms\`. That takes each picture
from several MB to a few hundred KB, which matters because the Directory shows 24 of them at once.

- `-DryRun` shows the matching without writing anything.
- `-Source "D:\somewhere\else"` if the images moved.
- If Windows can't convert for some reason, it copies the originals instead (they still work, just heavier).

How your files were assigned:

| Your file | Used as |
|---|---|
| `The Shape of Music to Come.0.png` | storefront |
| `Hip Hop.png`, `R&B Soul Funk.png`, `Halloween.png` | room scene |
| `Hip Hop- Hip Hop.png`, `R&B Soul Funk- R&B Soul Funk.png`, `Halloween.0.png` | banner above that room's own bins (records not in a sub-room) |
| everything else | its room or sub-room |

Every room now has its own picture: `Halloween- Stage & Screen.png` is the Halloween › Stage & Screen
room and `Playlists.png` is the Playlists room. When you add or replace a picture, just rerun the script.
If a room ever has no picture, it borrows its parent room's (or the storefront) until you add one.

You don't need to bake text into the pictures. Each room's name is shown as a neon sign under the picture.

---

## 2. Put albums on the shelves (`albums/`)

Every room and every section has its own file, named like its picture:

| Room | File |
|---|---|
| Jazz | `albums/jazz.js` |
| Metal › Thrash Metal | `albums/metal-thrash.js` |
| Metal (records not in a section) | `albums/metal.js` |
| Halloween › Stage & Screen › Spoken Word | `albums/halloween-stage-screen-spoken-word.js` |

Open one in Notepad (or VS Code) and add one line per album between `shelf([` and `]);`:

```js
shelf([

  { artist: "", album: "", released: "", spotify: "" },

  { artist: "Metallica", album: "Master of Puppets", released: "1986-03-03", spotify: "https://open.spotify.com/album/XXXXXXXXXXXXXXXXXXXXXX" },
  { artist: "Slayer", album: "Reign in Blood", released: "1986", spotify: "https://open.spotify.com/album/XXXXXXXXXXXXXXXXXXXXXX" },

]);
```

- Copy the blank line, fill in the quotes, keep the **comma at the end**. The blank line is ignored.
- **spotify** is the album's Spotify link (in Spotify: **… → Share → Copy link to album**). Clicking the
  record pops Spotify's player out next to it, so visitors stay on the site (click it again, ×, or Esc to put it
  away; Ctrl/⌘-click still opens Spotify in a new tab). The album's cover is taken from Spotify automatically. The `?si=…` tail on copied links is fine.
  An album with `spotify: ""` still shows, with "Link coming" on hover.
- **released** can be `"1986"` or `"1986-03-03"`. It drives the release-date sorts.
- Order in the file doesn't matter; the site alphabetizes.
- An album can go in more than one room: put its line in each room's file.
- A title with a double quote in it needs a backslash: `album: "The \"Chirping\" Crickets"`.
  Apostrophes are fine as they are: `album: "Kill 'Em All"`.

**Optional extras**, inside the `{ }` with a comma before each:

| Extra | What it does |
|---|---|
| `pick: true` | Staff Pick in this room (the shelf appears once a room has one) |
| `note: "..."` | Handwritten card under a Staff Pick |
| `type: "EP"` | Small badge on the cover (`"Live"`, `"Comp"`… work too) |
| `cover: "some-file.jpg"` | Use this picture instead of Spotify's. A bare file name means `images/covers/some-file.jpg`; a path or web address is used as written. |
| `link: "https://..."` | For an album that isn't on Spotify: Play opens this link instead (Drive, Bandcamp, YouTube…) |
| `sortAs: "Dylan, Bob"` | File it under a different name |

**Podcasts and radio shows:** put the show's name in `artist`, `"Podcast"` in `album`, and the years it ran in
`released` (`"2020-2021"` shows as 2020–2021). A Spotify show or episode link (`open.spotify.com/show/…`) works in `spotify`.

**Covers** come from Spotify for every album with a `spotify` link: the site asks Spotify's public
embed service for the album's cover (640 px) as the record scrolls into view, and each browser remembers
the answer. For an album that isn't on Spotify, save a cover in `images/covers/` named exactly
**Artist - Album** with `.jpg` or `.png`, matching the `artist` and `album` text
(e.g. `images/covers/Chuck Berry - Chuck Berry's Golden Decade.jpg`), and it's picked up with no code.
Leave out characters Windows won't allow in file names (`\ / : * ? " < > |`); GitHub Pages is
case-sensitive, so capitals must match.

When none of those has a cover, the site looks the album up on **Wikipedia**, then **MusicBrainz's Cover Art
Archive**, then **Apple Music**, and only uses an answer whose title and artist match the line. Those three are
asked one record at a time (MusicBrainz allows about one lookup a second, Apple about 20 a minute), records
on screen first, so in a room with many unlinked albums the first visit fills in over a minute or two; after
that the browser remembers every answer and they appear straight away. Adding the album's Spotify link
makes its cover instant for everyone.

Bandcamp and Discogs can't be searched from a web page (Discogs needs your personal key, which would be
public on GitHub), but their covers work by hand: right-click the cover on the album's page → **Copy image
address**, and paste it as `cover: "https://f4.bcbits.com/img/....jpg"`.

Order of preference: `cover:` on the line → Spotify → your saved `Artist - Album` image → the Melodic Mosaic
cover → Wikipedia → Cover Art Archive → Apple Music → a plain labelled sleeve.

```js
  { artist: "Joy Division", album: "Unknown Pleasures", released: "1979-06-15",
    spotify: "https://open.spotify.com/album/XXXXXXXXXXXXXXXXXXXXXX",
    pick: true, note: "Headphones, lights off" },
```

**If a room suddenly shows empty,** that file has a typo, usually a missing comma between two lines or a
missing quote. When you open the site from your own computer, a red box at the top of the Directory names
the file; F12 → Console gives the line number. One broken file never affects the other rooms.

## House Staff Picks (`js/staff-picks.js`)

- **`window`**: the Staff Picks display at the bottom of the Directory, below the rooms. Shown in the order listed, five on the top shelf and four below. Each line carries its own
  Spotify link; if the same album is also filed in a room, the room's line is used (and the display
  gets a "Find it in …" link to that room).
- **`always`**: albums that are a Staff Pick in whatever room they're filed in, automatically. No
  `pick: true` needed on their lines. Matching ignores capitals, punctuation, accents, a leading "The",
  "&" vs "and", and anything in brackets, and the artist may be longer or shorter by whole words
  ("Jimi Hendrix" = "The Jimi Hendrix Experience", "Prince" = "Prince and the Revolution").
  Other titles an album goes by go in `also: ["..."]`.

## 3. How a room is laid out

The Directory only shows the main rooms. Sections stay out of sight until you walk into a room.

1. The room scene (your 1920×1080 picture) and its neon sign
2. **Sections**: the sub-rooms, as doorways (only on rooms that have them)
3. **Staff Picks**: on a shelf, with shelf-talkers
4. **The bins**: the room's own records, i.e. the ones filed to that room and not to one of its sub-rooms
5. Previous room / Next room, following the Directory order

**Sorting** (the choice is remembered from room to room):

- **Artist · Title**: default. Artists A→Z, then album titles A→Z.
- **Artist · Release date**: artists A→Z, each artist's catalogue in release order.
- **Release date**: the whole room chronologically, divided by decade.

The last two have an Oldest first / Newest first toggle. Leading "The", "A", "An" and punctuation are
ignored for filing (The Clash under C, "...And Justice for All" under A), accents are ignored (Björk under B).
Letter or decade divider cards stick up behind the first record of each group, like a real bin.
Rooms with more than 12 records also get a "Dig through this crate" filter.

---

## 4. Rooms (`js/shop-map.js`)

Rooms are listed in Directory order. The Directory is split into **The Floor** (genre rooms) and
**Back Rooms** (Halloween, Podcasts / Broadcasts, Stage & Screen, Playlists) via each room's `wing`.

To add a room, add a line in the right place:

```js
{ id: "shoegaze", wing: "floor", name: "Shoegaze / Dream Pop", accent: "#9fd3ff" },
```

…then create its album file, `albums/shoegaze.js` (copy any album file and empty it). To add a
section, put it in the parent's `subs: [ … ]`. Its id becomes `parent/child`, its album file is
`albums/parent-child.js` and its picture `images/rooms/parent-child.jpg`. `accent` is the room's neon colour
(signs, divider tabs, the vinyl label, the play button).

---

## 5. Currently Playing

The bar in the bottom-right of every page reads your latest Last.fm scrobble (user `bagbulos82`,
same API key as Melodic Mosaic, both set in `js/shop-map.js`). It checks every 30 seconds while the tab is visible,
shows "Currently Playing" with a spinning record when you're listening, and "Last Played · 12 min ago" when you're not.
Clicking it opens the track on Last.fm; × tucks it into a small record in the corner.

Names are shown exactly as Last.fm has them (the Melodic Mosaic version title-cased them, which turned
"AC/DC" into "Ac/dc" and "OK Computer" into "Ok Computer").

---

## 6. Publish on GitHub Pages

1. New repository, e.g. `the-shape-of-music-to-come`.
2. Upload everything in this folder, including `images/rooms/`. (The original PNGs and `tools/` can stay on your computer.)
3. Settings → Pages → Deploy from branch → `main` / root.
4. It'll be at `https://b82agbulos.github.io/the-shape-of-music-to-come/`.

**Phones showing an old look after an update?** Browsers keep old copies of `css/shop.css` and the `js/`
files. `index.html` and `room.html` load them as `shop.css?v=20260930f` etc.; whenever a new `css/` or `js/`
file goes up, change that `v=` value in both pages (any new text works) and every browser fetches the new one.
