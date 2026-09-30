/* Hip Hop
   -------
   Records filed under Hip Hop but NOT in one of its sections.
   The sections have their own files:
     albums/hip-hop-conscious.js   (Conscious Hip Hop / Political Hip Hop)
     albums/hip-hop-experimental.js   (Experimental Hip Hop / Abstract Hip Hop / Industrial Hip Hop)

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

  { artist: "2Pac", album: "All Eyez on Me", released: "1996", spotify: "https://open.spotify.com/album/7HhH3qWRRvTEBt1xRhF2Va" },
  { artist: "2Pac", album: "Me Against the World", released: "1995", spotify: "https://open.spotify.com/album/3OrucS4sHv6Bl9GS4rafEk" },
  { artist: "50 Cent", album: "Get Rich or Die Tryin'", released: "2003", spotify: "https://open.spotify.com/album/2PiSkRUZWhvID1Cf3ppls4" },
  { artist: "Afrika Bambaataa", album: "Looking for the Perfect Beat: 1980-1985", released: "2001", spotify: "https://open.spotify.com/album/0yAAEdqVpj0IsEgFZumalb" },
  { artist: "Azealia Banks", album: "Broke with Expensive Taste", released: "2014", spotify: "https://open.spotify.com/album/1VV3fSIPOxP6eLGXPsglKP" },
  { artist: "Beastie Boys", album: "Check Your Head", released: "1992", spotify: "https://open.spotify.com/album/0cXrT5A2aHEQEG0f1ZBS05" },
  { artist: "Beastie Boys", album: "Hello Nasty", released: "1998", spotify: "https://open.spotify.com/album/1HhBu55aklCwIus7KffIji" },
  { artist: "Beastie Boys", album: "Ill Communication", released: "1994", spotify: "https://open.spotify.com/album/6lfjbwFGzQ6aSNP1N3JlT8" },
  { artist: "Beastie Boys", album: "Licensed to Ill", released: "1986", spotify: "https://open.spotify.com/album/11oR0ZuqB3ucZwb5TGbZxb" },
  { artist: "Beastie Boys", album: "Paul's Boutique", released: "1989", spotify: "https://open.spotify.com/album/1kmyirVya5fRxdjsPFDM05" },
  { artist: "Big Boi", album: "Sir Lucious Left Foot: The Son of Chico Dusty", released: "2010", spotify: "https://open.spotify.com/album/1dkvQiAwd1ONpvxAHzLPKl" },
  { artist: "Big Daddy Kane", album: "Long Live the Kane", released: "1988", spotify: "" },
  { artist: "Big K.R.I.T.", album: "4eva Is a Mighty Long Time", released: "2017", spotify: "https://open.spotify.com/album/6vGEX2ejVVsHTIsqI1teZg" },
  { artist: "Big K.R.I.T.", album: "Return of 4Eva", released: "2011", spotify: "" },
  { artist: "Big Pun", album: "Capital Punishment", released: "1998", spotify: "https://open.spotify.com/album/3IIHk2ZLXKWuVAjCbQ9g4Y" },
  { artist: "Bone Thugs-n-Harmony", album: "E. 1999 Eternal", released: "1995", spotify: "https://open.spotify.com/album/3r25XjxAmLMOhOWoV6X8N9" },
  { artist: "Brockhampton", album: "Saturation", released: "2017", spotify: "https://open.spotify.com/album/67smHJOf5YlFwad6dAlppm" },
  { artist: "Brockhampton", album: "Saturation II", released: "2017", spotify: "https://open.spotify.com/album/0XnqQzdSFAml08XZoRt1St" },
  { artist: "Brockhampton", album: "Saturation III", released: "2017", spotify: "https://open.spotify.com/album/5c2AzoNyr46fCQM5d8mxE0" },
  { artist: "Cam'ron", album: "Purple Haze", released: "2004", spotify: "https://open.spotify.com/album/7hWP7vvG5g6cVj3bCrto7P" },
  { artist: "Capone-N-Noreaga", album: "The War Report", released: "1997", spotify: "https://open.spotify.com/album/6cQ4ezGz3UQCtHUnJGUZLv" },
  { artist: "Cardi B", album: "Invasion of Privacy", released: "2018", spotify: "https://open.spotify.com/album/4sDAyYEMhD2YyREWKxj3aD" },
  { artist: "Chance the Rapper", album: "Acid Rap", released: "2013", spotify: "https://open.spotify.com/album/2VBcztE58pBKjIDS5oEgFh" },
  { artist: "Chance the Rapper", album: "Coloring Book", released: "2016", spotify: "https://open.spotify.com/album/71QyofYesSsRMwFOTafnhB" },
  { artist: "Chief Keef", album: "Almighty So", released: "2013", spotify: "https://open.spotify.com/album/49woumeawViwuBn4ss52yK" },
  { artist: "Chief Keef", album: "Finally Rich", released: "2012", spotify: "https://open.spotify.com/album/2B4y3j02ho6XNF8BEzx3JF" },
  { artist: "Clipse", album: "Hell Hath No Fury", released: "2006", spotify: "https://open.spotify.com/album/1HftQWyKWoGsrmG5lRkJDE" },
  { artist: "Clipse", album: "Let God Sort Em Out", released: "2025", spotify: "https://open.spotify.com/album/1avMe325Hmi1taC1fiwOnp" },
  { artist: "Clipse", album: "Lord Willin'", released: "2002", spotify: "https://open.spotify.com/album/5Ulsh7Bt3duAtm7Bw74eGm" },
  { artist: "Conway the Machine", album: "God Don't Make Mistakes", released: "2022", spotify: "https://open.spotify.com/album/4w1BBgCcUVv54r3zJenKpG" },
  { artist: "Cypress Hill", album: "Cypress Hill", released: "1991", spotify: "https://open.spotify.com/album/4tQSV1ZGpwlo3dBiTRuKvM" },
  { artist: "DJ Quik", album: "Rhythm-al-ism", released: "1998", spotify: "https://open.spotify.com/album/7GRaJQD7cMD0g6jt1uKAEu" },
  { artist: "DMX", album: "It's Dark and Hell Is Hot", released: "1998", spotify: "https://open.spotify.com/album/0A9Xz2xCvVupOpHD3WBmnR" },
  { artist: "Dr. Dre", album: "2001", released: "1999", spotify: "https://open.spotify.com/album/7q2B4M5EiBkqrlsNW8lB7N" },
  { artist: "Dr. Dre", album: "The Chronic", released: "1992", spotify: "https://open.spotify.com/album/2V5rhszUpCudPcb01zevOt" },
  { artist: "Drake", album: "So Far Gone", released: "2009", spotify: "https://open.spotify.com/album/1LShhEEKRT5MNPcO7jtYHh" },
  { artist: "Drake", album: "Take Care", released: "2011", spotify: "https://open.spotify.com/album/0spwus3Js2pcAiLbDzIpMT" },
  { artist: "E-40", album: "In a Major Way", released: "1995", spotify: "https://open.spotify.com/album/5nRvUR1Jki1iRJi2mkbtGw" },
  { artist: "Eminem", album: "The Marshall Mathers LP", released: "2000", spotify: "https://open.spotify.com/album/6t7956yu5zYf5A829XRiHC" },
  { artist: "EPMD", album: "Strictly Business", released: "1988", spotify: "https://open.spotify.com/album/2HOl8gDiGGpt7wsIDi9jy5" },
  { artist: "EPMD", album: "Unfinished Business", released: "1999", spotify: "https://open.spotify.com/album/4dxBNRPePGqky6mIKGAVsr" },
  { artist: "Eric B. & Rakim", album: "Paid in Full", released: "1987", spotify: "https://open.spotify.com/album/5GSidytcItIkYvD0GVQ68m" },
  { artist: "Eric B. & Rakim", album: "Follow the Leader", released: "1988", spotify: "https://open.spotify.com/album/1m8ZpqOF5HAxFfAzaPb2eZ" },
  { artist: "Freddie Gibbs & Madlib", album: "Piñata", released: "2014", spotify: "https://open.spotify.com/album/43uErencdmuTRFZPG3zXL1" },
  { artist: "Fugees", album: "The Score", released: "1996", spotify: "https://open.spotify.com/album/4z6F5s3RVaOsekuaegbLfD" },
  { artist: "Future", album: "DS2", released: "2015", spotify: "https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl" },
  { artist: "G-Unit", album: "50 Cent Is the Future", released: "2002", spotify: "https://open.spotify.com/album/1WTbMZkBlC7Rnxo1cLTMzX" },
  { artist: "Gang Starr", album: "Hard to Earn", released: "1994", spotify: "https://open.spotify.com/album/7tDfDFaHYppajHnik3EYc0" },
  { artist: "Gang Starr", album: "Step in the Arena", released: "1991", spotify: "https://open.spotify.com/album/05wcY4zcfSawCyoutTTxda" },
  { artist: "Ghostface", album: "The Pretty Toney Album", released: "2004", spotify: "https://open.spotify.com/album/3OcEwLesNaRKq5NVCb8E8o" },
  { artist: "Ghostface Killah", album: "Fishscale", released: "2006", spotify: "https://open.spotify.com/album/6VReklGIedBcEjFRRIBH4h" },
  { artist: "Ghostface Killah", album: "Ironman", released: "1996", spotify: "https://open.spotify.com/album/2jCjUgaDh9lVGju6u3cGvK" },
  { artist: "Ghostface Killah", album: "Supreme Clientele", released: "2000", spotify: "https://open.spotify.com/album/7eaQqVyq6xzAVgsxSzSP83" },
  { artist: "Girl Talk and Freeway", album: "Broken Ankles", released: "2014", spotify: "", type: "EP" },
  { artist: "GZA", album: "Liquid Swords", released: "1995", spotify: "https://open.spotify.com/album/3k8xoyOXkGgZxUKgpmxz4P" },
  { artist: "Ice-T", album: "O.G. Original Gangster", released: "1991", spotify: "https://open.spotify.com/album/08Bjvwbg1cFsFfXSdhG23I" },
  { artist: "Ice-T", album: "Power", released: "1988", spotify: "https://open.spotify.com/album/2KaB2rHtdBvocspgjm1bnN" },
  { artist: "JID", album: "The Forever Story", released: "2022", spotify: "https://open.spotify.com/album/43YVfKljZXPVm7QUUdGjBV" },
  { artist: "Jay-Z", album: "American Gangster", released: "2007", spotify: "https://open.spotify.com/album/7fauskQOIBatv9QkKrQFFT" },
  { artist: "Jay-Z", album: "Reasonable Doubt", released: "1996", spotify: "https://open.spotify.com/album/5wx5RTvtRkEq7mw8E7RdEr" },
  { artist: "Jay-Z", album: "The Black Album", released: "2003", spotify: "https://open.spotify.com/album/0AOK2lk8ZtoteYiwGX5blO" },
  { artist: "Jay-Z", album: "The Blueprint", released: "2001", spotify: "https://open.spotify.com/album/54I5tDCMjnNVWSENHg8EDH" },
  { artist: "Juvenile", album: "400 Degreez", released: "1998", spotify: "https://open.spotify.com/album/5cmmp3AE7QRfJXkNVZcWdd" },
  { artist: "Kanye West", album: "Graduation", released: "2007", spotify: "https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3" },
  { artist: "Kanye West", album: "Late Registration", released: "2005", spotify: "https://open.spotify.com/album/0Ds6i3h0F9RcYIKAD5Olum" },
  { artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy", released: "2010", spotify: "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv" },
  { artist: "Kanye West", album: "The College Dropout", released: "2004", spotify: "https://open.spotify.com/album/3ff2p3LnR6V7m6BinwhNaQ" },
  { artist: "Kanye West", album: "The Life of Pablo", released: "2016", spotify: "https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1" },
  { artist: "Kanye West", album: "Yeezus", released: "2013", spotify: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK" },
  { artist: "Lil Wayne", album: "Da Drought 3", released: "2007", spotify: "" },
  { artist: "Lil Wayne", album: "Tha Carter III", released: "2008", spotify: "https://open.spotify.com/album/5BGzOpea6At0Nd7tYtYZOP" },
  { artist: "Lil' Kim", album: "Hard Core", released: "1996", spotify: "https://open.spotify.com/album/39xHAZmTUSQJyXt6ebpjKT" },
  { artist: "LL Cool J", album: "Mama Said Knock You Out", released: "1990", spotify: "https://open.spotify.com/album/51alvFCEa3AwnZeKbpKxeZ" },
  { artist: "LL Cool J", album: "Radio", released: "1985", spotify: "https://open.spotify.com/album/4sevefzBUFvJYAzijVBQ2a" },
  { artist: "Main Source", album: "Breaking Atoms", released: "1991", spotify: "https://open.spotify.com/album/3XSUKIkmWdUPZ7WOexixeE" },
  { artist: "Makaveli", album: "The Don Killuminati: The 7-Day Theory", released: "1996", spotify: "https://open.spotify.com/album/1FvdeyyJej0uHRwfTKLNNj" },
  { artist: "Missy \"Misdemeanor\" Elliott", album: "Da Real World", released: "1999", spotify: "https://open.spotify.com/album/0nUwDLZwOhwAOkU871Ky0P" },
  { artist: "Missy \"Misdemeanor\" Elliott", album: "Supa Dupa Fly", released: "1997", spotify: "https://open.spotify.com/album/6UkdyvPElK6JDkyeRClbI2" },
  { artist: "Missy Elliott", album: "Miss E... So Addictive", released: "2001", spotify: "https://open.spotify.com/album/2Nwdtp4fmqODC79iUhBHni" },
  { artist: "Missy Elliott", album: "This Is Not a Test!", released: "2003", spotify: "https://open.spotify.com/album/399LkzPKKiKOgsZfnZfaeA" },
  { artist: "Mobb Deep", album: "The Infamous", released: "1995", spotify: "https://open.spotify.com/album/1cCAb1vN8uUsdfEylVmTLs" },
  { artist: "Mr. Hyde", album: "Barn of the Naked Dead", released: "2004", spotify: "https://open.spotify.com/album/22RZN0yVtYETYpIiqOxsQG" },
  { artist: "N.W.A", album: "Straight Outta Compton", released: "1989", spotify: "https://open.spotify.com/album/0Y7qkJVZ06tS2GUCDptzyW" },
  { artist: "Nas", album: "Illmatic", released: "1994", spotify: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1" },
  { artist: "Nicki Minaj", album: "Pink Friday", released: "2010", spotify: "https://open.spotify.com/album/51HDsvvActcDmYy7NQl6oL" },
  { artist: "OutKast", album: "Aquemini", released: "1998", spotify: "https://open.spotify.com/album/5ceB3rxgXqIRpsOvVzTG28" },
  { artist: "OutKast", album: "ATLiens", released: "1996", spotify: "https://open.spotify.com/album/1IaBCF26OjgYwUCEPaIyC0" },
  { artist: "OutKast", album: "Speakerboxxx/The Love Below", released: "2003", spotify: "https://open.spotify.com/album/1UsmQ3bpJTyK6ygoOOjG1r" },
  { artist: "OutKast", album: "Stankonia", released: "2000", spotify: "https://open.spotify.com/album/2tm3Ht61kqqRZtIYsBjxEj" },
  { artist: "P.M. Dawn", album: "Jesus Wept", released: "1995", spotify: "" },
  { artist: "P.M. Dawn", album: "Of the Heart, of the Soul and of the Cross: The Utopian Experience", released: "1991", spotify: "" },
  { artist: "Pete Rock & CL Smooth", album: "Mecca and the Soul Brother", released: "1992", spotify: "https://open.spotify.com/album/2AgTKAULjbHpqqtyI53hdp" },
  { artist: "Playboi Carti", album: "Die Lit", released: "2018", spotify: "https://open.spotify.com/album/7dAm8ShwJLFm9SaJ6Yc58O" },
  { artist: "Playboi Carti", album: "Whole Lotta Red", released: "2020", spotify: "" },
  { artist: "Project Pat", album: "Mista Don't Play: Everythangs Workin", released: "2001", spotify: "" },
  { artist: "Raekwon", album: "Only Built 4 Cuban Linx...", released: "1995", spotify: "https://open.spotify.com/album/7btiyhWzUfzxN3ijSiBpC8" },
  { artist: "Raekwon", album: "Only Built 4 Cuban Linx... Pt. II", released: "2009", spotify: "" },
  { artist: "Redman", album: "Whut? Thee Album", released: "1992", spotify: "" },
  { artist: "Rich Gang", album: "Rich Gang: Tha Tour Pt. 1", released: "2014", spotify: "https://open.spotify.com/album/7aHqeKHrLuEmH9EvBPXMOI" },
  { artist: "Run-D.M.C.", album: "Raising Hell", released: "1986", spotify: "https://open.spotify.com/album/0PanG8trSzqFIX7pZmCVFG" },
  { artist: "Run-D.M.C.", album: "Run-D.M.C.", released: "1984", spotify: "https://open.spotify.com/album/05n0d2kfwGPhKpTonLHRpY" },
  { artist: "Scarface", album: "The Diary", released: "1994", spotify: "https://open.spotify.com/album/16WYAWA56AzCMScnVB5HBu" },
  { artist: "Scarface", album: "The Fix", released: "2002", spotify: "https://open.spotify.com/album/08QH6uS4BzYcPqeAbpcnhg" },
  { artist: "Slick Rick", album: "The Great Adventures of Slick Rick", released: "1988", spotify: "https://open.spotify.com/album/71mmTJdWvpkzQNmVfFbRdN" },
  { artist: "Snoop Doggy Dogg", album: "Doggystyle", released: "1993", spotify: "https://open.spotify.com/album/7f9KDGqY7X2VLBM5aA66KM" },
  { artist: "Swamp Thing", album: "Creature Feature", released: "2012", spotify: "" },
  { artist: "The D.O.C.", album: "No One Can Do It Better", released: "1989", spotify: "https://open.spotify.com/album/3wAMdnbT6F7EM1c4mVe6zD" },
  { artist: "The Notorious B.I.G.", album: "Life After Death", released: "1997", spotify: "https://open.spotify.com/album/7dRdaGSxgcBdJnrOviQRuB" },
  { artist: "The Notorious B.I.G.", album: "Ready to Die", released: "1994", spotify: "https://open.spotify.com/album/2HTbQ0RHwukKVXAlTmCZP2" },
  { artist: "The Pharcyde", album: "Labcabincalifornia", released: "1995", spotify: "https://open.spotify.com/album/05Qg48LlYGKYdeXrNGg00g" },
  { artist: "The Roots", album: "Illadelph Halflife", released: "1996", spotify: "" },
  { artist: "The Roots", album: "Do You Want More?!!!??!", released: "1995", spotify: "" },
  { artist: "The Streets", album: "A Grand Don't Come for Free", released: "2004", spotify: "" },
  { artist: "The Streets", album: "Original Pirate Material", released: "2002", spotify: "" },
  { artist: "Three 6 Mafia", album: "Mystic Stylez", released: "1995", spotify: "https://open.spotify.com/album/03dao4rkv9ZZ95IJrnugVM" },
  { artist: "Tkay Maidza", album: "Last Year Was Weird (Vol. 2)", released: "2020", spotify: "" },
  { artist: "Tyler, the Creator", album: "Call Me If You Get Lost", released: "2021", spotify: "" },
  { artist: "Tyler, the Creator", album: "Flower Boy", released: "2017", spotify: "https://open.spotify.com/album/2nkto6YNI4rUYTLqEwWJ3o" },
  { artist: "Tyler, the Creator", album: "Igor", released: "2019", spotify: "https://open.spotify.com/album/5zi7WsKlIiUXv09tbGLKsE" },
  { artist: "UGK", album: "Ridin' Dirty", released: "1996", spotify: "https://open.spotify.com/album/4jTPQq9PSlKMOm1yLx2ATN" },
  { artist: "Ultramagnetic MCs", album: "Critical Beatdown", released: "1988", spotify: "" },
  { artist: "Various Artists", album: "The Sugar Hill Records Story", released: "1997", spotify: "" },
  { artist: "Vince Staples", album: "Big Fish Theory", released: "2017", spotify: "" },
  { artist: "Vince Staples", album: "Summertime '06", released: "2015", spotify: "https://open.spotify.com/album/4Csoz10NhNJOrCTUoPBdUD" },
  { artist: "Wu-Tang Clan", album: "Enter the Wu-Tang (36 Chambers)", released: "1993", spotify: "https://open.spotify.com/album/6acGx168JViE5LLFR1rGRE" },

  { artist: "", album: "", released: "", spotify: "" },

]);
