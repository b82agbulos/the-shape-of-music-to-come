/* Electronic › IDM / Ambient / Glitch / Experimental
   --------------------------------------------------
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

  { artist: "All of Them Witches", album: "Hunters Moon", released: "2018", spotify: "https://open.spotify.com/album/6VwcL7eMhKg1dm8JT5UstO" },
  { artist: "Aphex Twin", album: "...I Care Because You Do", released: "1995", spotify: "https://open.spotify.com/album/6TmEZKJtPJ9mPsMBmyteCE" },
  { artist: "Aphex Twin", album: "Collapse EP", released: "2018", spotify: "https://open.spotify.com/album/2TgPxHvr9xiMkbbCL3n1LJ", type: "EP" },
  { artist: "Aphex Twin", album: "Selected Ambient Works 85–92", released: "1992", spotify: "https://open.spotify.com/album/7aNclGRxTysfh6z0d8671k" },
  { artist: "Aphex Twin", album: "Selected Ambient Works Volume II", released: "1994", spotify: "https://open.spotify.com/album/17vHPMmoxN5B8cdhCDeMTe" },
  { artist: "Aphex Twin", album: "Syro", released: "2014", spotify: "https://open.spotify.com/album/4mwrMLVKo940qLFXEIef4w" },
  { artist: "Arca", album: "Kick III", released: "2021", spotify: "https://open.spotify.com/album/1paea7BPqUpZksvNkQ2cqQ" },
  { artist: "Astrid Sonne", album: "Great Doubt", released: "2024", spotify: "https://open.spotify.com/album/0X5xnCnMafZT1sRIHnzAwP" },
  { artist: "Autechre", album: "LP5", released: "1998", spotify: "https://open.spotify.com/album/5TiPpuwLSWSJl98yTyE8BK" },
  { artist: "Autechre", album: "Tri Repetae", released: "1995", spotify: "https://open.spotify.com/album/0ioIXXMV89w0qC39FpxYnL" },
  { artist: "Biosphere", album: "Substrata", released: "1997", spotify: "https://open.spotify.com/album/6jeIzUv8Bff4fFElZwwA4B" },
  { artist: "Boards of Canada", album: "Geogaddi", released: "2002", spotify: "https://open.spotify.com/album/4T7JGfRryhw5POaXalkApE" },
  { artist: "Boards of Canada", album: "Music Has the Right to Children", released: "1998", spotify: "https://open.spotify.com/album/6LZiNXaDvhzvnXUubVOmNU" },
  { artist: "Dante Tomaselli", album: "Out-Of-Body Experience", released: "2019", spotify: "https://open.spotify.com/album/3aWeZURJdDGJDMkuLjFxGG" },
  { artist: "Dante Tomaselli", album: "Witches", released: "2017", spotify: "https://open.spotify.com/album/3tc6n1WceLLG8nxd3pbxLm" },
  { artist: "Eno", album: "Another Green World", released: "1975", spotify: "https://open.spotify.com/album/6uoeezh45SYEb8lcT8gDTY" },
  { artist: "Enoch", album: "Graveyard Disturbances", released: "2004", spotify: "" },
  { artist: "Espectrostatic", album: "Silhouette", released: "2017", spotify: "https://open.spotify.com/album/1D5IK9keRqLwnSWnm0OQVp" },
  { artist: "Ethel Cain", album: "Perverts", released: "2025", spotify: "https://open.spotify.com/album/3kZk3M80kQTJus45lgRKyv" },
  { artist: "Fennesz", album: "Agora", released: "2019", spotify: "https://open.spotify.com/album/7JpOsq1F2A9aPr2fdacsOk" },
  { artist: "Fennesz", album: "Endless Summer", released: "2001", spotify: "https://open.spotify.com/album/3Ombmwfn0Wi3twVHD0VyxS" },
  { artist: "Gas", album: "Königsforst", released: "1998", spotify: "https://open.spotify.com/album/250sWScTPsQKWAY9s7Oufy" },
  { artist: "Grouper", album: "Ruins", released: "2014", spotify: "https://open.spotify.com/album/5ElYoVUqRQIlDekD1v6aKa" },
  { artist: "Hexentanz", album: "Nekrocrafte", released: "2004", spotify: "https://open.spotify.com/album/2yzwVpGM9jd5vXyZg7efVi" },
  { artist: "James Fisher", album: "Nightmare Picture Theatre", released: "2004", spotify: "" },
  { artist: "Jlin", album: "Black Origami", released: "2017", spotify: "https://open.spotify.com/album/7526bnJCkFFnAMSQ9fsva9" },
  { artist: "Leila", album: "Like Weather", released: "1998", spotify: "https://open.spotify.com/album/21t4lny66XPZPuVVPoo1hO" },
  { artist: "Manitoba", album: "Up in Flames", released: "2003", spotify: "https://open.spotify.com/album/0uDxZPsHGawy1TuAgetcqW" },
  { artist: "Matmos", album: "The Consuming Flame: Open Exercises in Group Form", released: "2020", spotify: "https://open.spotify.com/album/1krpUFIGuYFDdFRQ71CgH5" },
  { artist: "Midnight Syndicate", album: "Gates of Delirium", released: "2001", spotify: "https://open.spotify.com/album/5CZuZPKFVgpsDprMfKqecD" },
  { artist: "Midnight Syndicate", album: "Realm of Shadows", released: "2000", spotify: "https://open.spotify.com/album/3DnG7NhgcWEDQeUynaqHsA" },
  { artist: "Mort Garson", album: "Black Mass Lucifer", released: "", spotify: "https://open.spotify.com/album/766ZAoaGQApWU7XLvYfADE" },
  { artist: "Mouse on Mars", album: "Niun Niggung", released: "1999", spotify: "https://open.spotify.com/album/73ilzyuAD5B5fhPekLrYiz" },
  { artist: "Múm", album: "Yesterday Was Dramatic – Today Is OK", released: "1999", spotify: "https://open.spotify.com/album/1NNVjD5ZkVg6eeR62OmEs2" },
  { artist: "Neil Cicierega", album: "Mouth Moods", released: "2017", spotify: "" },
  { artist: "Nicolás Jaar", album: "Don't Break My Love", released: "2011", spotify: "", type: "EP" },
  { artist: "Nicolás Jaar", album: "Space Is Only Noise", released: "2011", spotify: "https://open.spotify.com/album/0tUJcqDuXHNkaPKLN0lQhT" },
  { artist: "Nothing", album: "Nondescript", released: "1999", spotify: "" },
  { artist: "Oneohtrix Point Never", album: "Replica", released: "2011", spotify: "https://open.spotify.com/album/7H6gso8aBfKK7mlouLCsW3" },
  { artist: "Oval", album: "94 Diskont", released: "1995", spotify: "https://open.spotify.com/album/33xUwaoTPJ9aNbCJZEpRol" },
  { artist: "Oval", album: "Systemisch", released: "1994", spotify: "https://open.spotify.com/album/1VjWcD0lLRFpAIK0AFRUBl" },
  { artist: "Plaid", album: "Not for Threes", released: "1997", spotify: "https://open.spotify.com/album/25HKkAZz1rpzQXkWSLpWZL" },
  { artist: "Slasher Dave", album: "Tomb Of Horror", released: "2014", spotify: "https://open.spotify.com/album/7cajy0AbLQGbq3FalQszIr" },
  { artist: "Stars of the Lid", album: "The Ballasted Orchestra", released: "1997", spotify: "https://open.spotify.com/album/7sKtEM0XcdniOZL50Opz74" },
  { artist: "Steve Greene", album: "Electronic Dreams For a Holographic Existence", released: "2018", spotify: "" },
  { artist: "The Books", album: "The Lemon of Pink", released: "2003", spotify: "https://open.spotify.com/album/2iOucGN2jM69yzEE4OIqmz" },
  { artist: "The Books", album: "The Way Out", released: "2010", spotify: "https://open.spotify.com/album/06sGqD1GZtVvFr5Y3dzime" },
  { artist: "The Books", album: "Thought for Food", released: "2002", spotify: "https://open.spotify.com/album/1ypCLuUlbp4zllAkRpsOaS" },
  { artist: "Tim Hecker", album: "Virgins", released: "2013", spotify: "https://open.spotify.com/album/2v5w7kFTvULw4d5jHtWhA6" },
  { artist: "Vainio Väisänen Vega", album: "Endless", released: "1998", spotify: "" },
  { artist: "Various Artists", album: "Funeral Songs", released: "2001", spotify: "" },
  { artist: "μ-Ziq", album: "Tango n' Vectif", released: "1993", spotify: "https://open.spotify.com/album/1mwzd45uIahVmQ2A7UvHoq", sortAs: "Mu-Ziq" },

  { artist: "", album: "", released: "", spotify: "" },

]);
