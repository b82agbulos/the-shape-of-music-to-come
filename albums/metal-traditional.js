/* Metal › Traditional Heavy Metal / NWOBHM / Power Metal / Prog Metal
   ------------------------------------------------------------------
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

  { artist: "3 Inches of Blood", album: "Fire Up The Blades", released: "2007", spotify: "" },
  { artist: "Angel Witch", album: "Angel Witch", released: "1980", spotify: "" },
  { artist: "Apocalyptica", album: "Apocalyptica", released: "2005", spotify: "" },
  { artist: "Black Sabbath", album: "Black Sabbath", released: "1970", spotify: "https://open.spotify.com/album/4ZLy3U2q17Yjw7jkjXPJQj", pick: true },
  { artist: "Black Sabbath", album: "Heaven and Hell", released: "1980", spotify: "https://open.spotify.com/album/1VnWZ0BoPTo2El3Zqr6I8R" },
  { artist: "Black Sabbath", album: "Master of Reality", released: "1971", spotify: "https://open.spotify.com/album/7pGb2cOGVz6vLyaZaKOQ7D" },
  { artist: "Black Sabbath", album: "Paranoid", released: "1970", spotify: "https://open.spotify.com/album/6r7LZXAVueS5DqdrvXJJK7" },
  { artist: "Black Sabbath", album: "Sabotage", released: "1975", spotify: "" },
  { artist: "Black Sabbath", album: "Vol. 4", released: "1972", spotify: "" },
  { artist: "Blind Guardian", album: "Nightfall in Middle-Earth", released: "1998", spotify: "" },
  { artist: "Crimson Glory", album: "Transcendence", released: "1988", spotify: "" },
  { artist: "Danzig", album: "Danzig", released: "1988", spotify: "https://open.spotify.com/album/42qvuRV13qTc2LMVI9CqKv" },
  { artist: "Devin Townsend", album: "Ocean Machine: Biomech", released: "1997", spotify: "" },
  { artist: "Diamond Head", album: "Am I Evil", released: "1987", spotify: "" },
  { artist: "Diamond Head", album: "Lightning to the Nations", released: "1980", spotify: "" },
  { artist: "Dio", album: "Holy Diver", released: "1983", spotify: "https://open.spotify.com/album/2ivNJLSx8Rbvnsvcn01Yt3" },
  { artist: "Dokken", album: "Under Lock and Key", released: "1985", spotify: "" },
  { artist: "DragonForce", album: "Valley of the Damned", released: "2003", spotify: "" },
  { artist: "Dream Theater", album: "Awake", released: "1994", spotify: "" },
  { artist: "Fates Warning", album: "No Exit", released: "1988", spotify: "" },
  { artist: "Gamma Ray", album: "Land of the Free", released: "1995", spotify: "" },
  { artist: "Ghost", album: "Meliora", released: "2015", spotify: "" },
  { artist: "Girlschool", album: "Take a Bite", released: "1988", spotify: "" },
  { artist: "Grim Reaper", album: "See You in Hell", released: "1983", spotify: "" },
  { artist: "HammerFall", album: "Glory to the Brave", released: "1997", spotify: "" },
  { artist: "Helloween", album: "Keeper of the Seven Keys: Part I", released: "1987", spotify: "" },
  { artist: "Iced Earth", album: "Horror Show", released: "2001", spotify: "" },
  { artist: "Impaler", album: "The Gruesome Years", released: "2000", spotify: "" },
  { artist: "Iron Maiden", album: "Iron Maiden", released: "1980", spotify: "" },
  { artist: "Iron Maiden", album: "Powerslave", released: "1984", spotify: "" },
  { artist: "Iron Maiden", album: "The Number of the Beast", released: "1982", spotify: "https://open.spotify.com/album/6q5MEna6Fg46powSoeZJe3", pick: true },
  { artist: "Judas Priest", album: "British Steel", released: "1980", spotify: "https://open.spotify.com/album/5bqtZRbUZUxUps8mrO9tGY" },
  { artist: "Judas Priest", album: "Killing Machine", released: "1978", spotify: "" },
  { artist: "Judas Priest", album: "Sad Wings of Destiny", released: "1976", spotify: "", pick: true },
  { artist: "Judas Priest", album: "Screaming for Vengeance", released: "1982", spotify: "" },
  { artist: "Judas Priest", album: "Stained Class", released: "1978", spotify: "https://open.spotify.com/album/0v6FGuCgvRotTNL1KoX297" },
  { artist: "King Diamond", album: "Abigail", released: "1987", spotify: "" },
  { artist: "Leaves' Eyes", album: "Lovelorn", released: "2004", spotify: "" },
  { artist: "Mercyful Fate", album: "Don't Break the Oath", released: "1984", spotify: "" },
  { artist: "Mercyful Fate", album: "Melissa", released: "1983", spotify: "" },
  { artist: "Mötley Crüe", album: "Shout at the Devil", released: "1983", spotify: "https://open.spotify.com/album/2BCI4Oj05SiqooWWBqUqjT" },
  { artist: "Mötley Crüe", album: "Too Fast for Love", released: "1981", spotify: "https://open.spotify.com/album/6fhebW3x8DvrwbdL2aXCbo" },
  { artist: "Motörhead", album: "Ace of Spades", released: "1980", spotify: "https://open.spotify.com/album/1LORPYoTiPGpJC37GqYSvC", pick: true },
  { artist: "Motörhead", album: "No Remorse", released: "1984", spotify: "" },
  { artist: "Ozzy Osbourne", album: "Blizzard of Ozz", released: "1980", spotify: "https://open.spotify.com/album/6aGfK3YpRxZ1rJfaNRckLH" },
  { artist: "Ozzy Osbourne", album: "Diary of a Madman", released: "1981", spotify: "https://open.spotify.com/album/1nBvUZvKdqkdMF4UV8Ztbl" },
  { artist: "Pain of Salvation", album: "Entropia", released: "1997", spotify: "" },
  { artist: "Primal Fear", album: "Jaws of Death", released: "1999", spotify: "" },
  { artist: "Quartz", album: "Stand Up and Fight", released: "1980", spotify: "" },
  { artist: "Queensrÿche", album: "Operation: Mindcrime", released: "1988", spotify: "https://open.spotify.com/album/4eEQ3aNA8mptFIfbFdX79p" },
  { artist: "Quiet Riot", album: "Metal Health", released: "1983", spotify: "https://open.spotify.com/album/3Q3rQ8FK1e9Fd9Gv9xm3CK" },
  { artist: "Rainbow", album: "Rising", released: "1976", spotify: "https://open.spotify.com/album/3gsCg5XVJnAp5mLblhIUtP" },
  { artist: "Ratt", album: "Out of the Cellar", released: "1984", spotify: "https://open.spotify.com/album/6P3Fqm7z9wr5GeatpVZ5ut" },
  { artist: "Raven", album: "Wiped Out", released: "1982", spotify: "" },
  { artist: "Rush", album: "Moving Pictures", released: "1981", spotify: "https://open.spotify.com/album/2xg7iIKoSqaDNpDbJnyCjY" },
  { artist: "Samson", album: "Shock Tactics", released: "1981", spotify: "" },
  { artist: "Saxon", album: "Strong Arm of the Law", released: "1980", spotify: "" },
  { artist: "Steve Vai", album: "Passion and Warfare", released: "1990", spotify: "" },
  { artist: "Stratovarius", album: "Dreamspace", released: "1994", spotify: "" },
  { artist: "Symphony X", album: "The Divine Wings of Tragedy", released: "1996", spotify: "" },
  { artist: "Theocracy", album: "Theocracy", released: "2003", spotify: "" },
  { artist: "Tool", album: "Ænima", released: "1996", spotify: "" },
  { artist: "Tool", album: "Lateralus", released: "2001", spotify: "https://open.spotify.com/album/5l5m1hnH4punS1GQXgEi3T" },
  { artist: "Twisted Sister", album: "Stay Hungry", released: "1984", spotify: "https://open.spotify.com/album/0dzqapIToiOhULGvzDKpXm" },
  { artist: "Vintersorg", album: "The Focusing Blur", released: "2004", spotify: "" },
  { artist: "Warrant", album: "Dirty Rotten Filthy Stinking Rich", released: "1989", spotify: "https://open.spotify.com/album/1HWrP6U3m3z23H5FxFsxYS" },
  { artist: "White Lion", album: "Pride", released: "1987", spotify: "" },
  { artist: "Winger", album: "Winger", released: "1988", spotify: "https://open.spotify.com/album/4aMtQDeDMAHBfh7cE87PWo" },
  { artist: "Yngwie J. Malmsteen", album: "Rising Force", released: "1984", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
