/* Metal › Thrash Metal
   --------------------
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

  { artist: "Annihilator", album: "Alice in Hell", released: "1989", spotify: "" },
  { artist: "Anthrax", album: "Among the Living", released: "1987", spotify: "" },
  { artist: "Coroner", album: "No More Color", released: "1989", spotify: "" },
  { artist: "Dark Angel", album: "Darkness Descends", released: "1986", spotify: "" },
  { artist: "Exodus", album: "Bonded by Blood", released: "1985", spotify: "" },
  { artist: "F.K.Ü.", album: "1981", released: "2017", spotify: "" },
  { artist: "Ghoul", album: "Splatterthrash", released: "2006", spotify: "" },
  { artist: "Kreator", album: "Pleasure to Kill", released: "1986", spotify: "" },
  { artist: "Mantic Ritual", album: "Executioner", released: "2009", spotify: "" },
  { artist: "Megadeth", album: "Countdown to Extinction", released: "1992", spotify: "https://open.spotify.com/album/1w9opfGdFtR3ulNHxnnO1e" },
  { artist: "Megadeth", album: "Peace Sells... but Who's Buying?", released: "1986", spotify: "" },
  { artist: "Megadeth", album: "Rust in Peace", released: "1990", spotify: "" },
  { artist: "Metallica", album: "...And Justice for All", released: "1988", spotify: "https://open.spotify.com/album/69oeRoYEpSsNPGVuYRxfoB" },
  { artist: "Metallica", album: "Kill 'Em All", released: "1983", spotify: "https://open.spotify.com/album/6FMPDVTm8l5IrEQla46VQl" },
  { artist: "Metallica", album: "Master of Puppets", released: "1986", spotify: "https://open.spotify.com/album/5gzLOflH95LkKYE6XSXE9k" },
  { artist: "Metallica", album: "Metallica", released: "1991", spotify: "https://open.spotify.com/album/37lWyRxkf3wQHCOlXM5WfX" },
  { artist: "Metallica", album: "Ride the Lightning", released: "1984", spotify: "" },
  { artist: "Municipal Waste", album: "Massive Aggressive", released: "2009", spotify: "" },
  { artist: "Necrodeath", album: "Draculea", released: "2007", spotify: "" },
  { artist: "Overkill", album: "The Years of Decay", released: "1989", spotify: "" },
  { artist: "Send More Paramedics", album: "A Feast For The Fallen", released: "2002", spotify: "" },
  { artist: "Send More Paramedics", album: "The Hallowed and the Heathen", released: "2004", spotify: "" },
  { artist: "Sepultura", album: "Beneath the Remains", released: "1989", spotify: "" },
  { artist: "Sepultura", album: "Chaos A.D.", released: "1993", spotify: "" },
  { artist: "Slayer", album: "Hell Awaits", released: "1985", spotify: "" },
  { artist: "Slayer", album: "Reign in Blood", released: "1986", spotify: "" },
  { artist: "Slayer", album: "Seasons in the Abyss", released: "1990", spotify: "" },
  { artist: "Slayer", album: "South of Heaven", released: "1988", spotify: "" },
  { artist: "Stormtroopers of Death", album: "Speak English or Die", released: "1985", spotify: "" },
  { artist: "Testament", album: "The Legacy", released: "1987", spotify: "" },
  { artist: "Testament", album: "The New Order", released: "1988", spotify: "" },
  { artist: "Voivod", album: "Dimension Hatröss", released: "1988", spotify: "" },
  { artist: "Wendy O. Williams and Plasmatics", album: "Maggots: The Record", released: "1987", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
