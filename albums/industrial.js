/* Industrial / EBM
   ----------------
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

  { artist: ":wumpscut:", album: "Eevil Young Flesh", released: "1999", spotify: "" },
  { artist: ":wumpscut:", album: "Wreath of Barbs", released: "2001", spotify: "" },
  { artist: "Author & Punisher", album: "Krüller", released: "2022", spotify: "" },
  { artist: "Cabaret Voltaire", album: "Red Mecca", released: "1981", spotify: "" },
  { artist: "Chelsea Wolfe", album: "She Reaches Out to She Reaches Out to She", released: "2024", spotify: "" },
  { artist: "Chemlab", album: "Burn Out at the Hydrogen Bar", released: "1993", spotify: "" },
  { artist: "Chrysalide", album: "Don't Be Scared, It's About Life", released: "2011", spotify: "" },
  { artist: "Coil", album: "Horse Rotorvator", released: "1986", spotify: "", pick: true },
  { artist: "Coil", album: "Musick to Play in the Dark Vol. 1", released: "1999", spotify: "" },
  { artist: "Einstürzende Neubauten", album: "Halber Mensch", released: "1985", spotify: "" },
  { artist: "Einstürzende Neubauten", album: "Zeichnungen des Patienten O. T. (Drawings of Patient O.T.)", released: "1983", spotify: "" },
  { artist: "Fear Factory", album: "Archetype", released: "2004", spotify: "" },
  { artist: "Fear Factory", album: "Demanufacture", released: "1995", spotify: "" },
  { artist: "Front 242", album: "Front By Front", released: "1988", spotify: "https://open.spotify.com/album/0BkDxAFzIc9lWwRVGQjWid" },
  { artist: "Godflesh", album: "Streetcleaner", released: "1989", spotify: "", pick: true },
  { artist: "Haujobb", album: "Solutions for a Small Planet", released: "1996", spotify: "" },
  { artist: "Health", album: "Rat Wars", released: "2023", spotify: "" },
  { artist: "KMFDM", album: "Adios", released: "1999", spotify: "" },
  { artist: "KMFDM", album: "Angst", released: "1993", spotify: "" },
  { artist: "KMFDM", album: "Naïve", released: "1990", spotify: "" },
  { artist: "KMFDM", album: "Nihil", released: "1995", spotify: "" },
  { artist: "Lingua Ignota", album: "Caligula", released: "2019", spotify: "" },
  { artist: "Lingua Ignota", album: "Sinner Get Ready", released: "2021", spotify: "" },
  { artist: "Marilyn Manson", album: "Antichrist Superstar", released: "1996", spotify: "" },
  { artist: "Marilyn Manson", album: "Holy Wood (In the Shadow of the Valley of Death)", released: "2000", spotify: "" },
  { artist: "Marilyn Manson", album: "Mechanical Animals", released: "1998", spotify: "" },
  { artist: "Ministry", album: "Psalm 69: The Way to Succeed and the Way to Suck Eggs", released: "1992", spotify: "" },
  { artist: "Ministry", album: "The Land of Rape and Honey", released: "1988", spotify: "" },
  { artist: "Ministry", album: "The Mind Is a Terrible Thing to Taste", released: "1989", spotify: "" },
  { artist: "Nine Inch Nails", album: "Broken", released: "1992", spotify: "" },
  { artist: "Nine Inch Nails", album: "Pretty Hate Machine", released: "1989", spotify: "https://open.spotify.com/album/3umFHeEpc4yLXtrRcv9gLN" },
  { artist: "Nine Inch Nails", album: "The Downward Spiral", released: "1994", spotify: "https://open.spotify.com/album/3nJnyDV8fwFpffo0EyHQto" },
  { artist: "Nine Inch Nails", album: "The Fragile", released: "1999", spotify: "" },
  { artist: "Nitzer Ebb", album: "Belief", released: "1989", spotify: "" },
  { artist: "Nitzer Ebb", album: "That Total Age", released: "1987", spotify: "https://open.spotify.com/album/73t8cKrie06UIq26e9WsD3" },
  { artist: "NON", album: "God & Beast", released: "1997", spotify: "" },
  { artist: "Nurse with Wound", album: "Homotopy to Marie", released: "1982", spotify: "" },
  { artist: "Pulse Legion", album: "One Thing", released: "1999", spotify: "" },
  { artist: "Rammstein", album: "Völkerball", released: "2006", spotify: "", type: "Live" },
  { artist: "Skinny Puppy", album: "Too Dark Park", released: "1990", spotify: "" },
  { artist: "Skinny Puppy", album: "VIVIsectVI", released: "1988", spotify: "" },
  { artist: "Strapping Young Lad", album: "City", released: "1997", spotify: "" },
  { artist: "The Young Gods", album: "T.V. Sky", released: "1992", spotify: "" },
  { artist: "Throbbing Gristle", album: "20 Jazz Funk Greats", released: "1979", spotify: "", pick: true },
  { artist: "Throbbing Gristle", album: "Greatest Hits", released: "1981", spotify: "" },
  { artist: "Throbbing Gristle", album: "The Second Annual Report", released: "1977", spotify: "" },
  { artist: "Uniform & The Body", album: "Everything That Dies Someday Comes Back", released: "2019", spotify: "" },
  { artist: "Various Artists", album: "For Lucio Fulci: A Symphony Of Fear", released: "2025", spotify: "" },
  { artist: "VNV Nation", album: "Empires", released: "1999", spotify: "" },
  { artist: "Xorcist", album: "Insects & Angels: Differences & Indifferences", released: "2000", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
