/* Punk Rock / Hardcore Punk / Post-Hardcore › Hardcore Punk / Post-Hardcore
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

  { artist: "7 Seconds", album: "Walk Together, Rock Together", released: "1985", spotify: "" },
  { artist: "AFI", album: "All Hallow's EP", released: "1999", spotify: "", type: "EP" },
  { artist: "AFI", album: "Black Sails in the Sunset", released: "1999", spotify: "" },
  { artist: "AFI", album: "The Art of Drowning", released: "2000", spotify: "" },
  { artist: "Agnostic Front", album: "United Blood", released: "1983", spotify: "" },
  { artist: "Agnostic Front", album: "Victim in Pain", released: "1984", spotify: "" },
  { artist: "Amebix", album: "Arise!", released: "1985", spotify: "" },
  { artist: "Avail", album: "4am Friday", released: "1996", spotify: "" },
  { artist: "Bad Brains", album: "Bad Brains", released: "1982", spotify: "" },
  { artist: "Bad Brains", album: "Rock for Light", released: "1983", spotify: "" },
  { artist: "Black Flag", album: "Damaged", released: "1981", spotify: "https://open.spotify.com/album/34aFnrFRBlErcbU6moRZR3" },
  { artist: "Charged GBH", album: "City Baby Attacked by Rats", released: "1982", spotify: "" },
  { artist: "Charged GBH", album: "Leather, Bristles, Studs and Acne", released: "1981", spotify: "" },
  { artist: "Circle Jerks", album: "Group Sex", released: "1980", spotify: "" },
  { artist: "Conflict", album: "The Ungovernable Force", released: "1986", spotify: "" },
  { artist: "Crass", album: "Christ – The Album", released: "1982", spotify: "" },
  { artist: "Crass", album: "Stations of the Crass", released: "1979", spotify: "" },
  { artist: "Crass", album: "The Feeding of the 5000", released: "1978", spotify: "" },
  { artist: "Cro-Mags", album: "The Age of Quarrel", released: "1986", spotify: "" },
  { artist: "Crumbsuckers", album: "Life of Dreams", released: "1986", spotify: "" },
  { artist: "D.R.I.", album: "Dealing with It!", released: "1985", spotify: "" },
  { artist: "Dag Nasty", album: "Wig Out At Denkos", released: "1987", spotify: "" },
  { artist: "Dead Kennedys", album: "Bedtime for Democracy", released: "1986", spotify: "" },
  { artist: "Dead Kennedys", album: "Fresh Fruit for Rotting Vegetables", released: "1980", spotify: "" },
  { artist: "Dead Kennedys", album: "Give Me Convenience or Give Me Death", released: "1987", spotify: "" },
  { artist: "Dead Kennedys", album: "Plastic Surgery Disasters", released: "1982", spotify: "" },
  { artist: "Descendents", album: "Milo Goes to College", released: "1982", spotify: "" },
  { artist: "Discharge", album: "Hear Nothing See Nothing Say Nothing", released: "1982", spotify: "" },
  { artist: "Fear", album: "The Record", released: "1982", spotify: "" },
  { artist: "Final Conflict", album: "Ashes To Ashes", released: "1988", spotify: "" },
  { artist: "Folly", album: "Insanity Later", released: "2004", spotify: "" },
  { artist: "Fucked Up", album: "The Chemistry of Common Life", released: "2008", spotify: "" },
  { artist: "Fugazi", album: "13 Songs", released: "1990", spotify: "" },
  { artist: "Fugazi", album: "Repeater", released: "1990", spotify: "" },
  { artist: "Germs", album: "GI", released: "1979", spotify: "" },
  { artist: "Germs", album: "Germs (M.I.A.): The Complete Anthology", released: "1993", spotify: "" },
  { artist: "Gorilla Biscuits", album: "Start Today", released: "1989", spotify: "" },
  { artist: "Hüsker Dü", album: "New Day Rising", released: "1985", spotify: "https://open.spotify.com/album/2eOu9QDLP2MoO04ZtII2Vm" },
  { artist: "Hüsker Dü", album: "Zen Arcade", released: "1984", spotify: "" },
  { artist: "Jawbreaker", album: "24 Hour Revenge Therapy", released: "1994", spotify: "" },
  { artist: "La Dispute", album: "Wildlife", released: "2011", spotify: "" },
  { artist: "Les Savy Fav", album: "Emor: Rome Upside Down", released: "2000", spotify: "" },
  { artist: "MDC", album: "Millions of Dead Cops", released: "1982", spotify: "" },
  { artist: "Minor Threat", album: "Complete Discography", released: "1990", spotify: "" },
  { artist: "Minor Threat", album: "Minor Threat", released: "1984", spotify: "" },
  { artist: "Minor Threat", album: "Out of Step", released: "1983", spotify: "" },
  { artist: "Minutemen", album: "Double Nickels on the Dime", released: "1984", spotify: "https://open.spotify.com/album/5viZ5HyYtV0wafK7DoXmgF" },
  { artist: "Nation of Ulysses", album: "Plays Pretty for Baby", released: "1992", spotify: "" },
  { artist: "Pennywise", album: "About Time", released: "1995", spotify: "" },
  { artist: "Poison Idea", album: "Feel the Darkness", released: "1990", spotify: "" },
  { artist: "Quicksand", album: "Manic Compression", released: "1995", spotify: "" },
  { artist: "Raw Power", album: "Screams from the Gutter", released: "1984", spotify: "" },
  { artist: "Refused", album: "The Shape of Punk to Come", released: "1998", spotify: "" },
  { artist: "Rites of Spring", album: "Rites of Spring", released: "1985", spotify: "" },
  { artist: "Rudimentary Peni", album: "Death Church", released: "1983", spotify: "" },
  { artist: "Septic Death", album: "Now That I Have The Attention What Do I Do With It?", released: "1986", spotify: "" },
  { artist: "Sick of It All", album: "Blood, Sweat, and No Tears", released: "1989", spotify: "" },
  { artist: "Siege", album: "Drop Dead", released: "1984", spotify: "" },
  { artist: "SNFU", album: "...And No One Else Wanted To Play", released: "1985", spotify: "" },
  { artist: "Soul Glo", album: "Diaspora Problems", released: "2022", spotify: "" },
  { artist: "Subhumans", album: "From the Cradle to the Grave", released: "1984", spotify: "" },
  { artist: "Subhumans", album: "The Day the Country Died", released: "1982", spotify: "" },
  { artist: "Suicidal Tendencies", album: "Suicidal Tendencies", released: "1983", spotify: "" },
  { artist: "The Exploited", album: "Punks Not Dead", released: "1981", spotify: "" },
  { artist: "The Exploited", album: "Troops of Tomorrow", released: "1982", spotify: "" },
  { artist: "The Get Up Kids", album: "Something to Write Home About", released: "1999", spotify: "" },
  { artist: "Throw Bricks At Coppers", album: "How Many More Brutal Fucking Police Murders?", released: "1998", spotify: "" },
  { artist: "Thursday", album: "War All the Time", released: "2003", spotify: "" },
  { artist: "Turnstile", album: "Glow On", released: "2021", spotify: "" },
  { artist: "Youth Brigade", album: "Sink with Kalifornija", released: "1994", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
