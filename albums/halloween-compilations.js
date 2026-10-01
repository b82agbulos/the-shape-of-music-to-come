/* Halloween › Compilations
   ------------------------
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

  { artist: "Various Artists", album: "100 Hits: Halloween", released: "2009", spotify: "" },
  { artist: "Various Artists", album: "30's & 40's Era Halloween Vol. 1", released: "2012", spotify: "" },
  { artist: "Various Artists", album: "30's & 40's Era Halloween Vol. 2", released: "2012", spotify: "" },
  { artist: "Various Artists", album: "60's Groovy Freaks, Monsters & Geeks", released: "2010", spotify: "" },
  { artist: "Various Artists", album: "Beware! Insects And Spiders!", released: "2023", spotify: "" },
  { artist: "Various Artists", album: "Blues, Blues, Hoodoo, Halloween: Scary Blues & Jazz 1925 to 1961", released: "2014", spotify: "" },
  { artist: "Various Artists", album: "Bomp in the Night!", released: "2006", spotify: "" },
  { artist: "Various Artists", album: "DooWop Halloween Is a Scream", released: "2005", spotify: "" },
  { artist: "Various Artists", album: "Dr. Demento Presents: Spooky Tunes & Scary Melodies", released: "1994", spotify: "" },
  { artist: "Various Artists", album: "Elvira Presents Vinyl Macabre - Oldies But Ghoulies (Vol. 1)", released: "1983", spotify: "" },
  { artist: "Various Artists", album: "Elvira's Gravest Hits", released: "2010", spotify: "" },
  { artist: "Various Artists", album: "Family Scarytime Classics", released: "1995", spotify: "" },
  { artist: "Various Artists", album: "Freaks Come Out At Night", released: "1998", spotify: "" },
  { artist: "Various Artists", album: "Garage Band Halloween Vol. 1", released: "2008", spotify: "" },
  { artist: "Various Artists", album: "Garage Band Halloween Vol. 2", released: "", spotify: "" },
  { artist: "Various Artists", album: "Ghastly Grooves", released: "1994", spotify: "" },
  { artist: "Various Artists", album: "Ghoul-Arama", released: "2001", spotify: "" },
  { artist: "Various Artists", album: "Greatest Ever! Halloween: The Definitive Collection", released: "2014", spotify: "" },
  { artist: "Various Artists", album: "Halloween a Go-Go", released: "2006", spotify: "https://open.spotify.com/album/3NQ3sZpQpWmjKu5r7Ki7b4" },
  { artist: "Various Artists", album: "Halloween Bash!", released: "2011", spotify: "https://open.spotify.com/album/2YgBxVcxqpeftgz5Ml8oPX" },
  { artist: "Various Artists", album: "Halloween Classics", released: "", spotify: "" },
  { artist: "Various Artists", album: "Halloween Classics - Evil, The Demented, And The Just Plain Weird", released: "2007", spotify: "https://open.spotify.com/album/1enJF32QND9fX6rOMl7wWI" },
  { artist: "Various Artists", album: "Halloween Classics: Songs That Scared The Bloomers Off Your Great Grandma", released: "2007", spotify: "" },
  { artist: "Various Artists", album: "Halloween Fright Nite", released: "2007", spotify: "" },
  { artist: "Various Artists", album: "Halloween Garage Blues", released: "2017", spotify: "" },
  { artist: "Various Artists", album: "Halloween Garage Rock", released: "2009", spotify: "https://open.spotify.com/album/15xcNHSYqHZYL3cfzaqoLa" },
  { artist: "Various Artists", album: "Halloween Hits", released: "1991", spotify: "" },
  { artist: "Various Artists", album: "Halloween Hootenanny", released: "1998", spotify: "" },
  { artist: "Various Artists", album: "Halloween Horror Show", released: "2008", spotify: "" },
  { artist: "Various Artists", album: "Halloween Jam", released: "", spotify: "" },
  { artist: "Various Artists", album: "Halloween Nuggets: Monster Sixties A Go-Go", released: "2014", spotify: "" },
  { artist: "Various Artists", album: "Halloween Nuggets: Haunted Underground Classics", released: "2022", spotify: "" },
  { artist: "Various Artists", album: "Halloween Party - 16 Scary Songs", released: "2009", spotify: "" },
  { artist: "Various Artists", album: "Halloween Party Hits", released: "2008", spotify: "" },
  { artist: "Various Artists", album: "Halloween Party Monster Mix", released: "2013", spotify: "" },
  { artist: "Various Artists", album: "Halloween Scary Tales", released: "2009", spotify: "" },
  { artist: "Various Artists", album: "Halloween Spooktacular", released: "2013", spotify: "" },
  { artist: "Various Artists", album: "Halloween Stomp", released: "1990", spotify: "" },
  { artist: "Various Artists", album: "Halloween's Gravest Hits [CD]", released: "2009", spotify: "https://open.spotify.com/album/0ZdHRjaJnoHDbYhPLBhv1U" },
  { artist: "Various Artists", album: "Halloween's Gravest Hits [Digital]", released: "2009", spotify: "" },
  { artist: "Various Artists", album: "Happy Horror Halloween", released: "", spotify: "" },
  { artist: "Various Artists", album: "Haunted Hits", released: "1988", spotify: "" },
  { artist: "Various Artists", album: "Haunted Hits - An Hour of Scary Songs & Sounds", released: "1996", spotify: "" },
  { artist: "Various Artists", album: "Haunted Motel", released: "1989", spotify: "https://open.spotify.com/album/4Kpv080Rd8skIg6yNgXKMA" },
  { artist: "Various Artists", album: "Haunting Halloween", released: "2012", spotify: "" },
  { artist: "Various Artists", album: "Have a Howlin' Halloween", released: "1997", spotify: "" },
  { artist: "Various Artists", album: "Hipster Halloween", released: "2011", spotify: "https://open.spotify.com/album/6dnVbQeZbGMV0i1t8tnbhi" },
  { artist: "Various Artists", album: "Horror Hop", released: "1994", spotify: "https://open.spotify.com/album/6YN45Iptj5KK0tjEuGWPxB" },
  { artist: "Various Artists", album: "Horror Rock Classics Vol. I", released: "1983", spotify: "" },
  { artist: "Various Artists", album: "Horror Rock Classics Vol. II", released: "1983", spotify: "" },
  { artist: "Various Artists", album: "If The Broom Fits, Ride It!", released: "2014", spotify: "" },
  { artist: "Various Artists", album: "Love At First Bite - Halloween Hits!", released: "2013", spotify: "https://open.spotify.com/album/0pidRwGTvVNfUXlTJ8NFFa" },
  { artist: "Various Artists", album: "Mondo Zombie Boogaloo", released: "2013", spotify: "" },
  { artist: "Various Artists", album: "Monster Bop", released: "1994", spotify: "" },
  { artist: "Various Artists", album: "Monster Halloween Hits", released: "2010", spotify: "https://open.spotify.com/album/3oWoad5DgU9ONRFpDsHKCQ" },
  { artist: "Various Artists", album: "Monster Hits", released: "1994", spotify: "" },
  { artist: "Various Artists", album: "Monster Party 2000 (Digital Version)", released: "2000", spotify: "https://open.spotify.com/album/3pFOPHhulkkfxaP87XvOiI" },
  { artist: "Various Artists", album: "Monster Rock 'N Roll Show", released: "1990", spotify: "" },
  { artist: "Various Artists", album: "Monster Sounds and 'Boppin' Tracks", released: "", spotify: "" },
  { artist: "Various Artists", album: "Monsters, Ghouls, Goblins & Demons: The Essential Halloween Party Collection", released: "1999", spotify: "" },
  { artist: "Various Artists", album: "Monsters, Vampires, Voodoos & Spooks - 33 Slabs of Undead Rock 'N' Roll", released: "2017", spotify: "" },
  { artist: "Various Artists", album: "Monstroville - Haunted Beach Party", released: "2017", spotify: "" },
  { artist: "Various Artists", album: "More Halloween Nuggets", released: "2023", spotify: "https://open.spotify.com/album/6i0K9AVdiAf5tUHkkEprjE" },
  { artist: "Various Artists", album: "Mostly Ghostly - More Horror For Halloween", released: "2010", spotify: "" },
  { artist: "Various Artists", album: "New Wave Halloween", released: "", spotify: "" },
  { artist: "Various Artists", album: "NOW That's What I Call Halloween", released: "2015", spotify: "" },
  { artist: "Various Artists", album: "Old Halloween Songs", released: "2011", spotify: "https://open.spotify.com/album/2ddZQiCaSSc3Qv73DJkoyZ" },
  { artist: "Various Artists", album: "Punk Rock Halloween - Loud, Fast & Scary! Vol I", released: "2017", spotify: "" },
  { artist: "Various Artists", album: "Return Of Halloween Nuggets", released: "2024", spotify: "" },
  { artist: "Various Artists", album: "Revenge of the Monster Hits", released: "1995", spotify: "" },
  { artist: "Various Artists", album: "Rockin Bones", released: "2008", spotify: "https://open.spotify.com/album/2cmb03nVcRNIQtrof8zk1J" },
  { artist: "Various Artists", album: "Rockin' Nightmares", released: "", spotify: "" },
  { artist: "Various Artists", album: "Screamers", released: "", spotify: "" },
  { artist: "Various Artists", album: "Songs for Swinging Ghosts", released: "2015", spotify: "" },
  { artist: "Various Artists", album: "Spook Party", released: "", spotify: "" },
  { artist: "Various Artists", album: "Spooky Halloween Hits", released: "2012", spotify: "" },
  { artist: "Various Artists", album: "Spooky Halloween Hits", released: "2022", spotify: "https://open.spotify.com/album/2c3LBDNnptvWquptllUuyq" },
  { artist: "Various Artists", album: "The Best of Halloween", released: "2013", spotify: "" },
  { artist: "Various Artists", album: "The Best of Horror", released: "2014", spotify: "" },
  { artist: "Various Artists", album: "The House Of Horrors", released: "2024", spotify: "" },
  { artist: "Various Artists", album: "The Little Box of Halloween: I'm Going Slightly Mad: Music from the Dark Side of the Mind", released: "2015", spotify: "" },
  { artist: "Various Artists", album: "The Little Box of Halloween: The Zombie Horror CD Collection", released: "2015", spotify: "" },
  { artist: "Various Artists", album: "The Monster Mash Rock 'N' Roll Party", released: "", spotify: "" },
  { artist: "Various Artists", album: "The Party Mix - Halloween", released: "", spotify: "" },
  { artist: "Various Artists", album: "The Shadow Knows More: 35 Scary Tales From The Vaults Of Horror", released: "", spotify: "" },
  { artist: "Various Artists", album: "The Shadow Knows: 34 Scary Tales From The Vaults Of Horror", released: "2018", spotify: "" },
  { artist: "Various Artists", album: "The Spooky Swingin' Sounds of Kreepsville Manor", released: "", spotify: "" },
  { artist: "Various Artists", album: "The Ultimate Rockin: Halloween Party", released: "2009", spotify: "" },
  { artist: "Various Artists", album: "The Very Best Of Trash Horror", released: "", spotify: "" },
  { artist: "Various Artists", album: "The Zombie Horror CD Collection", released: "2010", spotify: "" },
  { artist: "Various Artists", album: "These Ghoulish Things: Horror Hits for Halloween", released: "2005", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
