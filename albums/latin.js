/* Latin / Global
   --------------
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

  { artist: "Bad Bunny", album: "Debí Tirar Más Fotos", released: "2025", spotify: "" },
  { artist: "Bad Bunny", album: "Un Verano Sin Ti", released: "2022", spotify: "" },
  { artist: "Bad Bunny", album: "X 100pre", released: "2018", spotify: "https://open.spotify.com/album/7CjJb2mikwAWA1V6kewFBF" },
  { artist: "Bad Bunny", album: "YHLQMDLG", released: "2020", spotify: "" },
  { artist: "Issa El Saieh", album: "Voodoo Drums In Hi-Fi", released: "1959", spotify: "" },
  { artist: "Las Ardillitas De Lalo Guerrero", album: "Las Ardillitas Vol. VI", released: "1979", spotify: "" },
  { artist: "Los Thuthanaka", album: "Los Thuthanaka", released: "2025", spotify: "" },
  { artist: "Lucrecia Dalt", album: "¡Ay!", released: "2022", spotify: "" },
  { artist: "M.I.A.", album: "Arular", released: "2005", spotify: "https://open.spotify.com/album/7CzEknt9gJwe0QC89ir1JX" },
  { artist: "M.I.A.", album: "Kala", released: "2007", spotify: "https://open.spotify.com/album/2xoj2gYed3IYmGWn3owSfu" },
  { artist: "Manu Chao", album: "Próxima Estación: Esperanza", released: "2001", spotify: "https://open.spotify.com/album/4t1LLdXiWTfoywqricztFo" },
  { artist: "Mdou Moctar", album: "Afrique Victime", released: "2021", spotify: "" },
  { artist: "Natalia Lafourcade", album: "De Todas las Flores", released: "2022", spotify: "" },
  { artist: "Natalia Lafourcade", album: "Un Canto por México, Vol. 1", released: "2020", spotify: "" },
  { artist: "Natalia Lafourcade and Los Macorinos", album: "Musas, Vol. 2", released: "2018", spotify: "" },
  { artist: "Ondatrópica", album: "Ondatrópica", released: "2012", spotify: "" },
  { artist: "Paul Simon", album: "Graceland", released: "1986", spotify: "https://open.spotify.com/album/4WoQ94qzwQj28n3nlSOVLB" },
  { artist: "Rosalía", album: "El mal querer", released: "2018", spotify: "https://open.spotify.com/album/355bjCHzRJztCzaG5Za4gq" },
  { artist: "Rosalía", album: "Los Ángeles", released: "2017", spotify: "https://open.spotify.com/album/7mGsUwMuhsKiOKx9X9k7tj" },
  { artist: "Rosalía", album: "Motomami", released: "2022", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
