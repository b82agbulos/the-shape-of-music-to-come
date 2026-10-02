/* Reggae / Dub / Dancehall
   ------------------------
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

  { artist: "Bob Marley and the Wailers", album: "Catch a Fire", released: "1973", spotify: "https://open.spotify.com/album/39kLAVdcgW7jbMcTEaY2qy", pick: true },
  { artist: "Bob Marley and the Wailers", album: "Exodus", released: "1977", spotify: "https://open.spotify.com/album/2mBbV0Ad6B4ydHMZlzAY7S", pick: true },
  { artist: "Bob Marley and the Wailers", album: "Legend", released: "1984", spotify: "https://open.spotify.com/album/04VRfesff9bgDA2Q8J2oDo" },
  { artist: "Bob Marley and the Wailers", album: "Natty Dread", released: "1974", spotify: "https://open.spotify.com/album/1d8lF3nZpEIFeEbWmAt9Ey", pick: true },
  { artist: "Capleton", album: "More Fire", released: "2000", spotify: "" },
  { artist: "Derrick Morgan", album: "Moon Hop", released: "1970", spotify: "" },
  { artist: "Desmond Dekker & the Aces", album: "007 Shanty Town", released: "1967", spotify: "" },
  { artist: "The Maytals", album: "Never Grow Old", released: "1964", spotify: "" },
  { artist: "The Pioneers", album: "Long Shot", released: "1969", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
