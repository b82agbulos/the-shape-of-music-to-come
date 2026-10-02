/* Metal › Doom Metal / Sludge Metal / Stoner Metal / Post-Metal
   -------------------------------------------------------------
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

  { artist: "Baroness", album: "Blue Record", released: "2009", spotify: "" },
  { artist: "Baroness", album: "Purple", released: "2015", spotify: "" },
  { artist: "Baroness", album: "Red Album", released: "2007", spotify: "" },
  { artist: "Boris", album: "Pink", released: "2005", spotify: "" },
  { artist: "Candlemass", album: "Ancient Dreams", released: "1988", spotify: "" },
  { artist: "Candlemass", album: "Nightfall", released: "1987", spotify: "" },
  { artist: "Castle", album: "Welcome to the Graveyard", released: "2016", spotify: "" },
  { artist: "Cathedral", album: "Forest of Equilibrium", released: "1991", spotify: "" },
  { artist: "Disembowelment", album: "Transcendence Into the Peripheral", released: "1993", spotify: "" },
  { artist: "Earth Tongue", album: "Dungeon Vision", released: "", spotify: "" },
  { artist: "Elder", album: "Lore", released: "2015", spotify: "" },
  { artist: "Electric Wizard", album: "Dopethrone", released: "2000", spotify: "", pick: true },
  { artist: "Eyehategod", album: "Take as Needed for Pain", released: "1993", spotify: "" },
  { artist: "Fu Manchu", album: "In Search of...", released: "1996", spotify: "" },
  { artist: "High on Fire", album: "Blessed Black Wings", released: "2005", spotify: "" },
  { artist: "Hooded Menace", album: "The Tritonus Bell", released: "2021", spotify: "" },
  { artist: "Inverloch", album: "Distance I Collapsed", released: "2016", spotify: "" },
  { artist: "ISIS", album: "Oceanic", released: "2002", spotify: "" },
  { artist: "Kylesa", album: "Spiral Shadow", released: "2010", spotify: "" },
  { artist: "Kyuss", album: "Blues for the Red Sun", released: "1992", spotify: "https://open.spotify.com/album/7wXj8GxTkGAUU99DXR7n2f" },
  { artist: "Kyuss", album: "Welcome to Sky Valley", released: "1994", spotify: "" },
  { artist: "Mastodon", album: "Blood Mountain", released: "2006", spotify: "" },
  { artist: "Mastodon", album: "Leviathan", released: "2004", spotify: "" },
  { artist: "Melvins", album: "Bullhead", released: "1991", spotify: "" },
  { artist: "Melvins", album: "Houdini", released: "1993", spotify: "" },
  { artist: "Melvins", album: "Stoner Witch", released: "1994", spotify: "" },
  { artist: "Minsk", album: "The Ritual Fires of Abandonment", released: "2007", spotify: "" },
  { artist: "Monster Magnet", album: "Dopes to Infinity", released: "1995", spotify: "" },
  { artist: "My Dying Bride", album: "The Angel and the Dark River", released: "1995", spotify: "" },
  { artist: "Neurosis", album: "Through Silver in Blood", released: "1996", spotify: "", pick: true },
  { artist: "Novembers Doom", album: "Amid Its Hallowed Mirth", released: "1995", spotify: "" },
  { artist: "Pagan Altar", album: "Volume 1", released: "1998", spotify: "" },
  { artist: "Pallbearer", album: "Sorrow and Extinction", released: "2012", spotify: "" },
  { artist: "Saint Vitus", album: "Saint Vitus", released: "1984", spotify: "" },
  { artist: "Sleep", album: "Dopesmoker", released: "2003", spotify: "", pick: true },
  { artist: "Sleep", album: "Jerusalem", released: "1999", spotify: "" },
  { artist: "Solitude Aeturnus", album: "Beyond the Crimson Horizon", released: "1992", spotify: "" },
  { artist: "Sólstafir", album: "Svartir Sandar", released: "2011", spotify: "" },
  { artist: "Solstice", album: "Lamentations", released: "1994", spotify: "" },
  { artist: "Sunn O)))", album: "Black One", released: "2005", spotify: "" },
  { artist: "Sunn O)))", album: "Monoliths & Dimensions", released: "2009", spotify: "" },
  { artist: "The Body & Krieg", album: "The Body & Krieg", released: "2015", spotify: "" },
  { artist: "Theatre of Tragedy", album: "Aégis", released: "1998", spotify: "" },
  { artist: "Thergothon", album: "Stream from the Heavens", released: "1994", spotify: "" },
  { artist: "Tiamat", album: "Wildhoney", released: "1994", spotify: "" },
  { artist: "Tristania", album: "Illumination", released: "2007", spotify: "" },
  { artist: "Trouble", album: "Psalm 9", released: "1984", spotify: "" },
  { artist: "Type O Negative", album: "Bloody Kisses", released: "1993", spotify: "" },
  { artist: "Type O Negative", album: "October Rust", released: "1996", spotify: "" },
  { artist: "Unmothered", album: "Unmothered", released: "2012", spotify: "" },
  { artist: "Warning", album: "Watching from a Distance", released: "2006", spotify: "" },
  { artist: "Witchfinder General", album: "Death Penalty", released: "1982", spotify: "" },
  { artist: "YOB", album: "Clearing the Path to Ascend", released: "2014", spotify: "" },
  { artist: "YOB", album: "The Unreal Never Lived", released: "2005", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
