/* Experimental Rock / Post-Rock / Noise Rock
   ------------------------------------------
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

  { artist: "Anima Morte", album: "The Nightmare Becomes Reality", released: "2011", spotify: "https://open.spotify.com/album/0asdfZCSsdaRBbEHPe0Yul" },
  { artist: "Avey Tare's Slasher Flicks", album: "Enter the Slasher House", released: "2014", spotify: "https://open.spotify.com/album/3aySHuFfYySYxYCdznqRhV" },
  { artist: "Battles", album: "Gloss Drop", released: "2011", spotify: "https://open.spotify.com/album/1O58FiA79FsPVDezRyTlU3" },
  { artist: "Battles", album: "Mirrored", released: "2007", spotify: "https://open.spotify.com/album/64shsDEnphK07flo3DzWAc" },
  { artist: "Big Black", album: "Atomizer", released: "1986", spotify: "https://open.spotify.com/album/39ug65qdY5NvkiK2UjYqVe" },
  { artist: "Big Black", album: "Songs About Fucking", released: "1987", spotify: "https://open.spotify.com/album/0XKBAGuu9V11zeUfWZcmer" },
  { artist: "Black Country, New Road", album: "Ants from Up There", released: "2022", spotify: "https://open.spotify.com/album/21xp7NdU1ajmO1CX0w2Egd" },
  { artist: "Black Midi", album: "Hellfire", released: "2022", spotify: "https://open.spotify.com/album/68z6MWYYNmvTcru1QMcYId" },
  { artist: "Boredoms", album: "Soul Discharge", released: "1990", spotify: "" },
  { artist: "Boredoms", album: "Super æ", released: "1998", spotify: "https://open.spotify.com/album/0rMegQXvLDuu3OWQH5tg7C" },
  { artist: "Captain Beefheart and His Magic Band", album: "Trout Mask Replica", released: "1969", spotify: "https://open.spotify.com/album/4dgAnIHFpnFdSBqpRZheHq" },
  { artist: "Chat Pile", album: "Who Loves the Sun", released: "2026", spotify: "https://open.spotify.com/album/2ITnf8HOokOJxjv483Dszk" },
  { artist: "Contact", album: "First Contact", released: "2014", spotify: "" },
  { artist: "Contact", album: "Zero Moment", released: "2016", spotify: "" },
  { artist: "Cromagnon", album: "Orgasm", released: "1969", spotify: "https://open.spotify.com/album/60StK3mTvlqeHhTGr9LS6Z" },
  { artist: "Daughters", album: "You Won't Get What You Want", released: "2018", spotify: "https://open.spotify.com/album/7w7ZTlk8YLc0OxviTp97qA" },
  { artist: "David Lynch", album: "The Big Dream", released: "2013", spotify: "https://open.spotify.com/album/2wqnTkuSs2sATiuFxSnX47" },
  { artist: "Deerhoof", album: "The Runners Four", released: "2005", spotify: "https://open.spotify.com/album/3kauhgXpbcTzfM8iFVSm2a" },
  { artist: "Dirty Three", album: "Horse Stories", released: "1996", spotify: "https://open.spotify.com/album/5zTyU8UAkX3rpWvJFl0EcA" },
  { artist: "Dope Body", album: "Natural History", released: "2012", spotify: "https://open.spotify.com/album/5USTX24mfkfnAYV7v855hv" },
  { artist: "Dust Witch", album: "Mirage", released: "2017", spotify: "" },
  { artist: "Fantômas", album: "The Director's Cut", released: "2001", spotify: "https://open.spotify.com/album/4EenSuWRkXoSrsMJEuvfE1" },
  { artist: "Flipper", album: "Album – Generic Flipper", released: "1981", spotify: "https://open.spotify.com/album/7p8wkhnQPET9CsQRpqrIYP" },
  { artist: "Frank Zappa", album: "Hot Rats", released: "1969", spotify: "https://open.spotify.com/album/0WYYrC9My9rYWigac003hw" },
  { artist: "Geordie Greep", album: "The New Sound", released: "2024", spotify: "https://open.spotify.com/album/07YS7ooqYtvPZLlW59MHY5" },
  { artist: "Girls Against Boys", album: "House of GVSB", released: "1996", spotify: "https://open.spotify.com/album/5j6YEMKBN7tyJktFniEeBG" },
  { artist: "Godspeed You! Black Emperor", album: "'Allelujah! Don't Bend! Ascend!", released: "2012", spotify: "https://open.spotify.com/album/30bTXMxsMsYn7QbwmDW3rj" },
  { artist: "Godspeed You! Black Emperor", album: "No Title As of 13 February 2024 28,340 Dead", released: "2024", spotify: "https://open.spotify.com/album/1qG30zCAZ30hsmA5wAlaQ3" },
  { artist: "Godspeed You! Black Emperor", album: "Lift Your Skinny Fists like Antennas to Heaven", released: "2000", spotify: "https://open.spotify.com/album/2rT82YYlV9UoxBYLIezkRq" },
  { artist: "Godspeed You! Black Emperor", album: "Slow Riot for New Zero Kanada E.P.", released: "1999", spotify: "https://open.spotify.com/album/2tA6VFMIQuSF3KpXsrulw9", type: "EP" },
  { artist: "Haru Nemuri", album: "春と修羅 (Haru to Shura)", released: "2018", spotify: "https://open.spotify.com/album/3Hl2hfoTpM7LMrjbxh221R" },
  { artist: "Horrific Child", album: "L'Etrange Monsieur Whinster", released: "1976", spotify: "https://open.spotify.com/album/2QtfNTTC5uQcFBWwBd8IJM" },
  { artist: "King Crimson", album: "In the Court of the Crimson King", released: "1969", spotify: "https://open.spotify.com/album/1Lzi2p6CUH156zbJTcOjNX" },
  { artist: "Liars", album: "Drum's Not Dead", released: "2006", spotify: "https://open.spotify.com/album/4xeba6CVGWt31LsqwhS8Mg" },
  { artist: "Liars", album: "Mess", released: "2014", spotify: "https://open.spotify.com/album/5Yyt7GBe2YwY3ddjsbv1Em" },
  { artist: "Liars", album: "They Threw Us All in a Trench and Stuck a Monument on Top", released: "2001", spotify: "https://open.spotify.com/album/5xKXllLmitD5Wyico6cAFB" },
  { artist: "Little Women", album: "Throat", released: "2010", spotify: "https://open.spotify.com/album/1SpWwIEwnXRhc8co4h17hf" },
  { artist: "Low", album: "Double Negative", released: "2018", spotify: "https://open.spotify.com/album/0fWKkkVCj14CllpjPLjU9P" },
  { artist: "Low", album: "Hey What", released: "2021", spotify: "https://open.spotify.com/album/6S6jg2LuEwGdo9iYMSwCBS" },
  { artist: "Maruja", album: "Connla's Well", released: "2024", spotify: "", type: "EP" },
  { artist: "Melt-Banana", album: "Fetch", released: "2013", spotify: "https://open.spotify.com/album/4C8VqFE4h4KWIsbAViqIby" },
  { artist: "Mike Oldfield", album: "Tubular Bells", released: "1973", spotify: "https://open.spotify.com/album/0a3YQpBnRzJzNktOjb6Dum" },
  { artist: "Moor Jewelry", album: "True Opera", released: "2020", spotify: "https://open.spotify.com/album/1xZrWM9epQE74acOiyh8dN" },
  { artist: "Mr. Bungle", album: "Mr. Bungle", released: "1991", spotify: "https://open.spotify.com/album/5TzQq2irJPHeHNnh11atPw" },
  { artist: "No Age", album: "Nouns", released: "2008", spotify: "https://open.spotify.com/album/7m04FN3nw6DK1HA3COfTo6" },
  { artist: "Pink Floyd", album: "The Dark Side of the Moon", released: "1973", spotify: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv" },
  { artist: "Pink Floyd", album: "The Piper at the Gates of Dawn", released: "1967", spotify: "https://open.spotify.com/album/2Se4ZylF9NkFGD92yv1aZC" },
  { artist: "Pink Floyd", album: "Wish You Were Here", released: "1975", spotify: "https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw" },
  { artist: "Pussy Galore", album: "Groovy Hate Fuck", released: "1986", spotify: "" },
  { artist: "Richard Dawson and Circle", album: "Henki", released: "2021", spotify: "https://open.spotify.com/album/6X4ALVBUeQnMHR5tsK8ymx" },
  { artist: "Robert Wyatt", album: "Comicopera", released: "2007", spotify: "https://open.spotify.com/album/00VCgwkyozBU82WUpgWxHF" },
  { artist: "Robert Wyatt", album: "Rock Bottom", released: "1974", spotify: "https://open.spotify.com/album/6CGNTxZBa20mHcsAIqQtit" },
  { artist: "Scott Walker", album: "The Drift", released: "2006", spotify: "https://open.spotify.com/album/3A7Gfj808zT13fi4M4OrwT" },
  { artist: "Sigur Rós", album: "Ágætis byrjun", released: "1999", spotify: "https://open.spotify.com/album/1DMMv1Kmoli3Y9fVEZDUVC" },
  { artist: "Slint", album: "Spiderland", released: "1991", spotify: "https://open.spotify.com/album/0cp3HJ6szImZfnVSPHDqAU" },
  { artist: "Sonic Youth", album: "Daydream Nation", released: "1988", spotify: "https://open.spotify.com/album/3MwuBXHMWHjOur9QlZnzOj" },
  { artist: "Sonic Youth", album: "Dirty", released: "1992", spotify: "https://open.spotify.com/album/7oNRvhXwhNCfHEUGER5EhG" },
  { artist: "Sonic Youth", album: "EVOL", released: "1986", spotify: "https://open.spotify.com/album/5Bf5U1Zw9gsJh6bWaM2VY2" },
  { artist: "Sonic Youth", album: "Goo", released: "1990", spotify: "https://open.spotify.com/album/5iYYQwB0oH9FVyVlaOXZdr" },
  { artist: "Sonic Youth", album: "Murray Street", released: "2002", spotify: "https://open.spotify.com/album/3uXHwgYhd1JCpXdQN5MAii" },
  { artist: "Spiritualized", album: "Ladies and Gentlemen We Are Floating in Space", released: "1997", spotify: "https://open.spotify.com/album/4GMgNPA4fMv3U0QQsdRLJk" },
  { artist: "Sprain", album: "The Lamb as Effigy", released: "2023", spotify: "https://open.spotify.com/album/4DYjQAfIJMtvw43uw1L64c" },
  { artist: "Swans", album: "The Glowing Man", released: "2016", spotify: "https://open.spotify.com/album/30FjZ3FGnMz4ita5zhqgkl" },
  { artist: "Swans", album: "The Seer", released: "2012", spotify: "https://open.spotify.com/album/5hXTuGzaOREp5WHYGQXXB1" },
  { artist: "Swans", album: "To Be Kind", released: "2014", spotify: "https://open.spotify.com/album/4dq7JNcHKrnozzFQg5bpmn" },
  { artist: "The Fiery Furnaces", album: "Blueberry Boat", released: "2004", spotify: "https://open.spotify.com/album/2WENPrYb3m58O5tTmy53lY" },
  { artist: "The Residents", album: "Demons Dance Alone", released: "2002", spotify: "https://open.spotify.com/album/3fvx8YJrt5u1Hxe6h8fNaR" },
  { artist: "The Residents", album: "Icky Flix", released: "2001", spotify: "https://open.spotify.com/album/68Iv70xCzdqplCh6FOmgBd" },
  { artist: "The Residents", album: "The King & Eye- RMX", released: "2004", spotify: "https://open.spotify.com/album/7G7DEJnh7pZfz4ql3NGhjS" },
  { artist: "The Soft Machine", album: "The Soft Machine", released: "1968", spotify: "https://open.spotify.com/album/1ve9AXU2FPr7CZTRg3AboS" },
  { artist: "The Velvet Underground", album: "The Velvet Underground", released: "1969", spotify: "https://open.spotify.com/album/1Yb6NXSBoFedGL1qhXyO4K" },
  { artist: "The Velvet Underground", album: "The Velvet Underground & Nico", released: "1967", spotify: "https://open.spotify.com/album/2QkDDVLuh025znjaxvTfAY" },
  { artist: "The Velvet Underground", album: "White Light/White Heat", released: "1968", spotify: "https://open.spotify.com/album/0HHmJpwOXXRJu9HI9iQiEO" },
  { artist: "Tom Waits", album: "Mule Variations", released: "1999", spotify: "https://open.spotify.com/album/3HbiZpp2QwPU1Y4eweEStW" },
  { artist: "Tom Waits", album: "Rain Dogs", released: "1985", spotify: "https://open.spotify.com/album/4PVqDVjitmZwRx8JIs3HJP" },
  { artist: "Tom Waits", album: "Real Gone", released: "2004", spotify: "https://open.spotify.com/album/4UjTXVetCzQO5ILcbQZL5c" },
  { artist: "Tom Waits", album: "Swordfishtrombones", released: "1983", spotify: "https://open.spotify.com/album/51hrKjSvIX69tl1g13R0hI" },
  { artist: "Unwound", album: "Leaves Turn Inside You", released: "2001", spotify: "https://open.spotify.com/album/7Gw6ZXtoi1uofigrbvqZFU" },
  { artist: "Various Artists", album: "No New York", released: "1978", spotify: "" },
  { artist: "Ween", album: "The Pod", released: "1991", spotify: "https://open.spotify.com/album/0H2ZqzI8mww9wNztJsEbFr" },
  { artist: "Women", album: "Public Strain", released: "2010", spotify: "https://open.spotify.com/album/4bOm9cju3kHhqoE5ZjGurt" },
  { artist: "Xiu Xiu", album: "Girl with Basket of Fruit", released: "2019", spotify: "https://open.spotify.com/album/7ml3twZt7NnjolHqminVwl" },
  { artist: "Xiu Xiu", album: "Plays the Music of Twin Peaks", released: "2016", spotify: "https://open.spotify.com/album/7dUOVdmLAEzqu5rvxYKUfA" },

  { artist: "", album: "", released: "", spotify: "" },

]);
