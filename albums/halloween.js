/* Halloween
   ---------
   Records filed under Halloween but NOT in one of its sections.
   The sections have their own files:
     albums/halloween-compilations.js   (Compilations)
     albums/halloween-playlists.js   (Playlists)
     albums/halloween-stage-screen.js   (Stage & Screen)
     albums/halloween-podcasts.js   (Podcasts / Broadcasts)

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

  { artist: "Bob McFadden And Dor", album: "Songs Our Mummy Taught Us", released: "1959", spotify: "https://open.spotify.com/album/5zwurPMQVlTP8RhiSzL2ew" },
  { artist: "Bobby (Boris) Pickett and The Crypt-Kickers", album: "Monster Mash", released: "1973", spotify: "https://open.spotify.com/album/5naJTSCAnIVRMEfxTXBLhb" },
  { artist: "Bobby (Boris) Pickett and The Crypt-Kickers", album: "The Original Monster Mash", released: "1962", spotify: "https://open.spotify.com/album/58bEJGRsEmiK3qQoBsU3J5" },
  { artist: "Children Of The Night", album: "Dinner With Drac!", released: "1976", spotify: "" },
  { artist: "Dark Asylum Music", album: "The Terror Cycle", released: "2004", spotify: "" },
  { artist: "Dave Miller", album: "Midnight Fever: The Ultimate Horror Party Rock", released: "2000", spotify: "" },
  { artist: "Dickie Goodman", album: "The Monster Album - Dickie Goodman's Halloween", released: "2009", spotify: "https://open.spotify.com/album/0p1SUuePBr7PVuEEX4ll7W" },
  { artist: "Don Hinson & The Rigamorticians", album: "Monster Dance Party", released: "1964", spotify: "https://open.spotify.com/album/4Ucm5B1SXAUCRuuBFQUPWE" },
  { artist: "Eddie And The Monsters", album: "Whatever Happened To Eddie", released: "1983", spotify: "" },
  { artist: "Frankenstein And The All-Star Monster Band", album: "Frankenstein And The All-Star Monster Band", released: "1984", spotify: "" },
  { artist: "Frankie Stein And His Ghouls", album: "Ghoul Music", released: "1965", spotify: "" },
  { artist: "Frankie Stein And His Ghouls", album: "Introducing Frankie Stein And His Ghouls", released: "1964", spotify: "" },
  { artist: "Frankie Stein And His Ghouls", album: "Monster Melodies", released: "1965", spotify: "" },
  { artist: "Frankie Stein And His Ghouls", album: "Monster Sounds And Dance Music", released: "1965", spotify: "https://open.spotify.com/album/79gjlsilqYSHMBccSj5V7c" },
  { artist: "Frankie Stein And His Ghouls", album: "Shock! Terror! Fear!", released: "1965", spotify: "" },
  { artist: "Hans Conried and Alice Pearce", album: "Monster Rally", released: "1959", spotify: "" },
  { artist: "John Zacherle", album: "Monster Mash", released: "1962", spotify: "" },
  { artist: "John Zacherle", album: "Zacherle's Monster Mash Party", released: "2013", spotify: "" },
  { artist: "John Zacherley", album: "Dead Man's Ball", released: "1995", spotify: "" },
  { artist: "John Zacherley", album: "Scary Tales", released: "1963", spotify: "" },
  { artist: "John Zacherley", album: "Spook Along With Zacherley", released: "1960", spotify: "" },
  { artist: "Lonesome Wyatt And The Holy Spooks", album: "Halloween Is Here", released: "2013", spotify: "https://open.spotify.com/album/43op57x1EWg3AkENNKWkDK" },
  { artist: "Lucille Wood", album: "Halloween", released: "", spotify: "" },
  { artist: "Michael Hedstrom", album: "Clive Manor", released: "2001", spotify: "" },
  { artist: "Oscar Brand", album: "Trick Or Treat: Hallowe'en Celebrated In Story And Song", released: "1981", spotify: "" },
  { artist: "Playtime", album: "Spooky Music For Spooky Occasions", released: "1950", spotify: "" },
  { artist: "Ruth Roberts, Gene Piller, Bill Katz", album: "Halloween Songs That Tickle Your Funny Bone", released: "1974", spotify: "" },
  { artist: "Sounds Records", album: "Music for Monsters", released: "", spotify: "" },
  { artist: "Spike Jones", album: "A Spooktacular in Screaming Sound!", released: "1959", spotify: "https://open.spotify.com/album/3wll5CiPffR9GJ1UaJAaMM" },
  { artist: "The Creed Taylor Orchestra", album: "Panic: The Son Of Shock", released: "1960", spotify: "" },
  { artist: "The Creed Taylor Orchestra", album: "Shock: Music in Hi-Fi", released: "1958", spotify: "" },
  { artist: "The Munsters", album: "The Munsters", released: "1964", spotify: "" },
  { artist: "The Peter Pan Players", album: "Monster Mash", released: "1973", spotify: "" },
  { artist: "The Vampires", album: "At The Monster Ball", released: "1964", spotify: "" },
  { artist: "The Wonderland Singers", album: "Spooky Halloween", released: "1974", spotify: "" },
  { artist: "Verne Langdon", album: "Halloween Spooktacular! - Horrific Scary Scores & Sounds", released: "1985", spotify: "" },
  { artist: "Verne Langdon", album: "Music For Magicians", released: "1974", spotify: "" },
  { artist: "Wende and Harry Devlin", album: "Old Witch Rescues Halloween", released: "1974", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
