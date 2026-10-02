/* Post-Punk / New Wave / Gothic Rock
   ----------------------------------
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

  { artist: "45 Grave", album: "Sleep in Safety", released: "1983", spotify: "" },
  { artist: "Algiers", album: "The Underside of Power", released: "2017", spotify: "" },
  { artist: "Bauhaus", album: "Bela Lugosi's Dead", released: "1979", spotify: "", type: "Single" },
  { artist: "Bauhaus", album: "Burning From the Inside", released: "1983", spotify: "" },
  { artist: "Bauhaus", album: "In the Flat Field", released: "1980", spotify: "", pick: true },
  { artist: "Beastmilk", album: "Climax", released: "2013", spotify: "" },
  { artist: "Bloc Party", album: "Silent Alarm", released: "2005", spotify: "https://open.spotify.com/album/6SsIdN05HQg2GwYLfXuzLB" },
  { artist: "Blondie", album: "Parallel Lines", released: "1978", spotify: "https://open.spotify.com/album/4M6s2jbhKWEcOdXZ8WiHts" },
  { artist: "Clan of Xymox", album: "Clan of Xymox", released: "1985", spotify: "" },
  { artist: "Cocteau Twins", album: "Garlands", released: "1982", spotify: "" },
  { artist: "Cocteau Twins", album: "Heaven or Las Vegas", released: "1990", spotify: "https://open.spotify.com/album/5lEphbceIgaK1XxWeSrC9E" },
  { artist: "Cocteau Twins", album: "Treasure", released: "1984", spotify: "" },
  { artist: "Concrete Blonde", album: "Bloodletting", released: "1990", spotify: "" },
  { artist: "Creature Feature", album: "It was a Dark and Stormy Night", released: "2011", spotify: "" },
  { artist: "Curve", album: "Doppelgänger", released: "1992", spotify: "" },
  { artist: "Dead Can Dance", album: "Dead Can Dance", released: "1984", spotify: "" },
  { artist: "Devo", album: "Q: Are We Not Men? A: We Are Devo!", released: "1978", spotify: "https://open.spotify.com/album/1u2Qni8cVRptDTaA00fmBC" },
  { artist: "Dexys Midnight Runners", album: "Searching for the Young Soul Rebels", released: "1980", spotify: "" },
  { artist: "Dry Cleaning", album: "New Long Leg", released: "2021", spotify: "" },
  { artist: "Echo & The Bunnymen", album: "Heaven Up Here", released: "1981", spotify: "https://open.spotify.com/album/29rkfL25uKOkVOhyr1CmXJ" },
  { artist: "Elastica", album: "Elastica", released: "1995", spotify: "" },
  { artist: "Elvis Costello", album: "My Aim Is True", released: "1977", spotify: "https://open.spotify.com/album/1aucGNKimhgARC7iO2xLt2" },
  { artist: "Elvis Costello", album: "This Year's Model", released: "1978", spotify: "https://open.spotify.com/album/4RLIesiAVONV4fOUlOSmr4" },
  { artist: "Elvis Costello and the Attractions", album: "Armed Forces", released: "1979", spotify: "https://open.spotify.com/album/5w3q6GZbw0gsAtvl1c0rmu" },
  { artist: "Elvis Costello and the Attractions", album: "Imperial Bedroom", released: "1982", spotify: "https://open.spotify.com/album/1pK8MLyjgvt8pNVkQCBnSg" },
  { artist: "Franz Ferdinand", album: "Franz Ferdinand", released: "2004", spotify: "https://open.spotify.com/album/0mUEGMT2YlzCWGeWOJjBKD" },
  { artist: "Franz Ferdinand", album: "You Could Have It So Much Better", released: "2005", spotify: "https://open.spotify.com/album/4aJKZKk3jb1oz7wb0OKLTw" },
  { artist: "Gang of Four", album: "Entertainment!", released: "1979", spotify: "https://open.spotify.com/album/7LMOo068Ndv0wjTGUDtYqK" },
  { artist: "Grave Babies", album: "Crusher", released: "2013", spotify: "" },
  { artist: "Guerilla Toss", album: "You're Weird Now", released: "2025", spotify: "" },
  { artist: "Ian Dury", album: "New Boots and Panties!!", released: "1977", spotify: "https://open.spotify.com/album/4GqPVPXNmpFMpoRnafIfLR" },
  { artist: "Iceage", album: "Plowing Into the Field of Love", released: "2014", spotify: "" },
  { artist: "Iceage", album: "You're Nothing", released: "2013", spotify: "" },
  { artist: "Interpol", album: "Antics", released: "2004", spotify: "" },
  { artist: "Interpol", album: "Turn On the Bright Lights", released: "2002", spotify: "https://open.spotify.com/album/2SNck8dxnwrreCno34r9ji" },
  { artist: "Joy Division", album: "Closer", released: "1980", spotify: "https://open.spotify.com/album/0KBdfMTMxi0oD1oVqApTjr" },
  { artist: "Joy Division", album: "Unknown Pleasures", released: "1979", spotify: "https://open.spotify.com/album/5Dgqy4bBg09Rdw7CQM545s" },
  { artist: "Killing Joke", album: "Killing Joke", released: "1980", spotify: "" },
  { artist: "Killing Joke", album: "MMXII", released: "2012", spotify: "" },
  { artist: "Killing Joke", album: "Night Time", released: "1984", spotify: "https://open.spotify.com/album/2qcwXvluk9iFwNNg4eDBXm" },
  { artist: "Killing Joke", album: "Pandemonium", released: "1994", spotify: "" },
  { artist: "LiLiPUT", album: "Kleenex/LiLiPUT", released: "1993", spotify: "" },
  { artist: "Mission of Burma", album: "Vs.", released: "1982", spotify: "" },
  { artist: "New Order", album: "Low-Life", released: "1985", spotify: "https://open.spotify.com/album/6ls958BLJbeFT3OqAYTvQB" },
  { artist: "New Order", album: "Power, Corruption & Lies", released: "1983", spotify: "https://open.spotify.com/album/6NTrwu1XJ56jBPx7HMksbZ" },
  { artist: "New Order", album: "Technique", released: "1989", spotify: "" },
  { artist: "Nick Cave and the Bad Seeds", album: "Murder Ballads", released: "1996", spotify: "" },
  { artist: "Nick Cave and the Bad Seeds", album: "Tender Prey", released: "1988", spotify: "" },
  { artist: "Nick Cave and the Bad Seeds", album: "The Best of Nick Cave and the Bad Seeds", released: "1998", spotify: "" },
  { artist: "Nick Cave and the Bad Seeds", album: "The Good Son", released: "1990", spotify: "" },
  { artist: "Oingo Boingo", album: "Dead Man's Party", released: "1985", spotify: "https://open.spotify.com/album/44Q1H1q6nSnUnjjGPoxAJb" },
  { artist: "Pere Ubu", album: "Terminal Tower", released: "1985", spotify: "" },
  { artist: "Pere Ubu", album: "The Modern Dance", released: "1978", spotify: "" },
  { artist: "Peter Murphy", album: "Deep", released: "1989", spotify: "" },
  { artist: "Public Image Ltd.", album: "Metal Box (Second Edition)", released: "1979", spotify: "https://open.spotify.com/album/5votrp9PY49suw8xnXqyrm" },
  { artist: "Red Lorry Yellow Lorry", album: "Talk About the Weather", released: "1985", spotify: "" },
  { artist: "Samhain", album: "Samhain III: November-Coming-Fire", released: "2015", spotify: "" },
  { artist: "Savages", album: "Silence Yourself", released: "2013", spotify: "" },
  { artist: "Siouxsie and the Banshees", album: "Juju", released: "1981", spotify: "" },
  { artist: "Siouxsie and the Banshees", album: "Kaleidoscope", released: "1980", spotify: "" },
  { artist: "Siouxsie and the Banshees", album: "The Scream", released: "1978", spotify: "" },
  { artist: "Son of Sam", album: "Songs From The Earth", released: "2001", spotify: "" },
  { artist: "Special Interest", album: "Endure", released: "2022", spotify: "" },
  { artist: "Squeeze", album: "East Side Story", released: "1981", spotify: "" },
  { artist: "Suicide", album: "Suicide", released: "1977", spotify: "https://open.spotify.com/album/46kw5FsFdJhNRL8wfHM9Bp" },
  { artist: "Switchblade Symphony", album: "Sweet Little Witches", released: "2003", spotify: "" },
  { artist: "T.S.O.L.", album: "Dance with Me", released: "1981", spotify: "" },
  { artist: "Talking Heads", album: "Remain in Light", released: "1980", spotify: "https://open.spotify.com/album/1JvXxLsm0PxlGH4LXzqMGq" },
  { artist: "Tears for Fears", album: "Songs from the Big Chair", released: "1985", spotify: "https://open.spotify.com/album/7y7459SFZReE5Wec4hejv5" },
  { artist: "Television", album: "Marquee Moon", released: "1977", spotify: "https://open.spotify.com/album/630o1rKTDsLeIPreOY1jqP" },
  { artist: "The Birthday Party", album: "Junkyard", released: "1982", spotify: "" },
  { artist: "The Birthday Party", album: "Prayers on Fire", released: "1981", spotify: "" },
  { artist: "The Cult", album: "Love", released: "1985", spotify: "https://open.spotify.com/album/2w7mhWYo5yEEVqYIt7tdf1" },
  { artist: "The Cure", album: "Disintegration", released: "1989", spotify: "https://open.spotify.com/album/0A13JySVHzBoRZFk2o89Wl" },
  { artist: "The Cure", album: "Pornography", released: "1982", spotify: "", pick: true },
  { artist: "The Cure", album: "Wish", released: "1992", spotify: "https://open.spotify.com/album/3x1CmNdXWU0DzpTZXFFRZu" },
  { artist: "The Damned", album: "A Night of a Thousand Vampires: Live in London", released: "2022", spotify: "", type: "Live" },
  { artist: "The Damned", album: "Damned Damned Damned", released: "1977", spotify: "" },
  { artist: "The Damned", album: "Machine Gun Etiquette", released: "1979", spotify: "" },
  { artist: "The Damned", album: "Phantasmagoria", released: "1985", spotify: "" },
  { artist: "The Damned", album: "The Black Album", released: "1980", spotify: "" },
  { artist: "The Fall", album: "Hex Enduction Hour", released: "1982", spotify: "" },
  { artist: "The Jam", album: "All Mod Cons", released: "1978", spotify: "" },
  { artist: "The Jam", album: "Sound Affects", released: "1980", spotify: "" },
  { artist: "The Mission", album: "Children", released: "1988", spotify: "" },
  { artist: "The Pop Group", album: "Citizen Zombie", released: "2015", spotify: "" },
  { artist: "The Radiators", album: "Ghostown", released: "1979", spotify: "" },
  { artist: "The Raincoats", album: "The Raincoats", released: "1979", spotify: "https://open.spotify.com/album/190Tx9jPHndq0qUlq79BJJ" },
  { artist: "The Rapture", album: "Echoes", released: "2003", spotify: "" },
  { artist: "The Sisters of Mercy", album: "Floodland", released: "1987", spotify: "https://open.spotify.com/album/2I5WCmOZo17YkcEwjXbLvc" },
  { artist: "The Slits", album: "Cut", released: "1979", spotify: "https://open.spotify.com/album/0TfUvdJAj5ggwaLihQQ5qs" },
  { artist: "The The", album: "Soul Mining", released: "1983", spotify: "" },
  { artist: "Tones on Tail", album: "Pop", released: "1984", spotify: "" },
  { artist: "Various Artists", album: "The Unquiet Grave 2000", released: "2000", spotify: "" },
  { artist: "Various Artists", album: "Wanna Buy a Bridge?", released: "1980", spotify: "" },
  { artist: "Viagra Boys", album: "Cave World", released: "2022", spotify: "" },
  { artist: "Viagra Boys", album: "Viagr Aboys", released: "2025", spotify: "" },
  { artist: "Virgin Prunes", album: "...If I Die, I Die", released: "1982", spotify: "" },
  { artist: "Wire", album: "Pink Flag", released: "1977", spotify: "https://open.spotify.com/album/4WXqZZ28geJSPtqLcCF56L" },

  { artist: "", album: "", released: "", spotify: "" },

]);
