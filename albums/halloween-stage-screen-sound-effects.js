/* Halloween › Stage & Screen › Sound Effects
   ------------------------------------------
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

  { artist: "D", album: "Halloween", released: "1969", spotify: "" },
  { artist: "Disneyland", album: "Chilling, Thrilling Sounds of the Haunted House", released: "1964", spotify: "" },
  { artist: "Gayle House", album: "The Haunting", released: "1971", spotify: "" },
  { artist: "Haunted House Music Co.", album: "Haunted House", released: "1985", spotify: "" },
  { artist: "Haunted House Music Co.", album: "Night In A Graveyard", released: "1985", spotify: "" },
  { artist: "HRB Music Company", album: "Horror Sounds of Terror - Terror 61 Sounds of Horror", released: "1979", spotify: "" },
  { artist: "J. Robert Elliot", album: "Halloween Horrors: The Sounds Of Halloween (And Other Useful Effects)", released: "1977", spotify: "" },
  { artist: "Jane Gipps and Ralph Harding", album: "Halloween Sound Effects: Music and Effects Of A Terrifying Nature", released: "1982", spotify: "" },
  { artist: "Johnson Smith Novelty Company", album: "Horror Record", released: "1973", spotify: "" },
  { artist: "MP-TV Services Inc", album: "Spook Stuff For Hallowe'en", released: "1960", spotify: "" },
  { artist: "Peter Waldron, Gershon Kingsley", album: "Ghostly Sounds", released: "1973", spotify: "" },
  { artist: "Pickwick", album: "Sounds To Make You Shiver!", released: "1974", spotify: "" },
  { artist: "Power Records", album: "Ghostly Sounds", released: "1971", spotify: "" },
  { artist: "Sounds Records", album: "Hallowe'en Spooky Sounds", released: "1962", spotify: "" },
  { artist: "Sounds Records", album: "Spooky Sound Effects", released: "1961", spotify: "" },
  { artist: "The Kid Stuff Repertory Company", album: "Mostly Ghostly", released: "1977", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
