/* Stage & Screen › Spoken Word
   ----------------------------
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

  { artist: "Aim Record Distribution, Inc.", album: "Playhouse Presentation Of Terrifying Ghost Stories", released: "", spotify: "" },
  { artist: "Alfred Hitchcock", album: "Alfred Hitchcock Presents Ghost Stories for Young People", released: "1962", spotify: "" },
  { artist: "Alfred Hitchcock", album: "Alfred Hitchcock presents Music to be Murdered By", released: "1958", spotify: "" },
  { artist: "Ambrose Bierce", album: "Tales Of Horror And Suspense (Read by Ugo Toppo)", released: "1967", spotify: "" },
  { artist: "Anthony D. P. Mann", album: "The Hearse Song (Score by The Slasher Film Festival Strategy)", released: "2017", spotify: "" },
  { artist: "Arch Oboler", album: "Drop Dead! An Exercise In Horror!", released: "1962", spotify: "" },
  { artist: "Arthur Writ, Cherney Berg", album: "Great Ghost Stories", released: "1973", spotify: "" },
  { artist: "Billy Bletcher", album: "Walt Disney's The Legend Of Sleepy Hollow And Rip Van Winkle", released: "1965", spotify: "" },
  { artist: "Bleak December Inc", album: "Return to Frightenstein", released: "2019", spotify: "" },
  { artist: "Boris Karloff", album: "An Evening With Boris Karloff And His Friends", released: "1967", spotify: "" },
  { artist: "Boris Karloff", album: "Tales Of The Frightened Volume I", released: "1963", spotify: "" },
  { artist: "Boris Karloff", album: "Tales Of The Frightened Volume II", released: "1963", spotify: "" },
  { artist: "Casper The Friendly Ghost", album: "Casper The Friendly Ghost: Haunted House Tales", released: "1973", spotify: "" },
  { artist: "Casper The Friendly Ghost", album: "Casper, The Friendly Ghost And The Demon Of Darkness", released: "1976", spotify: "" },
  { artist: "Cherney Berg, Gabriel Dell", album: "Famous Monsters Speak", released: "1963", spotify: "" },
  { artist: "Christopher Lee", album: "Dracula", released: "1974", spotify: "" },
  { artist: "Christopher Lee", album: "Dracula (An Adaptation With Music And Sound, Of The Original, Classic Story)", released: "1966", spotify: "" },
  { artist: "Count Chocula, Boo Berry, Frankenberry", album: "Count Chocula Goes to Hollywood", released: "1979", spotify: "" },
  { artist: "Count Chocula, Boo Berry, Frankenberry", album: "Monster Adventures In Outer Space", released: "1979", spotify: "" },
  { artist: "Count Chocula, Boo Berry, Frankenberry", album: "The Monsters Go Disco", released: "1979", spotify: "" },
  { artist: "Denis Green and Anthony Boucher", album: "The New Adventures of Sherlock Holmes", released: "2001", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Basil Rathbone Reads Edgar Allan Poe", released: "1958", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Edgar Allan Poe: The Imp Of The Perverse And Other Tales (Read by Vincent Price)", released: "1975", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Edgar Allan Poe's Ligeia (Read by Vincent Price)", released: "1977", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Fright", released: "1961", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Horror", released: "1961", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Nightmare", released: "1962", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Short Stories Of Edgar Allan Poe Vol. II (Read by Martin Donegan)", released: "1969", spotify: "" },
  { artist: "Edgar Allan Poe", album: "Terror: The Son Of Horror", released: "1970", spotify: "" },
  { artist: "Edgar Allan Poe, W. W. Jacobs, Lafcadio Hearn, H.H. Munro", album: "Thrillers & Chillers", released: "1973", spotify: "" },
  { artist: "Erica Frost", album: "I Can Read About Ghosts", released: "1977", spotify: "" },
  { artist: "Fangface", album: "Fangface", released: "1978", spotify: "" },
  { artist: "Forrest J. Ackerman, Frank Coe", album: "Music For Robots", released: "1987", spotify: "" },
  { artist: "George S. Irving", album: "Scary Stories To Tell In The Dark", released: "1986", spotify: "" },
  { artist: "H.P. Lovecraft", album: "Roddy McDowall Reads The Horror Stories Of H.P. Lovecraft", released: "1966", spotify: "" },
  { artist: "H.P. Lovecraft", album: "The Case Of Charles Dexter Ward (Read by Andrew Leman, Score by Chris Bozzone & Slasher Film Festival Strategy)", released: "2025", spotify: "" },
  { artist: "H.P. Lovecraft", album: "The Festival (Read by Andrew Leman; Music by Fabio Frizzi)", released: "2020", spotify: "" },
  { artist: "John Ciardi", album: "You Read To Me, I'll Read To You", released: "1962", spotify: "" },
  { artist: "Louise Huebner", album: "Louise Huebner's Seduction Through Witchcraft", released: "1969", spotify: "" },
  { artist: "Martha Wentworth", album: "Terror Tales", released: "1959", spotify: "" },
  { artist: "Mercury Radio Theater", album: "The Death and Life of the Undead Boy", released: "2003", spotify: "" },
  { artist: "Neal Adams", album: "A Story Of Dracula, The Wolfman, and Frankenstein", released: "1975", spotify: "" },
  { artist: "Nelson Olmsted", album: "Sleep No More! Famous Ghost And Horror Stories", released: "1956", spotify: "" },
  { artist: "Nelson Olmsted", album: "Tales Of Terror", released: "1971", spotify: "" },
  { artist: "Power Records", album: "Dracula - Terror in the Snow", released: "1974", spotify: "" },
  { artist: "Power Records", album: "Dracula - Terror in the Snow v2", released: "1974", spotify: "" },
  { artist: "Power Records", album: "Man-Thing: Night Of The Laughing Dead!", released: "1974", spotify: "" },
  { artist: "Power Records", album: "The Curse of the Werewolf", released: "1974", spotify: "" },
  { artist: "Power Records", album: "The Monster Of Frankenstein", released: "1974", spotify: "" },
  { artist: "Rev. Patrick J. Berkery, Ph.D.", album: "The Rite Of Exorcism", released: "1974", spotify: "" },
  { artist: "Robert Bright", album: "Georgie and the Noisy Ghost (Read by George Rose; Music by Michael Lobel)", released: "1980", spotify: "" },
  { artist: "The Wonderland Imagination Theatre", album: "The Invisible Man", released: "1974", spotify: "" },
  { artist: "Thomas Ligotti", album: "Mrs. Rinaldi's Angel (Read by Jon Padgett; Score by Chris Bozzone)", released: "2022", spotify: "" },
  { artist: "Washington Irving", album: "The Legend Of Sleepy Hollow", released: "1963", spotify: "" },
  { artist: "William Castle", album: "William Castle's Ghost Story", released: "1972", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
