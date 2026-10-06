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
  { artist: "Chuck Berry", album: "Chuck Berry's Golden Decade", released: "1967", spotify: "", link: "https://drive.google.com/drive/folders/1Sf-8aa3H7wcTWCGSzHfEY5Ympr11vP7k?usp=drive_link" },
  { artist: "Chuck Berry", album: "The Great Twenty-Eight", released: "1982", spotify: "https://open.spotify.com/album/2OF8CKhOljClqtRTZ5aILa", pick: true },
  { artist: "Dead Elvis And His One Man Grave", album: "Tired of Hell, Unfit for Heaven", released: "2009", spotify: "", link: "https://drive.google.com/drive/folders/1eHoJZK151geImsWdwBex_SDG2B3UjxRg?usp=drive_link", cover: "https://i.discogs.com/VguwXgIhi6Ly7zm5qPnhd7Oc9xyKnpzJRcLprf69yig/rs:fit/g:sm/q:90/h:443/w:444/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc4MDg3/OTgtMTQ0OTIyNTYw/OS0zMDU3LmpwZWc.jpeg" },
  { artist: "Elvis Presley", album: "Elvis Presley", released: "1956", spotify: "https://open.spotify.com/album/7GXP5OhYyPVLmcVfO9Iqin" },
  { artist: "Elvis Presley", album: "The Complete Sun Sessions", released: "1987", spotify: "https://open.spotify.com/album/4GKfBd0gJ791c3Gp3umNho", link: "https://drive.google.com/drive/folders/18G512i0z6SNgKLhpCr_AA6VpgTjMEIw7?usp=drive_link", cover: "https://i.discogs.com/z8hbMt0HjPItLkIjJKM6rRc-GgUsCb1-lsRI-r00_Ec/rs:fit/g:sm/q:90/h:564/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0Nzcz/MjItMTQwNzczNTk4/My00Mjg0LmpwZWc.jpeg" },
  { artist: "Elvis Presley", album: "The Sun Collection", released: "1975", spotify: "", link: "https://drive.google.com/drive/folders/15tijCec1t8yLxRd-gr4x4aCLQuzA7M5S?usp=drive_link" },
  { artist: "Elvis Presley", album: "The Sun Sessions", released: "1976", spotify: "", link: "https://drive.google.com/drive/folders/1a9J_yXfr58XNwHqe5KnIK5-ps3DGgbZs?usp=drive_link", pick: true },
  { artist: "Howlin' Wolf", album: "Howlin' Wolf", released: "1962", spotify: "https://open.spotify.com/album/7B0Nnfd4SiYFE7KzUDGHoT" },
  { artist: "Johnny Burnette and the Rock 'n Roll Trio", album: "Johnny Burnette and the Rock 'n Roll Trio", released: "1956", spotify: "https://open.spotify.com/album/3zdQxUdPtwDn5Flm7xlefT", link: "https://drive.google.com/drive/folders/1bsu8FxUQ6QKbZ-ojQXnj-mW9xHfe19yq?usp=drive_link", cover: "https://images.genius.com/170c5518b768faccb8cd63489a80c24a.1000x1000x1.png" },
  { artist: "Little Richard", album: "Here's Little Richard", released: "1957", spotify: "https://open.spotify.com/album/15XQCSsirDCUgMEWF4vLFp" },
  { artist: "Muddy Waters", album: "The Anthology: 1947–1972", released: "2001", spotify: "https://open.spotify.com/album/3nwUyORzdqWdwDidxetjD4" },
  { artist: "Muddy Waters", album: "The Best of Muddy Waters", released: "1958", spotify: "https://open.spotify.com/album/6xU8hHhpGaDmFdOVEGRzpY" },
  { artist: "Robert Johnson", album: "King of the Delta Blues Singers", released: "1961", spotify: "https://open.spotify.com/album/2IWaNq5o4tG1w6yxve5BMU", pick: true },
  { artist: "Robert Johnson", album: "The Complete Recordings", released: "1990", spotify: "https://open.spotify.com/album/5lQYtmPhbIIsrUtAVnzyeT" },
  { artist: "Screamin' Jay Hawkins", album: "The Essential Recordings", released: "2000", spotify: "", link: "https://drive.google.com/drive/folders/1qs6RjeTcaSOVSKhtDCBKyh79Ul7buL80?usp=drive_link", cover: "https://i.discogs.com/ry11c_xAm3UBlskyCCFfDYMuWZTWNTowoY6YaLCvcLM/rs:fit/g:sm/q:90/h:394/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NTkx/NTYtMTQxMzI4MjQ4/My02ODU1LmpwZWc.jpeg" },
  { artist: "Sister Rosetta Tharpe", album: "The Original Soul Sister", released: "2002", spotify: "https://open.spotify.com/album/6O3zPjpqUdG4dg9i9ZLANF", link: "https://drive.google.com/drive/folders/1Rxi8uOakOxdzzhoPn64BeG1E1hpkEWSE?usp=drive_link", cover: "https://i.discogs.com/RSN0nyITQumsUNXFYn4_uvz-C8BqTO25Y_APmahnVQU/rs:fit/g:sm/q:90/h:541/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1ODE1/NjcxLTE1OTgzMDgx/MDEtMTAyMC5qcGVn.jpeg" },
  { artist: "Snooks Eaglin", album: "New Orleans Street Singer", released: "1959", spotify: "https://open.spotify.com/album/3QYOWNnvJBThutwlzjBhry", link: "https://drive.google.com/drive/folders/12faAsR1olHL4P9HJZujmqdVtu3bs4AGq?usp=drive_link", cover: "https://images.genius.com/2b551d8085a057bd8a44bc876163fff0.600x600x1.jpg" },
  { artist: "The Shadows", album: "Dance with The Shadows", released: "1964", spotify: "https://open.spotify.com/album/63MJqGez1AN3G4bduMAA24" },
  { artist: "Various Artists", album: "Rockin' in Outer Space Vol 1", released: "2012", spotify: "https://open.spotify.com/album/0rnMH71ttFhVBnGgMdnef8" },
  { artist: "Various Artists", album: "Rockin' in Outer Space Vol 2", released: "2012", spotify: "https://open.spotify.com/album/65T6qA1kXiIdeXuWOybojF" },

  { artist: "", album: "", released: "", spotify: "" },

]);
