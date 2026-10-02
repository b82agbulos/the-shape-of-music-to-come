/* Metal › Black Metal / Atmospheric Black Metal / Post-Black Metal
   ----------------------------------------------------------------
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

  { artist: "Agalloch", album: "Ashes Against the Grain", released: "2006", spotify: "" },
  { artist: "Agalloch", album: "Marrow of the Spirit", released: "2010", spotify: "" },
  { artist: "Agalloch", album: "The Mantle", released: "2002", spotify: "" },
  { artist: "Alcest", album: "Le secret", released: "2005", spotify: "" },
  { artist: "Altar of Plagues", album: "Teethed Glory and Injury", released: "2013", spotify: "" },
  { artist: "Arcturus", album: "The Sham Mirrors", released: "2002", spotify: "" },
  { artist: "Bathory", album: "Bathory", released: "1984", spotify: "" },
  { artist: "Bathory", album: "Blood Fire Death", released: "1988", spotify: "" },
  { artist: "Bathory", album: "The Return……", released: "1985", spotify: "" },
  { artist: "Bathory", album: "Under the Sign of the Black Mark", released: "1987", spotify: "" },
  { artist: "Behemoth", album: "The Satanist", released: "2014", spotify: "" },
  { artist: "Beherit", album: "Drawing Down the Moon", released: "1993", spotify: "" },
  { artist: "Blut Aus Nord", album: "The Work Which Transforms God", released: "2003", spotify: "" },
  { artist: "Burzum", album: "Filosofem", released: "1996", spotify: "" },
  { artist: "Burzum", album: "Hvis lyset tar oss", released: "1994", spotify: "" },
  { artist: "Castevet", album: "Mounds of Ash", released: "2010", spotify: "" },
  { artist: "Celtic Frost", album: "Morbid Tales", released: "1984", spotify: "" },
  { artist: "Celtic Frost", album: "To Mega Therion", released: "1985", spotify: "" },
  { artist: "Cradle of Filth", album: "Dusk... and Her Embrace", released: "1996", spotify: "" },
  { artist: "Cradle Of Filth", album: "Midian", released: "2000", spotify: "" },
  { artist: "Cruachan", album: "Folk-Lore", released: "2002", spotify: "" },
  { artist: "Dark Funeral", album: "Vobiscum Satanas", released: "1998", spotify: "" },
  { artist: "Darkthrone", album: "A Blaze in the Northern Sky", released: "1992", spotify: "", pick: true },
  { artist: "Darkthrone", album: "Soulside Journey", released: "1991", spotify: "" },
  { artist: "Darkthrone", album: "Transilvanian Hunger", released: "1994", spotify: "" },
  { artist: "Darkthrone", album: "Under A Funeral Moon", released: "1993", spotify: "" },
  { artist: "Deafheaven", album: "Sunbather", released: "2013", spotify: "" },
  { artist: "Dimmu Borgir", album: "Enthrone Darkness Triumphant", released: "1997", spotify: "" },
  { artist: "Emperor", album: "Anthems to the Welkin at Dusk", released: "1997", spotify: "" },
  { artist: "Emperor", album: "In the Nightside Eclipse", released: "1994", spotify: "", pick: true },
  { artist: "Enslaved", album: "Frost", released: "1994", spotify: "" },
  { artist: "Enslaved", album: "Isa", released: "2004", spotify: "" },
  { artist: "Enslaved", album: "Vertebrae", released: "2008", spotify: "" },
  { artist: "Geasa", album: "Angel's Cry", released: "1999", spotify: "" },
  { artist: "Gorgoroth", album: "Under the Sign of Hell", released: "1997", spotify: "" },
  { artist: "Immortal", album: "At the Heart of Winter", released: "1999", spotify: "" },
  { artist: "Immortal", album: "Battles in the North", released: "1995", spotify: "" },
  { artist: "Immortal", album: "Pure Holocaust", released: "1993", spotify: "" },
  { artist: "Imperial Triumphant", album: "Goldstar", released: "2025", spotify: "" },
  { artist: "Kyūketsuki", album: "Nightmare Detective", released: "2025", spotify: "" },
  { artist: "Liturgy", album: "93696", released: "2023", spotify: "" },
  { artist: "Liturgy", album: "Aesthethica", released: "2011", spotify: "" },
  { artist: "Liturgy", album: "H.A.Q.Q.", released: "2019", spotify: "" },
  { artist: "Marduk", album: "Heaven Shall Burn... When We Are Gathered", released: "1996", spotify: "" },
  { artist: "Marduk", album: "Opus Nocturne", released: "1994", spotify: "" },
  { artist: "Mayhem", album: "De Mysteriis Dom Sathanas", released: "1994", spotify: "", pick: true },
  { artist: "Mayhem", album: "Grand Declaration of War", released: "2000", spotify: "" },
  { artist: "Mayhem", album: "Live in Leipzig", released: "1993", spotify: "", type: "Live" },
  { artist: "Myrkur", album: "M", released: "2015", spotify: "" },
  { artist: "Nachtmystium", album: "Assassins: Black Meddle, Part 1", released: "2008", spotify: "" },
  { artist: "Negură Bunget", album: "OM", released: "2006", spotify: "" },
  { artist: "Osculum Serpentis", album: "The Streams of Sorrow", released: "2025", spotify: "" },
  { artist: "Panopticon", album: "Roads to the North", released: "2014", spotify: "" },
  { artist: "Peccatum", album: "Lost in Reverie", released: "2004", spotify: "" },
  { artist: "Profanatica", album: "Disgusting Blasphemies Against God", released: "2010", spotify: "" },
  { artist: "Ritualmord", album: "This Is Not Lifelover", released: "2025", spotify: "" },
  { artist: "Rotting Christ", album: "A Dead Poem", released: "1997", spotify: "" },
  { artist: "Samael", album: "Passage", released: "1996", spotify: "" },
  { artist: "Satyricon", album: "Nemesis Divina", released: "1996", spotify: "" },
  { artist: "Satyricon", album: "The Shadowthrone", released: "1994", spotify: "" },
  { artist: "Theatre Of The Macabre", album: "A Paradise In Flesh & Blood", released: "2000", spotify: "" },
  { artist: "Ulver", album: "Bergtatt – Et eeventyr i 5 capitler", released: "1995", spotify: "" },
  { artist: "Vattnet Viskar", album: "Settler", released: "2015", spotify: "" },
  { artist: "Venom", album: "Black Metal", released: "1982", spotify: "" },
  { artist: "Venom", album: "Welcome to Hell", released: "1981", spotify: "" },
  { artist: "Waylander", album: "Reawakening Pride Once Lost", released: "1998", spotify: "" },
  { artist: "Weakling", album: "Dead as Dreams", released: "2000", spotify: "" },
  { artist: "Wolves in the Throne Room", album: "Celestial Lineage", released: "2011", spotify: "" },
  { artist: "Wolves in the Throne Room", album: "Two Hunters", released: "2007", spotify: "" },
  { artist: "Xasthur", album: "Disharmonic Variations", released: "2024", spotify: "" },
  { artist: "Xasthur", album: "Nocturnal Poisoning", released: "2002", spotify: "" },
  { artist: "Xasthur", album: "Subliminal Genocide", released: "2006", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
