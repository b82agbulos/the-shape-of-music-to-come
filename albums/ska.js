/* Ska / 2-Tone / Ska-Punk
   -----------------------
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

  { artist: "Against All Authority", album: "All Fall Down", released: "1998", spotify: "" },
  { artist: "Area-7", album: "Say It to My Face", released: "2001", spotify: "" },
  { artist: "Assorted Jelly Beans", album: "Assorted Jelly Beans", released: "1996", spotify: "" },
  { artist: "Bad Manners", album: "Gosh It's... Bad Manners", released: "1981", spotify: "" },
  { artist: "Big D and the Kids Table", album: "Good Luck", released: "1999", spotify: "" },
  { artist: "Bim Skala Bim", album: "Bones", released: "1991", spotify: "" },
  { artist: "Blue Meanies", album: "Full Throttle", released: "1997", spotify: "" },
  { artist: "Blue Meanies", album: "Kiss Your Ass Goodbye", released: "1995", spotify: "" },
  { artist: "Buck-O-Nine", album: "Barfly", released: "1995", spotify: "" },
  { artist: "Catch 22", album: "Keasbey Nights", released: "1998", spotify: "" },
  { artist: "Choking Victim", album: "No Gods / No Managers", released: "1999", spotify: "" },
  { artist: "Citizen Fish", album: "Flinch", released: "1993", spotify: "" },
  { artist: "Culture Shock", album: "Onwards & Upwards", released: "1988", spotify: "" },
  { artist: "Dance Hall Crashers", album: "The Old Record (1989-1992)", released: "1996", spotify: "" },
  { artist: "Edna's Goldfish", album: "Before You Knew Better", released: "1998", spotify: "" },
  { artist: "Edna's Goldfish", album: "The Elements of Transition", released: "1999", spotify: "" },
  { artist: "Fishbone", album: "Fishbone", released: "1985", spotify: "" },
  { artist: "Fishbone", album: "Truth and Soul", released: "1988", spotify: "" },
  { artist: "Five Iron Frenzy", album: "Our Newest Album Ever!", released: "1997", spotify: "" },
  { artist: "Goldfinger", album: "Hang-Ups", released: "1997", spotify: "" },
  { artist: "Hepcat", album: "Right on Time", released: "1998", spotify: "" },
  { artist: "Jeffries Fan Club", album: "Nothing to Prove", released: "1998", spotify: "" },
  { artist: "Laurel Aitken", album: "Ska with Laurel", released: "1965", spotify: "" },
  { artist: "Le Grand Miercoles", album: "Ghost Cowboys", released: "2014", spotify: "" },
  { artist: "Leftöver Crack", album: "Fuck World Trade", released: "2004", spotify: "" },
  { artist: "Less Than Jake", album: "Hello Rockview", released: "1998", spotify: "", pick: true },
  { artist: "Less Than Jake", album: "Losing Streak", released: "1996", spotify: "" },
  { artist: "Less Than Jake", album: "Pezcore", released: "1995", spotify: "" },
  { artist: "Let's Go Bowling", album: "Music to Bowl By", released: "1991", spotify: "" },
  { artist: "Link 80", album: "17 Reasons", released: "1997", spotify: "" },
  { artist: "Los Fabulosos Cadillacs", album: "Vasos Vacíos", released: "1993", spotify: "" },
  { artist: "Mad Caddies", album: "Duck and Cover", released: "1998", spotify: "" },
  { artist: "Madness", album: "One Step Beyond…", released: "1979", spotify: "" },
  { artist: "Mephiskapheles", album: "God Bless Satan", released: "1994", spotify: "" },
  { artist: "MU330", album: "Crab Rangoon", released: "1997", spotify: "" },
  { artist: "MU330", album: "Ultra Panic", released: "2002", spotify: "" },
  { artist: "Mustard Plug", album: "Big Daddy Multitude", released: "1993", spotify: "" },
  { artist: "Mustard Plug", album: "Evildoers Beware!", released: "1997", spotify: "" },
  { artist: "Nancy Vandal", album: "Bikini High Pool Massacre Part 3: Who Invited the Undead?", released: "1998", spotify: "" },
  { artist: "No Doubt", album: "The Beacon Street Collection", released: "1995", spotify: "" },
  { artist: "No Doubt", album: "Tragic Kingdom", released: "1995", spotify: "https://open.spotify.com/album/3VekjWskUut57hx6W9wqL8" },
  { artist: "Operation Ivy", album: "Energy", released: "1989", spotify: "", pick: true },
  { artist: "Operation Ivy", album: "Operation Ivy", released: "1991", spotify: "" },
  { artist: "Panteón Rococó", album: "A la Izquierda de la Tierra", released: "1999", spotify: "" },
  { artist: "Pilfers", album: "Pilfers", released: "1998", spotify: "" },
  { artist: "Prince Buster", album: "Fly Flying Ska", released: "1964", spotify: "" },
  { artist: "Reel Big Fish", album: "Everything Sucks", released: "1995", spotify: "" },
  { artist: "Reel Big Fish", album: "Turn the Radio Off", released: "1996", spotify: "" },
  { artist: "Reel Big Fish", album: "Why Do They Rock So Hard?", released: "1998", spotify: "" },
  { artist: "Rx Bandits", album: "Progress", released: "2001", spotify: "" },
  { artist: "Save Ferris", album: "It Means Everything", released: "1997", spotify: "" },
  { artist: "Skankin' Pickle", album: "Sing Along with Skankin' Pickle", released: "1994", spotify: "" },
  { artist: "Skinnerbox", album: "What You Can Do, What You Can't", released: "1997", spotify: "" },
  { artist: "Slapstick", album: "Lookit!", released: "1996", spotify: "" },
  { artist: "Slapstick", album: "Slapstick", released: "1997", spotify: "" },
  { artist: "Slow Gherkin", album: "Shed Some Skin", released: "1998", spotify: "" },
  { artist: "Spring Heeled Jack", album: "Songs from Suburbia", released: "1998", spotify: "" },
  { artist: "Sublime", album: "40oz. to Freedom", released: "1992", spotify: "https://open.spotify.com/album/0vuwlanMPucXrYMGnOjhYL" },
  { artist: "Sublime", album: "Sublime", released: "1996", spotify: "https://open.spotify.com/album/14eK347GdWO4mBBx78tsut" },
  { artist: "Suburban Rhythm", album: "Suburban Rhythm", released: "1997", spotify: "" },
  { artist: "The Aquabats", album: "The Fury of the Aquabats!", released: "1997", spotify: "" },
  { artist: "The Arrogant Sons of Bitches", album: "Three Cheers for Disappointment", released: "2006", spotify: "" },
  { artist: "The Beat", album: "I Just Can't Stop It", released: "1980", spotify: "https://open.spotify.com/album/08zjJfP4f6cXGxscvztbvh", pick: true },
  { artist: "The Chinkees", album: "The Chinkees Are Coming", released: "1998", spotify: "" },
  { artist: "The Gadjits", album: "At Ease", released: "1998", spotify: "" },
  { artist: "The Hippos", album: "Forget the World", released: "1998", spotify: "" },
  { artist: "The Hippos", album: "Heads Are Gonna Roll", released: "1999", spotify: "" },
  { artist: "The Impossibles", album: "Anthology '94–'98", released: "1999", spotify: "" },
  { artist: "The Impossibles", album: "The Impossibles", released: "1997", spotify: "" },
  { artist: "The Mighty Mighty Bosstones", album: "Don't Know How to Party", released: "1993", spotify: "" },
  { artist: "The Mighty Mighty Bosstones", album: "Let's Face It", released: "1997", spotify: "" },
  { artist: "The Mighty Mighty Bosstones", album: "Question the Answers", released: "1994", spotify: "" },
  { artist: "The Pietasters", album: "Oolooloo", released: "1995", spotify: "" },
  { artist: "The Pietasters", album: "Willis", released: "1997", spotify: "" },
  { artist: "The Planet Smashers", album: "Life of the Party", released: "1999", spotify: "" },
  { artist: "The Porkers", album: "Time Will Tell", released: "2000", spotify: "" },
  { artist: "The Scofflaws", album: "The Scofflaws", released: "1991", spotify: "" },
  { artist: "The Selecter", album: "Celebrate the Bullet", released: "1981", spotify: "" },
  { artist: "The Selecter", album: "Too Much Pressure", released: "1980", spotify: "" },
  { artist: "The Skatalites", album: "Hi-Bop Ska", released: "1994", spotify: "" },
  { artist: "The Slackers", album: "The Question", released: "1998", spotify: "" },
  { artist: "The Slackers", album: "Wasted Days", released: "2001", spotify: "" },
  { artist: "The Smooths", album: "Very Own Vegas", released: "1996", spotify: "" },
  { artist: "The Specials", album: "The Specials", released: "1979", spotify: "", pick: true },
  { artist: "The Suicide Machines", album: "Destruction by Definition", released: "1996", spotify: "" },
  { artist: "The Toasters", album: "Skaboom!", released: "1987", spotify: "" },
  { artist: "The Untouchables", album: "Live and Let Dance", released: "1984", spotify: "" },
  { artist: "The Wailers", album: "The Wailing Wailers", released: "1965", spotify: "" },
  { artist: "Voodoo Glow Skulls", album: "Baile de Los Locos", released: "1997", spotify: "" },
  { artist: "Voodoo Glow Skulls", album: "Firme", released: "1995", spotify: "" },
  { artist: "Voodoo Glow Skulls", album: "Who Is, This Is?", released: "1993", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
