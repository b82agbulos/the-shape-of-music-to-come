/* Pop / Synth-Pop / Art Pop
   -------------------------
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

  { artist: "ABC", album: "The Lexicon of Love", released: "1982", spotify: "https://open.spotify.com/album/1vkql5n4Vb9j5XG3yxOU66" },
  { artist: "Adele", album: "21", released: "2011", spotify: "https://open.spotify.com/album/0Lg1uZvI312TPqxNWShFXL" },
  { artist: "Alex Cameron", album: "Miami Memory", released: "2019", spotify: "" },
  { artist: "Alice Longyu Gao", album: "Let's Hope Heteros Fail, Learn, and Retire", released: "2023", spotify: "" },
  { artist: "Amaarae", album: "Black Star", released: "2025", spotify: "" },
  { artist: "Amaarae", album: "Fountain Baby", released: "2023", spotify: "" },
  { artist: "Anohni", album: "Hopelessness", released: "2016", spotify: "" },
  { artist: "Antony and the Johnsons", album: "I Am a Bird Now", released: "2005", spotify: "" },
  { artist: "Ariel Pink", album: "Pom Pom", released: "2014", spotify: "" },
  { artist: "Ariel Pink's Haunted Graffiti", album: "Before Today", released: "2010", spotify: "https://open.spotify.com/album/1dO7qBlkQXYENJaHfK7h56" },
  { artist: "Bat for Lashes", album: "Two Suns", released: "2009", spotify: "" },
  { artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?", released: "2019", spotify: "https://open.spotify.com/album/0S0KGZnfBGSIssfF54WSJh" },
  { artist: "Björk", album: "Debut", released: "1993", spotify: "" },
  { artist: "Björk", album: "Homogenic", released: "1997", spotify: "https://open.spotify.com/album/0HMsmYvoT1h2x1C4di5faf" },
  { artist: "Björk", album: "Post", released: "1995", spotify: "https://open.spotify.com/album/2Ul7B1LEHxXzYubtkTMENs" },
  { artist: "Björk", album: "Vespertine", released: "2001", spotify: "" },
  { artist: "Björk", album: "Vulnicura", released: "2015", spotify: "" },
  { artist: "Black Dresses", album: "Peaceful as Hell", released: "2020", spotify: "" },
  { artist: "Brian Wilson", album: "Brian Wilson Presents Smile", released: "2004", spotify: "" },
  { artist: "Broadcast", album: "Work and Non Work", released: "1997", spotify: "" },
  { artist: "Caroline Polachek", album: "Desire, I Want to Turn Into You", released: "2023", spotify: "" },
  { artist: "Charli XCX", album: "Brat", released: "2024", spotify: "" },
  { artist: "Charli XCX", album: "Charli", released: "2019", spotify: "https://open.spotify.com/album/386IqvSuljaZsMjwDGGdLj" },
  { artist: "Charli XCX", album: "Vroom Vroom", released: "2016", spotify: "" },
  { artist: "Chromatics", album: "Kill for Love", released: "2012", spotify: "https://open.spotify.com/album/2HWmdX85qrJMwBJajU8xQZ" },
  { artist: "Cindy Lee", album: "Diamond Jubilee", released: "2024", spotify: "" },
  { artist: "Clarence Clarity", album: "No Now", released: "2015", spotify: "" },
  { artist: "Cut Copy", album: "In Ghost Colours", released: "2008", spotify: "https://open.spotify.com/album/34NNRiAunm4I1jvmviZrBE" },
  { artist: "Depeche Mode", album: "Violator", released: "1990", spotify: "https://open.spotify.com/album/5g3Yi15plTSMaq6tYiuw8p" },
  { artist: "Destroyer", album: "Kaputt", released: "2011", spotify: "https://open.spotify.com/album/4WtvNVR7QeHUZGtHth9zND" },
  { artist: "Dorian Electra", album: "Flamboyant", released: "2019", spotify: "" },
  { artist: "Electronic", album: "Electronic", released: "1991", spotify: "" },
  { artist: "Fever Ray", album: "Fever Ray", released: "2009", spotify: "" },
  { artist: "Fever Ray", album: "Plunge", released: "2017", spotify: "" },
  { artist: "Fever Ray", album: "Radical Romantic", released: "2023", spotify: "" },
  { artist: "Fiona Apple", album: "Extraordinary Machine", released: "2005", spotify: "https://open.spotify.com/album/1z0O8lKuQRs974S8wcRiAs" },
  { artist: "Fiona Apple", album: "Fetch the Bolt Cutters", released: "2020", spotify: "" },
  { artist: "Fiona Apple", album: "The Idler Wheel Is Wiser Than the Driver of the Screw and Whipping Cords Will Serve You More Than Ropes Will Ever Do", released: "2012", spotify: "" },
  { artist: "Fiona Apple", album: "When the Pawn...", released: "1999", spotify: "https://open.spotify.com/album/3o5EnVZNJXtfPV8tCoagjI" },
  { artist: "FKA Twigs", album: "LP1", released: "2014", spotify: "https://open.spotify.com/album/5VqGGKeWpIBRFh4M4XmqDK" },
  { artist: "FKA Twigs", album: "M3LL155X", released: "2015", spotify: "" },
  { artist: "FKA Twigs", album: "Magdalene", released: "2019", spotify: "" },
  { artist: "Ginger Root", album: "Nisemono", released: "2022", spotify: "" },
  { artist: "Glasser", album: "Ring", released: "2010", spotify: "" },
  { artist: "Gorillaz", album: "Demon Days", released: "2005", spotify: "https://open.spotify.com/album/0bUTHlWbkSQysoM3VsWldT" },
  { artist: "Gorillaz", album: "Gorillaz", released: "2001", spotify: "https://open.spotify.com/album/0YvYmLBFFwYxgI4U9KKgUm" },
  { artist: "Gorillaz", album: "Plastic Beach", released: "2010", spotify: "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8" },
  { artist: "Grimes", album: "Art Angels", released: "2015", spotify: "https://open.spotify.com/album/5hB4jVN4ZHpubyiMmW81K1" },
  { artist: "Grimes", album: "Visions", released: "2012", spotify: "https://open.spotify.com/album/48a7rOjTzpD1zzJAteeveE" },
  { artist: "Helado Negro", album: "This Is How You Smile", released: "2019", spotify: "" },
  { artist: "Hot Chip", album: "Made in the Dark", released: "2008", spotify: "" },
  { artist: "Julia Holter", album: "Have You in My Wilderness", released: "2015", spotify: "" },
  { artist: "Kate Bush", album: "Hounds of Love", released: "1985", spotify: "https://open.spotify.com/album/5G5UwqPsxDKpxJLX4xsyuh" },
  { artist: "Kero Kero Bonito", album: "Civilisation I", released: "2019", spotify: "" },
  { artist: "Kirin J. Callinan", album: "Bravado", released: "2017", spotify: "" },
  { artist: "Kraftwerk", album: "The Man-Machine", released: "1978", spotify: "https://open.spotify.com/album/3eyz60xEK5dGEeZF1JJSi9" },
  { artist: "Kraftwerk", album: "Trans-Europe Express", released: "1977", spotify: "https://open.spotify.com/album/0HHRIVjvBcnTepfeRVgS2f" },
  { artist: "L'Rain", album: "Fatigue", released: "2021", spotify: "" },
  { artist: "Lady Gaga", album: "The Fame Monster", released: "2009", spotify: "https://open.spotify.com/album/034EE1ofh9OM6wJBqd2xYo" },
  { artist: "Lana Del Rey", album: "Born to Die", released: "2012", spotify: "https://open.spotify.com/album/4X8hAqIWpQyQks2yRhyqs4" },
  { artist: "Lana Del Rey", album: "Did You Know That There's a Tunnel Under Ocean Blvd", released: "2023", spotify: "" },
  { artist: "Lana Del Rey", album: "Norman Fucking Rockwell!", released: "2019", spotify: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A" },
  { artist: "Lily Allen", album: "Alright Still", released: "2006", spotify: "https://open.spotify.com/album/5ySBiY0v4b03yw98oRDKtS" },
  { artist: "Lorde", album: "Melodrama", released: "2017", spotify: "https://open.spotify.com/album/2B87zXm9bOWvAJdkJBTpzF" },
  { artist: "M83", album: "Dead Cities, Red Seas & Lost Ghosts", released: "2003", spotify: "" },
  { artist: "M83", album: "Hurry Up, We're Dreaming", released: "2011", spotify: "https://open.spotify.com/album/6R0ynY7RF20ofs9GJR5TXR" },
  { artist: "M83", album: "Saturdays = Youth", released: "2008", spotify: "" },
  { artist: "Madonna", album: "Like a Prayer", released: "1989", spotify: "https://open.spotify.com/album/48AGkmM7iO4jrELRnNZGPV" },
  { artist: "Madonna", album: "Like a Virgin", released: "1984", spotify: "https://open.spotify.com/album/2IU9ftOgyRL2caQGWK1jjX" },
  { artist: "Madonna", album: "Music", released: "2000", spotify: "https://open.spotify.com/album/3e3PxWKqv7lyZaR5d02abW" },
  { artist: "Magdalena Bay", album: "Imaginal Disk", released: "2024", spotify: "" },
  { artist: "Majical Cloudz", album: "Impersonator", released: "2013", spotify: "" },
  { artist: "Mariam the Believer", album: "Blood Donation", released: "2013", spotify: "" },
  { artist: "MGMT", album: "Oracular Spectacular", released: "2007", spotify: "https://open.spotify.com/album/6mm1Skz3JE6AXneya9Nyiv" },
  { artist: "Michael Jackson", album: "Off the Wall", released: "1979", spotify: "https://open.spotify.com/album/2ZytN2cY4Zjrr9ukb2rqTP" },
  { artist: "Michael Jackson", album: "Thriller", released: "1982", spotify: "https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ" },
  { artist: "Moses Sumney", album: "Aromanticism", released: "2017", spotify: "" },
  { artist: "Moses Sumney", album: "Græ", released: "2020", spotify: "" },
  { artist: "of Montreal", album: "Hissing Fauna, Are You the Destroyer?", released: "2007", spotify: "" },
  { artist: "Oklou", album: "Choke Enough", released: "2025", spotify: "" },
  { artist: "Panda Bear", album: "Person Pitch", released: "2007", spotify: "" },
  { artist: "Panda Bear", album: "Sinister Grift", released: "2025", spotify: "" },
  { artist: "Perfume Genius", album: "No Shape", released: "2017", spotify: "" },
  { artist: "Perfume Genius", album: "Put Your Back N 2 It", released: "2012", spotify: "" },
  { artist: "Perfume Genius", album: "Set My Heart on Fire Immediately", released: "2020", spotify: "" },
  { artist: "Pet Shop Boys", album: "Actually", released: "1987", spotify: "https://open.spotify.com/album/0p5QwhEke5P9mFY4CY9u4j" },
  { artist: "Pet Shop Boys", album: "Discography: The Complete Singles Collection", released: "1991", spotify: "" },
  { artist: "Pet Shop Boys", album: "Very", released: "1993", spotify: "" },
  { artist: "Peter Gabriel", album: "So", released: "1986", spotify: "https://open.spotify.com/album/2ikq6LspaBbUG2qyiV5qdx" },
  { artist: "Phoenix", album: "Wolfgang Amadeus Phoenix", released: "2009", spotify: "" },
  { artist: "Porter Robinson", album: "Nurture", released: "2021", spotify: "" },
  { artist: "Prefab Sprout", album: "Steve McQueen", released: "1985", spotify: "" },
  { artist: "Rina Sawayama", album: "Rina", released: "2017", spotify: "" },
  { artist: "Robyn", album: "Body Talk", released: "2010", spotify: "https://open.spotify.com/album/0Rzg7fqyWE39G6wKipxrns" },
  { artist: "Robyn", album: "Honey", released: "2018", spotify: "" },
  { artist: "Roxy Music", album: "For Your Pleasure", released: "1973", spotify: "https://open.spotify.com/album/6gKMWnGptVs6yT2MgCxw29" },
  { artist: "Roxy Music", album: "Roxy Music", released: "1972", spotify: "" },
  { artist: "Scott Engel", album: "Scott 4", released: "1969", spotify: "" },
  { artist: "Spellling", album: "Portrait of My Heart", released: "2025", spotify: "" },
  { artist: "Spellling", album: "The Turning Wheel", released: "2021", spotify: "" },
  { artist: "Spice Girls", album: "Spice", released: "1996", spotify: "https://open.spotify.com/album/3x2jF7blR6bFHtk4MccsyJ" },
  { artist: "St. Vincent", album: "Daddy's Home", released: "2021", spotify: "" },
  { artist: "St. Vincent", album: "Strange Mercy", released: "2011", spotify: "https://open.spotify.com/album/1Lci4bx7JIuCC8pnBNX7ds" },
  { artist: "Stereolab", album: "Dots and Loops", released: "1997", spotify: "" },
  { artist: "Taylor Swift", album: "1989", released: "2014", spotify: "https://open.spotify.com/album/2QJmrSgbdM35R67eoGQo4j" },
  { artist: "Taylor Swift", album: "1989 (Taylor's Version)", released: "2023", spotify: "" },
  { artist: "Taylor Swift", album: "Red", released: "2012", spotify: "https://open.spotify.com/album/1EoDsNmgTLtmwe1BDAVxV5" },
  { artist: "The 1975", album: "I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It", released: "2016", spotify: "https://open.spotify.com/album/12zl1WmHPFCSyKYbL4vBZn" },
  { artist: "The Beach Boys", album: "Pet Sounds", released: "1966", spotify: "https://open.spotify.com/album/2CNEkSE8TADXRT2AzcEt1b" },
  { artist: "The Comix", album: "Baby Huey", released: "1972", spotify: "" },
  { artist: "The Comix", album: "Casper, Casper (Whatcha Doin' On The Moon?)", released: "1972", spotify: "" },
  { artist: "The Comix", album: "Hiding From Spooky", released: "1972", spotify: "" },
  { artist: "The Comix", album: "Richie Rich And Casper", released: "1972", spotify: "" },
  { artist: "The Comix", album: "The Sad Sack Song", released: "1972", spotify: "" },
  { artist: "The Human League", album: "Dare", released: "1981", spotify: "https://open.spotify.com/album/3ls7tE9D2SIvjTmRuEtsQY" },
  { artist: "The Knife", album: "Shaking the Habitual", released: "2013", spotify: "" },
  { artist: "The Knife", album: "Silent Shout", released: "2006", spotify: "" },
  { artist: "Todd Rundgren", album: "Something/Anything?", released: "1972", spotify: "https://open.spotify.com/album/3fRCOoTbBsOITBWlCRCJQr" },
  { artist: "Tori Amos", album: "Boys for Pele", released: "1996", spotify: "" },
  { artist: "Tune-Yards", album: "Whokill", released: "2011", spotify: "" },
  { artist: "Weyes Blood", album: "Titanic Rising", released: "2019", spotify: "" },
  { artist: "Yves Tumor", album: "Heaven to a Tortured Mind", released: "2020", spotify: "" },
  { artist: "Yves Tumor", album: "Safe in the Hands of Love", released: "2018", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
