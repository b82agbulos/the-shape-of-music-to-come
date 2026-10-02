/* Podcasts / Broadcasts
   ---------------------
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
  /* Podcasts: put the show name in artist, "Podcast" in album, and the years it ran in released
     ("2020-2021" shows as 2020–2021). A Spotify show or episode link works too:
     spotify: "https://open.spotify.com/show/XXXXXXXXXXXXXXXXXXXXXX" */

  { artist: "Bela Lugosi", album: "Suspense (An Original Radio Broadcast)", released: "1973", spotify: "", pick: true },
  { artist: "Mary Shelley, Robert Louis Stevenson, Bram Stoker", album: "The Great Radio Horror Shows (feat. Boris Karloff, Bela Lugosi)", released: "1975", spotify: "", pick: true },
  { artist: "Parkdale Haunt", album: "Podcast", released: "2020-2021", spotify: "" },
  { artist: "Rue Morgue Radio", album: "Podcast", released: "2005-2012", spotify: "", pick: true },

  { artist: "", album: "", released: "", spotify: "" },

]);
