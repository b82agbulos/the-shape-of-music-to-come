/* Electronic › Dance / House / Techno / Big Beat
   ----------------------------------------------
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

  { artist: "2ManyDJs", album: "As Heard on Radio Soulwax Pt. 2", released: "2003", spotify: "" },
  { artist: "Against All Logic", album: "2012–2017", released: "2018", spotify: "https://open.spotify.com/album/1uzfGk9vxMXfaZ2avqwxod" },
  { artist: "Basement Jaxx", album: "Remedy", released: "1999", spotify: "https://open.spotify.com/album/5l7GOQvdeovtIAFmaHXshb" },
  { artist: "Caribou", album: "Our Love", released: "2014", spotify: "https://open.spotify.com/album/4JOmLltFC735tBL7jfHfA7" },
  { artist: "Daft Punk", album: "Discovery", released: "2001", spotify: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc", pick: true },
  { artist: "Daft Punk", album: "Homework", released: "1997", spotify: "https://open.spotify.com/album/5uRdvUR7xCnHmUW8n64n9y" },
  { artist: "Daft Punk", album: "Random Access Memories", released: "2013", spotify: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa" },
  { artist: "Death In Vegas", album: "The Contino Sessions", released: "1999", spotify: "https://open.spotify.com/album/4qUKzyXuy3GSzQD5RTJLdq" },
  { artist: "Deee-Lite", album: "World Clique", released: "1990", spotify: "https://open.spotify.com/album/4sTAgYLZy5zwqR3kT1g0oh" },
  { artist: "Disclosure", album: "Settle", released: "2013", spotify: "https://open.spotify.com/album/1ZFGRj11NnZHos8DUbbpF1" },
  { artist: "DJ Koze", album: "Knock Knock", released: "2018", spotify: "https://open.spotify.com/album/0sT4nyNxsvGNQr1O8OR83O" },
  { artist: "DJ Speedy", album: "Electro Euro-Trash", released: "2004", spotify: "" },
  { artist: "Fatboy Slim", album: "You've Come a Long Way, Baby", released: "1998", spotify: "https://open.spotify.com/album/5oF9RaCKaF7e5siW9zdl6L" },
  { artist: "Four Tet", album: "There Is Love in You", released: "2010", spotify: "https://open.spotify.com/album/6x2gG7Pw1g54ZjQWjiAVCK" },
  { artist: "Hercules and Love Affair", album: "Hercules and Love Affair", released: "2008", spotify: "https://open.spotify.com/album/7Ha78bY9Jeof6U0yXT8sp0" },
  { artist: "Jamie xx", album: "In Colour", released: "2015", spotify: "https://open.spotify.com/album/04Duapg2mNlVykd895xcfZ" },
  { artist: "Jessie Ware", album: "What's Your Pleasure?", released: "2020", spotify: "https://open.spotify.com/album/1CTm3ARqDETSm7GfvNYNJp" },
  { artist: "LCD Soundsystem", album: "LCD Soundsystem", released: "2005", spotify: "https://open.spotify.com/album/6aSk2vxoY3xtz7cXKuY9EL" },
  { artist: "LCD Soundsystem", album: "Sound Of Silver", released: "2007", spotify: "https://open.spotify.com/album/1R8kkopLT4IAxzMMkjic6X" },
  { artist: "LCD Soundsystem", album: "This Is Happening", released: "2010", spotify: "https://open.spotify.com/album/4hnqM0JK4CM1phwfq1Ldyz" },
  { artist: "Moby", album: "Everything Is Wrong", released: "1995", spotify: "https://open.spotify.com/album/31qneFkDfKhjVNH0kqdhQ1" },
  { artist: "Moby", album: "Play", released: "1999", spotify: "https://open.spotify.com/album/1xB1tmm50ZhXwrNs89u7Jx" },
  { artist: "Orbital", album: "Orbital 2 (Brown Album)", released: "1993", spotify: "https://open.spotify.com/album/1JYyYFJSYrXMHLe7Dz1B3W" },
  { artist: "Porter Ricks", album: "Biokinetics", released: "1996", spotify: "https://open.spotify.com/album/53NpZCeQB2JdALLsHsObjg" },
  { artist: "Primal Scream", album: "Screamadelica", released: "1991", spotify: "https://open.spotify.com/album/4TECsw2dFHZ1ULrT7OA3OL" },
  { artist: "Primal Scream", album: "XTRMNTR", released: "2000", spotify: "https://open.spotify.com/album/1jRIP96i2Dx4bVKV2kwcC8" },
  { artist: "Richie Hawtin", album: "DE9 | Closer to the Edit", released: "2001", spotify: "" },
  { artist: "The Avalanches", album: "Since I Left You", released: "2000", spotify: "https://open.spotify.com/album/6nGvONPR7bY6at6ccJ87G3", pick: true },
  { artist: "The Chemical Brothers", album: "Dig Your Own Hole", released: "1997", spotify: "https://open.spotify.com/album/0FjHy5dCyVROqDUl6f2VTK" },
  { artist: "The Chemical Brothers", album: "Exit Planet Dust", released: "1995", spotify: "https://open.spotify.com/album/1Bmuyq89rXZJNK1w8pauEg" },
  { artist: "The Field", album: "From Here We Go Sublime", released: "2007", spotify: "https://open.spotify.com/album/5oNWGhIs9vpB6FJ6rv5VuO" },
  { artist: "The KLF", album: "The White Room", released: "1989", spotify: "https://open.spotify.com/album/0pXHFRsNFwGmFv9zlNOoKC" },
  { artist: "The Orb", album: "The Orb's Adventures Beyond the Ultraworld", released: "1991", spotify: "https://open.spotify.com/album/3IQGG1m7Pa6DAopVyxGmlL" },
  { artist: "The Orb", album: "U.F.Orb", released: "1992", spotify: "https://open.spotify.com/album/4KxW1qRjRL5qVxTtxLiPwq" },
  { artist: "The Prodigy", album: "Music for the Jilted Generation", released: "1994", spotify: "https://open.spotify.com/album/4qhJwKBr2ksxAUFjfJd3rb" },
  { artist: "The Prodigy", album: "The Fat of the Land", released: "1997", spotify: "https://open.spotify.com/album/2qivROlvQ8BcUKTaCA7dL2" },
  { artist: "Todd Terje", album: "It's Album Time", released: "2014", spotify: "https://open.spotify.com/album/058No4Kiz8r284NwzBSBC2" },
  { artist: "Underworld", album: "Dubnobasswithmyheadman", released: "1994", spotify: "https://open.spotify.com/album/5rjMqBWOQQSS4glQ8PWInj" },
  { artist: "Underworld", album: "Second Toughest in the Infants", released: "1996", spotify: "https://open.spotify.com/album/7KCxqRRNQfefktipLBoM16" },

  { artist: "", album: "", released: "", spotify: "" },

]);
