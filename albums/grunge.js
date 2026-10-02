/* Grunge / 90s Alt. Rock
   ----------------------
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

  { artist: "Alanis Morissette", album: "Jagged Little Pill", released: "1995", spotify: "https://open.spotify.com/album/09AwlP99cHfKVNKv4FC8VW" },
  { artist: "Alice in Chains", album: "Dirt", released: "1992", spotify: "https://open.spotify.com/album/6jUBENAV8bj1k42Bvnoeob", pick: true },
  { artist: "Alice in Chains", album: "Facelift", released: "1990", spotify: "https://open.spotify.com/album/5LbHbwejgZXRZAgzVAjkhj" },
  { artist: "Audioslave", album: "Audioslave", released: "2002", spotify: "https://open.spotify.com/album/293aYSIVNjjmkAwupnlxRd" },
  { artist: "Blind Melon", album: "Soup", released: "1995", spotify: "https://open.spotify.com/album/25dViuBmzYefykMckmwjKw" },
  { artist: "Failure", album: "Fantastic Planet", released: "1996", spotify: "https://open.spotify.com/album/1T6gJMRrSjX9yx5LwVzOhG" },
  { artist: "Foo Fighters", album: "Foo Fighters", released: "1995", spotify: "https://open.spotify.com/album/3Xr3M24El1tcnxa0LQRr2o" },
  { artist: "Foo Fighters", album: "The Colour and the Shape", released: "1997", spotify: "https://open.spotify.com/album/3eIaHvHkm4iX1AmTEep95p" },
  { artist: "Garbage", album: "Garbage", released: "1995", spotify: "https://open.spotify.com/album/2fp9I1YNlXEI9Ow2EKs5MN" },
  { artist: "Garbage", album: "Version 2.0", released: "1998", spotify: "https://open.spotify.com/album/21wqpUt5VXKM8PgnGw4T1M" },
  { artist: "Hole", album: "Live Through This", released: "1994", spotify: "https://open.spotify.com/album/2Rwf2nPYZQ9aIe4QXACTC7" },
  { artist: "Jane's Addiction", album: "Ritual de lo Habitual", released: "1990", spotify: "https://open.spotify.com/album/2Jkbi83HTSfqEd0CBdYwpU" },
  { artist: "Mudhoney", album: "Superfuzz Bigmuff", released: "1988", spotify: "https://open.spotify.com/album/5w4gJSJS1LaSJ5DgaC6Cl8", type: "EP" },
  { artist: "Neil Young & Crazy Horse", album: "Ragged Glory", released: "1990", spotify: "https://open.spotify.com/album/4YHIfZ986IFFp7OiO9D9Qt" },
  { artist: "Nirvana", album: "Bleach", released: "1989", spotify: "https://open.spotify.com/album/1KVGLuPtrMrLlyy4Je6df7" },
  { artist: "Nirvana", album: "From the Muddy Banks of the Wishkah", released: "1996", spotify: "https://open.spotify.com/album/26paS1Rzj1L0d3Zr1WBTIj", type: "Live" },
  { artist: "Nirvana", album: "In Utero", released: "1993", spotify: "https://open.spotify.com/album/7wOOA7l306K8HfBKfPoafr" },
  { artist: "Nirvana", album: "Nevermind", released: "1991", spotify: "https://open.spotify.com/album/2tqNAmW9Q61osYJM7xdutO" },
  { artist: "Pearl Jam", album: "Ten", released: "1991", spotify: "https://open.spotify.com/album/39BXqF0ttK6P3Jx3BGjMP6", pick: true },
  { artist: "Pearl Jam", album: "Vitalogy", released: "1994", spotify: "https://open.spotify.com/album/5pd9B3KQWKshHw4lnsSLNy" },
  { artist: "Pearl Jam", album: "Vs.", released: "1993", spotify: "https://open.spotify.com/album/2m4JZQPguyIhuleZAs3xmJ" },
  { artist: "Screaming Trees", album: "Dust", released: "1996", spotify: "https://open.spotify.com/album/0YW9Qke0AfzNVISsPQ7KoF" },
  { artist: "Soundgarden", album: "Badmotorfinger", released: "1991", spotify: "https://open.spotify.com/album/6AA5g730FNzwKI08H7rxBk" },
  { artist: "Soundgarden", album: "Superunknown", released: "1994", spotify: "https://open.spotify.com/album/4SPc25NzdqOQt2IX4JDLUv" },
  { artist: "Stone Temple Pilots", album: "Purple", released: "1994", spotify: "https://open.spotify.com/album/1SfACxGBJi6o761spVfpqt" },
  { artist: "Temple of the Dog", album: "Temple of the Dog", released: "1991", spotify: "https://open.spotify.com/album/63HdXCn0Xz1pRZc2GzMw7k" },
  { artist: "The Smashing Pumpkins", album: "Gish", released: "1991", spotify: "https://open.spotify.com/album/0FoOJucC8temyTUBpbapWC" },
  { artist: "The Smashing Pumpkins", album: "Mellon Collie and the Infinite Sadness", released: "1995", spotify: "https://open.spotify.com/album/09LdvC3k8ybEmyeiShUWw2" },
  { artist: "The Smashing Pumpkins", album: "Siamese Dream", released: "1993", spotify: "https://open.spotify.com/album/4UVERYsIzs6xbDYO8srlqd", pick: true },
  { artist: "Urge Overkill", album: "Saturation", released: "1993", spotify: "https://open.spotify.com/album/1fpJMY7H1ecF5fqbcbT9Lj" },
  { artist: "Veruca Salt", album: "American Thighs", released: "1994", spotify: "https://open.spotify.com/album/3sJgSPUnFjlRIckcgtbWyj" },

  { artist: "", album: "", released: "", spotify: "" },

]);
