/* Halloween › Stage & Screen › Spoken Word
   ----------------------------------------
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

  { artist: "Al Zanino", album: "The Vampire Speaks", released: "1957", spotify: "" },
  { artist: "Ball Records", album: "Ghost Stories: 2 Complete Halloween Ghost Stories", released: "", spotify: "" },
  { artist: "Bob McFadden", album: "Georgie", released: "1968", spotify: "" },
  { artist: "Carol Darr & Mark Masuoka", album: "Haunted House Party Kit", released: "1975", spotify: "" },
  { artist: "Charles M. Schulz", album: "It's The Great Pumpkin, Charlie Brown", released: "1978", spotify: "" },
  { artist: "Classroom Materials Company", album: "Halloween", released: "", spotify: "" },
  { artist: "Eva-Tone Soundsheets", album: "A Spooky Sounding Halloween Story", released: "1978", spotify: "" },
  { artist: "Fat Albert And The Cosby Kids", album: "Halloween", released: "1980", spotify: "" },
  { artist: "Haunted House Music Co.", album: "The Ride Of The Headless Horseman", released: "1985", spotify: "" },
  { artist: "Lionel Barrymore", album: "Hallowe'en", released: "1947", spotify: "" },
  { artist: "Mike Warnke", album: "A Christian Perspective On Halloween", released: "1979", spotify: "" },
  { artist: "Scholastic Records", album: "Selections From \"The Haunted House And Other Spooky Poems And Tales\"", released: "1970", spotify: "" },
  { artist: "Scholastic Records", album: "The Teeny Tiny Woman (A Folktale)", released: "1968", spotify: "" },
  { artist: "The Folktellers", album: "Chillers", released: "1983", spotify: "" },
  { artist: "Troll Associates", album: "Scary Spooky Stories", released: "1973", spotify: "" },
  { artist: "Troll Associates", album: "Weird Tales of the Unknown", released: "1973", spotify: "" },
  { artist: "Vincent Price", album: "A Coven Of Witches' Tales", released: "1973", spotify: "" },
  { artist: "Vincent Price", album: "A Graveyard Of Ghost Tales", released: "1974", spotify: "" },
  { artist: "Vincent Price", album: "A Hornbook For Witches, Stories And Poems For Halloween", released: "1976", spotify: "" },
  { artist: "Vincent Price", album: "Tales Of Witches, Ghosts And Goblins", released: "1972", spotify: "" },
  { artist: "Wade Denning", album: "Famous Ghost Stories! With Scary Sounds", released: "1975", spotify: "" },
  { artist: "Wade Denning", album: "Monster Mash: Sounds of Terror!", released: "1974", spotify: "" },
  { artist: "Wade Denning with Kay Lande", album: "Halloween", released: "1969", spotify: "" },
  { artist: "William Conrad", album: "Spirits and Spooks for Hallowe'en (Summoned Up By William Conrad)", released: "1973", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
