/* Metal › Groove Metal / Alt Metal / Nu Metal / Rap Metal
   -------------------------------------------------------
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

  { artist: "311", album: "311", released: "1995", spotify: "" },
  { artist: "Black Label Society", album: "Mafia", released: "2005", spotify: "" },
  { artist: "Cavalera Conspiracy", album: "Inflikted", released: "2008", spotify: "" },
  { artist: "Deftones", album: "White Pony", released: "2000", spotify: "", pick: true },
  { artist: "DevilDriver", album: "The Fury of Our Maker's Hand", released: "2005", spotify: "" },
  { artist: "DevilDriver", album: "The Last Kind Words", released: "2007", spotify: "" },
  { artist: "Dog Fashion Disco", album: "Adultery", released: "2006", spotify: "" },
  { artist: "Faith No More", album: "Angel Dust", released: "1992", spotify: "", pick: true },
  { artist: "Five Finger Death Punch", album: "War Is the Answer", released: "2009", spotify: "https://open.spotify.com/album/17IyljrvxhPktGR5NYx9iQ" },
  { artist: "Helmet", album: "Meantime", released: "1992", spotify: "" },
  { artist: "Korn", album: "Follow the Leader", released: "1998", spotify: "https://open.spotify.com/album/0gsiszk6JWYwAyGvaTTud4" },
  { artist: "Korn", album: "Korn", released: "1994", spotify: "" },
  { artist: "Lacuna Coil", album: "Karmacode", released: "2006", spotify: "" },
  { artist: "Lamb of God", album: "As the Palaces Burn", released: "2003", spotify: "" },
  { artist: "Lamb of God", album: "Ashes of the Wake", released: "2004", spotify: "" },
  { artist: "Lamb of God", album: "New American Gospel", released: "2000", spotify: "" },
  { artist: "Lamb of God", album: "Sacrament", released: "2006", spotify: "" },
  { artist: "Limp Bizkit", album: "Significant Other", released: "1999", spotify: "https://open.spotify.com/album/3HCCUaRSjHSFOe4fqE0BiP" },
  { artist: "Living Colour", album: "Time's Up", released: "1990", spotify: "" },
  { artist: "Machine Head", album: "Through the Ashes of Empires", released: "2003", spotify: "" },
  { artist: "Meshuggah", album: "obZen", released: "2008", spotify: "" },
  { artist: "Pantera", album: "Cowboys from Hell", released: "1990", spotify: "" },
  { artist: "Pantera", album: "Far Beyond Driven", released: "1994", spotify: "" },
  { artist: "Pantera", album: "Vulgar Display of Power", released: "1992", spotify: "https://open.spotify.com/album/7kW0cpKgSVsEqcc8xgbSb0" },
  { artist: "Papa Roach", album: "Infest", released: "2000", spotify: "https://open.spotify.com/album/0BHa0ePkvGAVKymB4FU58m" },
  { artist: "Rage Against The Machine", album: "Evil Empire", released: "1996", spotify: "https://open.spotify.com/album/24E6rDvGDuYFjlGewp4ntF" },
  { artist: "Rage Against the Machine", album: "Rage Against the Machine", released: "1992", spotify: "https://open.spotify.com/album/4LaRYkT4oy47wEuQgkLBul", pick: true },
  { artist: "Rage Against the Machine", album: "The Battle of Los Angeles", released: "1999", spotify: "https://open.spotify.com/album/2eia0myWFgoHuttJytCxgX" },
  { artist: "Rob Zombie", album: "Hellbilly Deluxe", released: "1998", spotify: "" },
  { artist: "Slipknot", album: "Iowa", released: "2001", spotify: "" },
  { artist: "Slipknot", album: "Slipknot", released: "1999", spotify: "" },
  { artist: "System of a Down", album: "Toxicity", released: "2001", spotify: "https://open.spotify.com/album/6jWde94ln40epKIQCd8XUh" },
  { artist: "Volbeat", album: "Guitar Gangsters & Cadillac Blood", released: "2008", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
