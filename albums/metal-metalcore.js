/* Metal › Metalcore / Mathcore
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

  { artist: "All That Remains", album: "This Darkened Heart", released: "2004", spotify: "" },
  { artist: "As I Lay Dying", album: "Frail Words Collapse", released: "2003", spotify: "" },
  { artist: "Atreyu", album: "The Curse", released: "2004", spotify: "" },
  { artist: "Avenged Sevenfold", album: "Waking the Fallen", released: "2003", spotify: "" },
  { artist: "Between the Buried and Me", album: "Colors", released: "2007", spotify: "" },
  { artist: "Botch", album: "We Are the Romans", released: "1999", spotify: "" },
  { artist: "Bullet for My Valentine", album: "The Poison", released: "2005", spotify: "https://open.spotify.com/album/7zU9hmH9CKQ9Yf5SruqOLM" },
  { artist: "Code Orange", album: "Underneath", released: "2020", spotify: "https://open.spotify.com/album/7cbeno84CZdxj4USU23gjm" },
  { artist: "Converge", album: "Jane Doe", released: "2001", spotify: "" },
  { artist: "Earth Crisis", album: "Destroy the Machines", released: "1995", spotify: "" },
  { artist: "Hatebreed", album: "Perseverance", released: "2002", spotify: "" },
  { artist: "Killswitch Engage", album: "Alive or Just Breathing", released: "2002", spotify: "" },
  { artist: "Killswitch Engage", album: "The End of Heartache", released: "2004", spotify: "" },
  { artist: "Knocked Loose", album: "You Won't Go Before You're Supposed To", released: "2024", spotify: "" },
  { artist: "Overcast", album: "Reborn to Kill Again", released: "2008", spotify: "" },
  { artist: "Poison the Well", album: "Tear from the Red", released: "2002", spotify: "" },
  { artist: "Shadows Fall", album: "The Art of Balance", released: "2002", spotify: "" },
  { artist: "Shai Hulud", album: "Hearts Once Nourished with Hope and Compassion", released: "1997", spotify: "" },
  { artist: "The Devil Wears Prada", album: "Zombie", released: "2010", spotify: "" },
  { artist: "The Dillinger Escape Plan", album: "Miss Machine", released: "2004", spotify: "" },
  { artist: "Trivium", album: "Ascendancy", released: "2005", spotify: "" },
  { artist: "Will Haven", album: "El Diablo", released: "1997", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
