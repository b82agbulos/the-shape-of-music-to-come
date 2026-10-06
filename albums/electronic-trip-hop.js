/* Electronic › Trip-Hop / Downtempo
   ---------------------------------
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

  { artist: "Air", album: "Moon Safari", released: "1998", spotify: "https://open.spotify.com/album/5dmYtZVJ1bG9RyrZBRrkOA" },
  { artist: "Beth Orton", album: "Trailer Park", released: "1996", spotify: "https://open.spotify.com/album/5WpjO5MZRlFohnZ1EeIcsy" },
  { artist: "Blue & Holding", album: "Hell", released: "", spotify: "", link: "https://drive.google.com/drive/folders/1MPNRVvxCRfGnt9THhwvVqvM9X3Jm7nMz?usp=drive_link", cover: "https://i.discogs.com/73Ehzq8RdVMpjKOxS362-N_PkPYFs2EMv8wNyopoIuw/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDYz/MjUtMTIzMTcyMjY4/OS5qcGVn.jpeg" },
  { artist: "Bowery Electric", album: "Beat", released: "1996", spotify: "https://open.spotify.com/album/6jbGBeBtwD05O0EV9RFjlC" },
  { artist: "Cibo Matto", album: "Viva! La Woman", released: "1996", spotify: "https://open.spotify.com/album/1Sha7blBHJ2ZBK5FjVXU9W" },
  { artist: "DJ Cam", album: "Abstract Manifesto", released: "1996", spotify: "https://open.spotify.com/album/5fQRlwuPBxtmq2pK9tR8y6" },
  { artist: "DJ Krush", album: "Meiso", released: "1995", spotify: "https://open.spotify.com/album/4CP9eTY7tIcp3w2idhLwvQ", link: "https://drive.google.com/drive/folders/1IYmDmzIVwZJTyTYcGuGniR9aukt6AtPH?usp=drive_link", cover: "https://i.discogs.com/m5gZPvOa_yymL1YQVzhJH4rkUL8-N7f-6EgHArwiAG0/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3Mzgy/MS0xMzYzMzcwNzQ1/LTU1NjAuanBlZw.jpeg" },
  { artist: "DJ Shadow", album: "Endtroducing.....", released: "1996", spotify: "https://open.spotify.com/album/4tUVkNYSFrrEqqrxBQW9PN", pick: true },
  { artist: "DJ Spooky", album: "Songs of a Dead Dreamer", released: "1996", spotify: "https://open.spotify.com/album/59FLtEnXNqYKwT5M3W3XoG" },
  { artist: "Everything but the Girl", album: "Walking Wounded", released: "1996", spotify: "https://open.spotify.com/album/2mKMc9g06B2uYTaYRYqpAk" },
  { artist: "Goldfrapp", album: "Felt Mountain", released: "2000", spotify: "https://open.spotify.com/album/1SVCM1f5fGypJbIixT1Eed" },
  { artist: "King Krule", album: "The Ooz", released: "2017", spotify: "https://open.spotify.com/album/7D0onfXwlFnOvm1gF3nEdw" },
  { artist: "Laika", album: "Sounds of the Satellites", released: "1997", spotify: "https://open.spotify.com/album/51FoRkdxXCk77EDTSnA57Y" },
  { artist: "Lamb", album: "Lamb", released: "1996", spotify: "https://open.spotify.com/album/6Aj5G15ET1w6vIP2FyUEYS" },
  { artist: "Lovage", album: "Music to Make Love to Your Old Lady By", released: "2001", spotify: "https://open.spotify.com/album/3QFwPfYolMmXNNdOrRLLGE" },
  { artist: "Luke Vibert", album: "Big Soup", released: "1997", spotify: "", link: "https://drive.google.com/drive/folders/1VsYuh43bajD4vDiGsnFE6bpEBZf25HM-?usp=drive_link" },
  { artist: "Massive Attack", album: "Blue Lines", released: "1991", spotify: "https://open.spotify.com/album/3oUpZKrR0Z8DK7ud3S8a2M" },
  { artist: "Massive Attack", album: "Mezzanine", released: "1998", spotify: "https://open.spotify.com/album/49MNmJhZQewjt06rpwp6QR" },
  { artist: "Massive Attack", album: "Protection", released: "1994", spotify: "https://open.spotify.com/album/5CnZjFfPDmxOX7KnWLLqpC" },
  { artist: "Morcheeba", album: "Big Calm", released: "1998", spotify: "https://open.spotify.com/album/7rjjFxMFZjPzQzBMj6mXr2" },
  { artist: "Neneh Cherry", album: "Homebrew", released: "1992", spotify: "https://open.spotify.com/album/10HVfiyq9hmHXZ1CS8xTDR" },
  { artist: "Neotropic", album: "Mr Brubakers Strawberry Alarm Clock", released: "1998", spotify: "https://open.spotify.com/album/1YrlvrywWuhaeQXQYOPxDo" },
  { artist: "Nightmares on Wax", album: "Smoker's Delight", released: "1995", spotify: "https://open.spotify.com/album/3stVzMomzhVGw0prDxLY0K", link: "https://drive.google.com/drive/folders/1_kFRBj2NMBiuARBU9x6Vcw69auIuw-Xo?usp=drive_link", cover: "https://images.genius.com/01ffad538b17a2dcce37848ea5fa32e4.1000x1000x1.png" },
  { artist: "Portishead", album: "Dummy", released: "1994", spotify: "https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno", pick: true },
  { artist: "Portishead", album: "Portishead", released: "1997", spotify: "https://open.spotify.com/album/3G36754KQVLyGuskraEAVA" },
  { artist: "Portishead", album: "Third", released: "2008", spotify: "https://open.spotify.com/album/4BnNSzOWadogStvyYshJIo" },
  { artist: "Smith & Mighty", album: "Bass Is Maternal", released: "1995", spotify: "https://open.spotify.com/album/5pdVTHHn7H44nW7UQzl0Rf" },
  { artist: "Sneaker Pimps", album: "Becoming X", released: "1996", spotify: "https://open.spotify.com/album/4CqepH0gmnNKTgENheRgT7" },
  { artist: "Tricky", album: "Maxinquaye", released: "1995", spotify: "https://open.spotify.com/album/7Hj7jLvac1sBCDnvP6qBYd", pick: true },
  { artist: "Tricky", album: "Pre-Millennium Tension", released: "1996", spotify: "https://open.spotify.com/album/4dGH1uAcmVohLUM5r6vo8o" },
  { artist: "Unkle", album: "Psyence Fiction", released: "1998", spotify: "https://open.spotify.com/album/0LFPjvWEaHP7WKQD6F5pVS" },
  { artist: "Various Artists", album: "Headz 2A", released: "1996", spotify: "", link: "https://drive.google.com/drive/folders/12qHPWXlbY_CGWG9iHzozyByS3qiWoWC4?usp=drive_link", cover: "https://i.discogs.com/sUwjGLzvUaEFib5xDzUt0NgCbwMjy1hQraQUnwslg2c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwMDM1/LTE2NDQ4NDI0Mzct/NDI1My5qcGVn.jpeg" },
  { artist: "Various Artists", album: "Headz 2B", released: "1996", spotify: "", link: "https://drive.google.com/drive/folders/165RXGB6WuYjiiP9nVkUO0LTGwygEeLTn?usp=drive_link" },
  { artist: "Major Force West", album: "93–97", released: "1999", spotify: "https://open.spotify.com/album/465mxu1pDJsSCXOziGO7ly" },

  { artist: "", album: "", released: "", spotify: "" },

]);
