/* Electronic › Bass / Breakbeat / Jungle–DnB / Dubstep / UKG
   ----------------------------------------------------------
   One line per album. Copy the blank line, fill in the quotes, and keep
   the comma at the end. The blank line itself is ignored.

     artist    "Metallica"
     album     "Master of Puppets"
     released  "1986"  or  "1986-03-03"     (used by the release-date sorts)
     spotify   the album's Spotify link      (Play opens it, and its cover is used)

   Optional extras, added inside the { } with a comma before each:
     pick: true                    Staff Pick in this room
     note: "..."                   handwritten card under a Staff Pick
     type: "EP"                    small badge on the cover
     cover: "some-file.jpg"        use this image from images/covers/ instead (see below)
     link: "https://..."           Play opens this instead, for albums not on Spotify
     sortAs: "Dylan, Bob"          file it under a different name

   Covers come from Spotify by themselves. For an album that isn't on Spotify
   (or to use a different picture), save the image in images/covers/ named
   exactly  Artist - Album.jpg  (or .png), e.g.
   images/covers/Chuck Berry - Chuck Berry's Golden Decade.jpg
   Leave out characters Windows won't allow in file names ( \ / : * ? " < > | ).
   A cover: "..." on the line beats everything; a saved Artist - Album file is
   used when there's no Spotify cover; Melodic Mosaic's cover after that.
*/

shelf([

  { artist: "Amon Tobin", album: "Permutation", released: "1998", spotify: "https://open.spotify.com/album/7jxs0XY2yJS36PZCjUv4Hp", pick: true },
  { artist: "Burial", album: "Untrue", released: "2007", spotify: "https://open.spotify.com/album/1C30LhZB9I48LdpVCRRYvq", pick: true },
  { artist: "DJ/rupture", album: "Uproot", released: "2008", spotify: "", link: "https://drive.google.com/drive/folders/1cgGEEy_7Bqlx19HtB43knRKDHTOvG394?usp=drive_link", cover: "https://i.discogs.com/EL_QhOfmUeI5LVHkkWqVPKdu9KTRKpGY0qlxlrZK7Cg/rs:fit/g:sm/q:90/h:470/w:470/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODMw/NjktMTIyMzE0ODM2/Ni5qcGVn.jpeg" },
  { artist: "James Blake", album: "CMYK", released: "2010", spotify: "https://open.spotify.com/album/0LSInSSnuRkl4G6cQ14dFB", type: "EP" },
  { artist: "James Blake", album: "Klavierwerke", released: "2010", spotify: "https://open.spotify.com/album/3IP1sBzXWf7qEq85o2ztJC", type: "EP" },
  { artist: "James Blake", album: "The Bells Sketch", released: "2010", spotify: "https://open.spotify.com/album/3zP81wPe9curAYsIdrWjgl", type: "EP" },
  { artist: "Roni Size & Reprazent", album: "New Forms", released: "1997", spotify: "https://open.spotify.com/album/2wa0kOg4mJ94Iw17Gcv4IL", pick: true },
  { artist: "Skrillex", album: "Bangarang", released: "2011", spotify: "https://open.spotify.com/album/5XJ2NeBxZP3HFM8VoBQEUe", type: "EP" },
  { artist: "Squarepusher", album: "Big Loada", released: "1997", spotify: "https://open.spotify.com/album/0QnctTeHdyQqYptrzGnAmS" },
  { artist: "TNGHT", album: "TNGHT", released: "2012", spotify: "https://open.spotify.com/album/3YryuS3uTm7wogdtqaAb6A", type: "EP" },

  { artist: "", album: "", released: "", spotify: "" },

]);
