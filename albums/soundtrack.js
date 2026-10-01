/* Soundtrack / Score
   ------------------
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

  { artist: "Aimee Mann", album: "Magnolia: Music from the Motion Picture", released: "1999", spotify: "https://open.spotify.com/album/6jbjx0LGKl11H6UtrgS2nV" },
  { artist: "Akira Ifukube", album: "Godzilla", released: "1954", spotify: "" },
  { artist: "Alan Silvestri", album: "Predator", released: "1987", spotify: "" },
  { artist: "Alfons Conde", album: "No-Do (The Beckoning)", released: "2009", spotify: "" },
  { artist: "Band Of Pain", album: "Sacred Flesh", released: "2000", spotify: "https://open.spotify.com/album/5Es5VRpWqHrMe31VcOYrAy" },
  { artist: "Bernard Herrmann", album: "The Alfred Hitchcock Hour Vol. 1", released: "2011", spotify: "" },
  { artist: "Brian Reitzell", album: "Hannibal: Season 3", released: "2015", spotify: "" },
  { artist: "Brian Tyler", album: "Bug", released: "2006", spotify: "" },
  { artist: "Bruce Broughton", album: "The Monster Squad", released: "1987", spotify: "" },
  { artist: "Charles Bernstein", album: "A Nightmare On Elm Street", released: "1984", spotify: "" },
  { artist: "Chris Vrenna", album: "American McGee's Alice", released: "2000", spotify: "" },
  { artist: "Christopher Young & David Storrs", album: "Invaders From Mars", released: "1986", spotify: "" },
  { artist: "Christopher Young", album: "Drag Me To Hell", released: "2009", spotify: "" },
  { artist: "Christopher Young", album: "Hellraiser / Hellbound: Hellraiser II", released: "2012", spotify: "" },
  { artist: "Christopher Young", album: "Species", released: "1995", spotify: "" },
  { artist: "Danny Elfman", album: "Mars Attacks!", released: "1996", spotify: "" },
  { artist: "Danny Elfman", album: "The Nightmare Before Christmas", released: "1993", spotify: "" },
  { artist: "Danny Elfman", album: "The Wolfman", released: "2010", spotify: "" },
  { artist: "David Lynch and Peter Ivers", album: "Eraserhead", released: "1982", spotify: "" },
  { artist: "Dick Jacobs and His Orchestra", album: "Themes From Horror Movies", released: "1959", spotify: "" },
  { artist: "Ennio Morricone", album: "An Ennio Morricone · Dario Argento Trilogy", released: "1995", spotify: "" },
  { artist: "Ennio Morricone", album: "Crime And Dissonance", released: "2005", spotify: "" },
  { artist: "Ennio Morricone", album: "Drammi Gotici", released: "1976", spotify: "" },
  { artist: "Ennio Morricone", album: "La Tarantola Dal Ventre Nero", released: "1971", spotify: "" },
  { artist: "Fernando Velázquez", album: "Mama", released: "2013", spotify: "" },
  { artist: "Geoffrey Burgon", album: "Doctor Who: Terror Of The Zygons", released: "2000", spotify: "" },
  { artist: "Goblin", album: "Suspiria", released: "1977", spotify: "" },
  { artist: "Harry Robinson", album: "The Vampire Lovers", released: "1970", spotify: "" },
  { artist: "Henry Mancini & Michael Kamen", album: "Lifeforce", released: "1985", spotify: "" },
  { artist: "Herschell Gordon Lewis", album: "The Eye-Popping Sounds Of Herschell Gordon Lewis", released: "2002", spotify: "" },
  { artist: "James Bernard", album: "Dracula + The Curse of Frankenstein", released: "2019", spotify: "" },
  { artist: "James Bernard", album: "The Legend Of The 7 Golden Vampires", released: "1974", spotify: "" },
  { artist: "James Bernard with Christopher Lee", album: "Hammer Presents Dracula", released: "1974", spotify: "" },
  { artist: "James Horner", album: "Aliens", released: "1986", spotify: "" },
  { artist: "James Horner", album: "Wolfen", released: "1981", spotify: "" },
  { artist: "Javier Navarrete", album: "Pan's Labyrinth", released: "2006", spotify: "" },
  { artist: "Jeff Grace", album: "Stake Land", released: "2010", spotify: "" },
  { artist: "Jerry Goldsmith", album: "Alien", released: "1979", spotify: "" },
  { artist: "Jerry Goldsmith", album: "Alien", released: "2017", spotify: "" },
  { artist: "Jerry Goldsmith", album: "Poltergeist", released: "1982", spotify: "" },
  { artist: "Jerry Goldsmith", album: "The Omen", released: "1976", spotify: "" },
  { artist: "Jerry Goldsmith", album: "Twilight Zone: The Movie", released: "1983", spotify: "" },
  { artist: "Johan Söderqvist", album: "Let the Right One In", released: "2008", spotify: "" },
  { artist: "Johan Söderqvist", album: "Let the Right One In", released: "2022", spotify: "" },
  { artist: "John Carpenter", album: "Anthology (Movie Themes 1974-1998)", released: "2017", spotify: "" },
  { artist: "John Carpenter", album: "Halloween", released: "1998", spotify: "" },
  { artist: "John Carpenter", album: "Halloween", released: "2000", spotify: "" },
  { artist: "John Carpenter and Alan Howarth", album: "Halloween III", released: "1982", spotify: "" },
  { artist: "John Carpenter and Alan Howarth", album: "Prince of Darkness", released: "1987", spotify: "" },
  { artist: "John Carpenter, Cody Carpenter and Daniel Davies", album: "Halloween", released: "2018", spotify: "" },
  { artist: "John Frizzell", album: "Alien Resurrection", released: "1997", spotify: "" },
  { artist: "John Harrison", album: "Creepshow", released: "1982", spotify: "" },
  { artist: "John Harrison", album: "Creepshow", released: "2003", spotify: "" },
  { artist: "John Harrison", album: "Day Of The Dead", released: "1985", spotify: "" },
  { artist: "John Murphy", album: "28 Weeks Later", released: "2007", spotify: "" },
  { artist: "John Williams", album: "Jaws", released: "1975", spotify: "" },
  { artist: "Ken Wannberg, Rick Wilkins & Howard Blake", album: "The Changeling", released: "1980", spotify: "" },
  { artist: "Kyle Dixon and Michael Stein", album: "Stranger Things Volume 1", released: "2016", spotify: "" },
  { artist: "Kyle Dixon and Michael Stein", album: "Stranger Things Volume 2", released: "2016", spotify: "" },
  { artist: "Leonard Rosenman", album: "Prophecy", released: "1979", spotify: "" },
  { artist: "Leonard Rosenman", album: "The Car", released: "1977", spotify: "" },
  { artist: "Les Baxter", album: "Black Sabbath", released: "1963", spotify: "" },
  { artist: "Les Baxter", album: "House of Usher", released: "1960", spotify: "" },
  { artist: "Luboš Fišer", album: "Valerie A Týden Divů", released: "1970", spotify: "" },
  { artist: "Marc Wilkinson", album: "Blood On Satan's Claw", released: "1971", spotify: "" },
  { artist: "Marco Beltrami", album: "Mimic", released: "1997", spotify: "" },
  { artist: "Marco Beltrami", album: "Scream", released: "1996", spotify: "" },
  { artist: "Marco Beltrami", album: "The Woman in Black", released: "2012", spotify: "" },
  { artist: "Masatoshi Mitsumoto", album: "Creature From The Black Lagoon (And Other Jungle Pictures)", released: "2000", spotify: "" },
  { artist: "Max Steiner", album: "King Kong", released: "1933", spotify: "" },
  { artist: "Michael Andrews", album: "Donnie Darko", released: "2002", spotify: "https://open.spotify.com/album/3Wis5mzfaH5gqdVnjpFGlL" },
  { artist: "Michael J. Lewis", album: "Theater of Blood", released: "1973", spotify: "" },
  { artist: "Michelle DiBucci", album: "Wendigo", released: "2001", spotify: "" },
  { artist: "Nash the Slash", album: "Nosferatu", released: "2001", spotify: "" },
  { artist: "Nico Fidenco", album: "Zombi Holocaust", released: "1980", spotify: "" },
  { artist: "Nico Muhly", album: "Joshua", released: "2007", spotify: "" },
  { artist: "Óscar Araujo", album: "Castlevania: Lords of Shadow", released: "2010", spotify: "" },
  { artist: "Paul Sabu", album: "Hard Rock Zombies", released: "1985", spotify: "" },
  { artist: "Philip Glass", album: "Dracula", released: "1999", spotify: "" },
  { artist: "Pino Donaggio", album: "Carrie", released: "1976", spotify: "" },
  { artist: "Pino Donaggio", album: "Dressed to Kill", released: "1980", spotify: "" },
  { artist: "Richard Band", album: "From Beyond", released: "1986", spotify: "" },
  { artist: "Riz Ortolani", album: "House on the Edge of the Park", released: "1980", spotify: "" },
  { artist: "Robin Coudert", album: "Maniac", released: "2012", spotify: "" },
  { artist: "Roman Vlad", album: "I Vampiri", released: "1957", spotify: "" },
  { artist: "Roy Webb", album: "Cat People: The Music For The Films Of Val Lewton", released: "2000", spotify: "" },
  { artist: "SQÜRL and Jozef van Wissem", album: "Only Lovers Left Alive", released: "2013", spotify: "" },
  { artist: "Stan Ridgway & Pietra Wexstun", album: "Blood", released: "2003", spotify: "" },
  { artist: "Steven Price and Basement Jaxx", album: "Attack The Block", released: "2011", spotify: "" },
  { artist: "Trevor Jones", album: "From Hell", released: "2001", spotify: "" },
  { artist: "Tyler Bates", album: "300", released: "2007", spotify: "" },
  { artist: "Various Artists", album: "Repo Man: Music from the Original Motion Picture", released: "1984", spotify: "" },
  { artist: "Various Artists", album: "A History Of Horror From Nosferatu To The Sixth Sense", released: "2000", spotify: "" },
  { artist: "Various Artists", album: "American Pie 2: Music from the Motion Picture", released: "2001", spotify: "" },
  { artist: "Various Artists", album: "Boomerang: Original Soundtrack Album", released: "1992", spotify: "" },
  { artist: "Various Artists", album: "Brain in a Box: The Science Fiction Collection", released: "2000", spotify: "" },
  { artist: "Various Artists", album: "Die You Zombie Bastards!", released: "2005", spotify: "" },
  { artist: "Various Artists", album: "Greatest Hits from Outer Space", released: "2013", spotify: "https://open.spotify.com/album/2T4AVCKpnQEWUXWuwnUouF" },
  { artist: "Various Artists", album: "House of 1000 Corpses", released: "2003", spotify: "" },
  { artist: "Various Artists", album: "Kill Her Goats", released: "2023", spotify: "" },
  { artist: "Various Artists", album: "Mark Of The Devil", released: "1970", spotify: "" },
  { artist: "Various Artists", album: "MTV Road Rules: Don't Make Me Pull This Thing Over Vol. 1", released: "2002", spotify: "" },
  { artist: "Various Artists", album: "Phantom Of The Paradise", released: "1974", spotify: "" },
  { artist: "Various Artists", album: "Psycho: The Essential Alfred Hitchcock", released: "1999", spotify: "https://open.spotify.com/album/06oG17M9wcBXRrDC3wla5D" },
  { artist: "The Bee Gees and Various Artists", album: "Saturday Night Fever", released: "1977", spotify: "https://open.spotify.com/album/3xaCKtqadm4KnviPFKEjs7" },
  { artist: "Various Artists", album: "The Devil's Rejects", released: "2005", spotify: "" },
  { artist: "Various Artists", album: "The Exorcist", released: "1973", spotify: "" },
  { artist: "Various Artists", album: "The Harder They Come", released: "1972", spotify: "https://open.spotify.com/album/4oxdKcC9epGo9viy1j8fN7" },
  { artist: "Various Artists", album: "The Return of the Living Dead", released: "1985", spotify: "" },
  { artist: "Various Artists", album: "The Rise Of The Synths (Official Companion Album) EP 1", released: "2017", spotify: "", type: "EP" },
  { artist: "Various Artists", album: "The Rocky Horror Picture Show", released: "1975", spotify: "" },
  { artist: "Various Artists", album: "This Island Earth (And Other Alien Invasion Films)", released: "2006", spotify: "" },
  { artist: "Various Artists", album: "Waiting to Exhale: Original Soundtrack Album", released: "1995", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
