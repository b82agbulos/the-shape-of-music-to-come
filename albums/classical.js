/* Classical / Orchestral
   ----------------------
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

  { artist: "Béla Bartók", album: "Music for Strings, Percussion and Celesta", released: "1993", spotify: "", link: "https://drive.google.com/drive/folders/1O2N3c3G1J7Rba4JFrSml7EmUFg_kscrK?usp=drive_link", cover: "https://i.discogs.com/TE4Qnu5Pgyi5WBuZwNg2cTd-_U3Vjqpe1aUd-IdRn7I/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0Mjk3/OTQtMTI4OTI4NTY5/Ni5qcGVn.jpeg" },
  { artist: "Benjamin Britten", album: "War Requiem", released: "1963", spotify: "https://open.spotify.com/album/2FqghDg0MwAVf8cSWMvMlI" },
  { artist: "Camille Saint-Saëns", album: "Danse Macabre", released: "2007", spotify: "", link: "https://drive.google.com/drive/folders/1RhI2ktxFEY_AZKiBB4QKtCltZ4gjAouv?usp=drive_link", cover: "https://i.discogs.com/e12lZ98rEb2PWMZ3H2tdpMHIK33C3WPnS6dicuAp3jA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyMjAx/NjYtMTU4NzgzODgw/NC0zOTA1LmpwZWc.jpeg" },
  { artist: "Sir Edward Elgar, Jacqueline Du Pré, Sir John Barbirolli, London Symphony Orchestra, Janet Baker", album: "Cello Concerto / Sea Pictures", released: "1965", spotify: "https://open.spotify.com/album/0b40AMmZPt7sjgw17WGk1s", sortAs: "Edward Elgar" },
  { artist: "George Gershwin, Willard White, Cynthia Haymon With Damon Evans As Sporting Life, Harolyn Blackwell, Bruce Hubbard, Cynthia Clarey, Marietta Simpson, Gregg Baker, The Glyndebourne Chorus, The London Philharmonic, Simon Rattle", album: "Porgy And Bess", released: "1989", spotify: "", link: "https://drive.google.com/drive/folders/1n7Gtw2McMHPiBHxsntbTC_W3l1GdPv9e?usp=drive_link", cover: "https://i.discogs.com/bBbPsZfc01lIawpcrkiw1OjNj424mWQFQIgOJ7N4gc8/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyOTM5/MDEtMTc1NzY0NzY0/MC0zNjg1LmpwZWc.jpeg" },
  { artist: "Giacomo Puccini, Maria Meneghini Callas, Giuseppe Di Stefano, Tito Gobbi, Franco Calabrese, Angelo Mercuriali, Alvaro Cordova, Dario Caselli, Victor De Sabata, Vittore Veneziani", album: "Tosca", released: "1953", spotify: "https://open.spotify.com/album/2l8HDEuUM2McRE6xCtWiJ7", pick: true },
  { artist: "Hector Berlioz", album: "Symphonie Fantastique", released: "1974", spotify: "", link: "https://drive.google.com/drive/folders/1YYbvwSUJ-W5WVXSiQRr9mYT23jjFlKlU?usp=drive_link", cover: "https://i.discogs.com/tYeENJc4-S-NhoEYiEmnpul2SzMIY7LRxMfWotqPXCw/rs:fit/g:sm/q:90/h:485/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYyMjM2/MzctMTUyMTIzNTQy/NS0yNTQxLmpwZWc.jpeg" },
  { artist: "Johann Sebastian Bach, Glenn Gould", album: "The Goldberg Variations", released: "1956", spotify: "https://open.spotify.com/album/3Np4iJqYwS3n3IvvsnUwWB", link: "https://drive.google.com/drive/folders/1Ewj9cRZsBI0xUscSv9TyZRhOb4mlrfNG?usp=drive_link", cover: "https://i.discogs.com/w90A6eNw1IOXwOFwy0pUJ4KI5n4xt9HLfkHbVFIahj0/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY5MTUy/MjAtMTQ0NjQ0NzQx/Ny04NDkyLmpwZWc.jpeg", pick: true },
  { artist: "Ludwig van Beethoven, Wiener Philharmoniker, Carlos Kleiber", album: "Symphonies Nos. 5 & 7", released: "1995", spotify: "https://open.spotify.com/album/6eOuqhCfrTPp1H0YbQ9PmL", cover: "https://i.discogs.com/53kiALlwcgtFZd9DyoufF7HSqISMdOwORdcPDx7LbTM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMzA5/NzAtMTUyMzMyNjEz/MS05MzI1LmpwZWc.jpeg", pick: true },
  { artist: "Pyotr Ilyich Tchaikovsky, Leningrad Philharmonic Orchestra, Evgeny Mravinsky", album: "Symphonies Nos. 4, 5 & 6 “Pathétique”", released: "1961", spotify: "https://open.spotify.com/album/1h5YKmhPGrRiB2WaO7TOaK", link: "https://drive.google.com/drive/folders/1Dr84ZAsngqw8goaerdRUCm1ovMMl8aty?usp=drive_link", cover: "https://i.discogs.com/P7MvQIUJNn6uoiqVrqBQM2R5ajEYlZH-yflJiHpE4fE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjEw/Njk1LTE1NDM5Mjgx/NjAtMjU2My5qcGVn.jpeg" },
  { artist: "Richard Wagner, Sir Georg Solti", album: "Der Ring des Nibelungen", released: "1997", spotify: "https://open.spotify.com/album/0S9Qlb37K5Z9IB0qXIsDCQ", pick: true },
  { artist: "Richard Wagner, Wilhelm Furtwängler, Kirsten Flagstad, Ludwig Suthaus, Philharmonia Orchestra", album: "Tristan Und Isolde", released: "1952", spotify: "https://open.spotify.com/album/37bL5BfzehXOyG8RhN8Li2", link: "https://drive.google.com/drive/folders/1tCbkW726v0vPH3a-ocbvGVxb3g7-witY?usp=drive_link", cover: "https://i.discogs.com/RYBFfPIPE0zqMKX5AgdzgHeD6Sie2zOo3FtFccd6pTk/rs:fit/g:sm/q:90/h:511/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc5NzU5/NTctMTY3Mjk5NDM3/OS00ODk5LnBuZw.jpeg" },
  { artist: "Maurice Ravel, Hector Berlioz, Debussy, Poulenc", album: "Shéhérazade / Les nuits d'été", released: "1964", spotify: "https://open.spotify.com/album/1wAQtboQtay46yY4BwV0z0", link: "https://drive.google.com/drive/folders/1xGqQj8MuEBzzHTHOCYFjojL7NL5fILJz?usp=drive_link", cover: "https://i.discogs.com/wEhegCMENiyAUM6ncTpNZNeRefgzZyhvWoo9lQG9jhM/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU4MjQy/NjEtMTQwMzcwNTE3/My01MzE4LmpwZWc.jpeg" },

  { artist: "", album: "", released: "", spotify: "" },

]);
