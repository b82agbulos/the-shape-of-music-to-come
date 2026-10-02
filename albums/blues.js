/* Blues / Early R&B / Rock 'n' Roll
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

  { artist: "Blues Breakers", album: "John Mayall with Eric Clapton", released: "1966", spotify: "https://open.spotify.com/album/3W45Tazulh4zb48uL1RV8H" },
  { artist: "Chuck Berry", album: "Berry Is on Top", released: "1959", spotify: "https://open.spotify.com/album/6eedtCtCjibu80yOhylSGL" },
  { artist: "Chuck Berry", album: "Chuck Berry in London", released: "1965", spotify: "https://open.spotify.com/album/7iSQ8Jg0DA18JCl4SqpDEW" },
  { artist: "Chuck Berry", album: "Chuck Berry's Golden Decade", released: "1967", spotify: "" },
  { artist: "Chuck Berry", album: "The Great Twenty-Eight", released: "1982", spotify: "https://open.spotify.com/album/2OF8CKhOljClqtRTZ5aILa", pick: true },
  { artist: "Dead Elvis And His One Man Grave", album: "Tired of Hell, Unfit for Heaven", released: "2009", spotify: "" },
  { artist: "Elvis Presley", album: "Elvis Presley", released: "1956", spotify: "https://open.spotify.com/album/7GXP5OhYyPVLmcVfO9Iqin" },
  { artist: "Elvis Presley", album: "The Complete Sun Sessions", released: "1987", spotify: "https://open.spotify.com/album/4GKfBd0gJ791c3Gp3umNho" },
  { artist: "Elvis Presley", album: "The Sun Collection", released: "1975", spotify: "" },
  { artist: "Elvis Presley", album: "The Sun Sessions", released: "1976", spotify: "", pick: true },
  { artist: "Howlin' Wolf", album: "Howlin' Wolf", released: "1962", spotify: "https://open.spotify.com/album/7B0Nnfd4SiYFE7KzUDGHoT" },
  { artist: "Johnny Burnette and the Rock 'n Roll Trio", album: "Johnny Burnette and the Rock 'n Roll Trio", released: "1956", spotify: "https://open.spotify.com/album/3zdQxUdPtwDn5Flm7xlefT" },
  { artist: "Little Richard", album: "Here's Little Richard", released: "1957", spotify: "https://open.spotify.com/album/15XQCSsirDCUgMEWF4vLFp" },
  { artist: "Muddy Waters", album: "The Anthology: 1947–1972", released: "2001", spotify: "https://open.spotify.com/album/3nwUyORzdqWdwDidxetjD4" },
  { artist: "Muddy Waters", album: "The Best of Muddy Waters", released: "1958", spotify: "https://open.spotify.com/album/6xU8hHhpGaDmFdOVEGRzpY" },
  { artist: "Robert Johnson", album: "King of the Delta Blues Singers", released: "1961", spotify: "https://open.spotify.com/album/2IWaNq5o4tG1w6yxve5BMU", pick: true },
  { artist: "Robert Johnson", album: "The Complete Recordings", released: "1990", spotify: "https://open.spotify.com/album/5lQYtmPhbIIsrUtAVnzyeT" },
  { artist: "Screamin' Jay Hawkins", album: "The Essential Recordings", released: "2000", spotify: "" },
  { artist: "Sister Rosetta Tharpe", album: "The Original Soul Sister", released: "2002", spotify: "https://open.spotify.com/album/6O3zPjpqUdG4dg9i9ZLANF" },
  { artist: "Snooks Eaglin", album: "New Orleans Street Singer", released: "1959", spotify: "https://open.spotify.com/album/3QYOWNnvJBThutwlzjBhry" },
  { artist: "The Shadows", album: "Dance with The Shadows", released: "1964", spotify: "https://open.spotify.com/album/63MJqGez1AN3G4bduMAA24" },
  { artist: "Various Artists", album: "Rockin' in Outer Space Vol 1", released: "2012", spotify: "https://open.spotify.com/album/0rnMH71ttFhVBnGgMdnef8" },
  { artist: "Various Artists", album: "Rockin' in Outer Space Vol 2", released: "2012", spotify: "https://open.spotify.com/album/65T6qA1kXiIdeXuWOybojF" },

  { artist: "", album: "", released: "", spotify: "" },

]);
