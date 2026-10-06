/* Folk / Singer-Songwriter / Americana / Country
   ----------------------------------------------
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

  { artist: "Big Thief", album: "Dragon New Warm Mountain I Believe in You", released: "2022", spotify: "https://open.spotify.com/album/7Ln81p86r5cCsesd3KBWIY" },
  { artist: "Big Thief", album: "U.F.O.F.", released: "2019", spotify: "https://open.spotify.com/album/5X0bIKvPtSDo4NpXqgrB6p" },
  { artist: "Bill Callahan", album: "My Days of 58", released: "2026", spotify: "", link: "https://open.spotify.com/prerelease/0i7aVwCFTh9khJuv9uhj2Y" },
  { artist: "Billy Bragg and Wilco", album: "Mermaid Avenue", released: "1998", spotify: "https://open.spotify.com/album/0yTmT1i6yHb5EVyJOmIwGw" },
  { artist: "Bob Dylan", album: "Blonde On Blonde", released: "1966", spotify: "https://open.spotify.com/album/4NP1rhnsPdYpnyJP0p0k0L" },
  { artist: "Bob Dylan", album: "Blood On The Tracks", released: "1975", spotify: "https://open.spotify.com/album/5vc9HV5FkTH6zgq6Q9N1jw" },
  { artist: "Bob Dylan", album: "Bringing It All Back Home", released: "1965", spotify: "https://open.spotify.com/album/1lPoRKSgZHQAYXxzBsOQ7v" },
  { artist: "Bob Dylan", album: "Highway 61 Revisited", released: "1965", spotify: "https://open.spotify.com/album/1vjuTst5KkS0BPmsbPqhHy" },
  { artist: "Bob Dylan", album: "Love and Theft", released: "2001", spotify: "https://open.spotify.com/album/5OokwFyEXPnD71rQdhqRQL" },
  { artist: "Bob Dylan", album: "Modern Times", released: "2006", spotify: "https://open.spotify.com/album/4drWnugFs0DYk6UIA0r3QA" },
  { artist: "Bob Dylan", album: "Rough and Rowdy Ways", released: "2020", spotify: "https://open.spotify.com/album/1Qht64MPvWTWa0aMsqxegB" },
  { artist: "Bob Dylan", album: "The Freewheelin' Bob Dylan", released: "1963", spotify: "https://open.spotify.com/album/0o1uFxZ1VTviqvNaYkTJek" },
  { artist: "Bob Dylan", album: "The Times They Are a-Changin'", released: "1964", spotify: "https://open.spotify.com/album/7DZeLXvr9eTVpyI1OlqtcS" },
  { artist: "Bob Dylan", album: "Time Out of Mind", released: "1997", spotify: "https://open.spotify.com/album/185DHT5SvszXRrezx3lOjt" },
  { artist: "Bonnie \"Prince\" Billy", album: "I See a Darkness", released: "1999", spotify: "https://open.spotify.com/album/4WxHlSD6QmOXiJRB3inkah" },
  { artist: "Cameron Winter", album: "Heavy Metal", released: "2024", spotify: "https://open.spotify.com/album/3L3tHhBI9SLSNKwwX1S9lK" },
  { artist: "Carole King", album: "Tapestry", released: "1971", spotify: "https://open.spotify.com/album/3NY5E1IrUP5xkyq41NZ9YC" },
  { artist: "Cat Power", album: "Moon Pix", released: "1998", spotify: "https://open.spotify.com/album/1LwW2w67qF4yDbSO1bp2Js" },
  { artist: "Cat Power", album: "The Greatest", released: "2006", spotify: "https://open.spotify.com/album/1l1gFL41bdfI32LBdYlUqS" },
  { artist: "Christy Moore", album: "Ride On", released: "1984", spotify: "https://open.spotify.com/album/43LTpQUcXr7tvfyjYbsErz", link: "https://drive.google.com/drive/folders/1vxLyacue64JI1LydS9ZlQ4nU9ag8z90U?usp=drive_link", cover: "https://images.genius.com/cda12ce8eeb19f0fcc2cfb60a073f043.996x996x1.png" },
  { artist: "Crosby, Stills & Nash", album: "Crosby, Stills & Nash", released: "1969", spotify: "https://open.spotify.com/album/6PHoh8RnP7ePnzb2OjCAox" },
  { artist: "Dean Gitter", album: "Ghost Ballads", released: "1957", spotify: "https://open.spotify.com/album/3GX0qAMT7zhbV6O0LGJ83L" },
  { artist: "Devendra Banhart", album: "Rejoicing in the Hands", released: "2004", spotify: "https://open.spotify.com/album/2s6AIr1sL5P0NAFzqd0zsW" },
  { artist: "Elliott Smith", album: "Either/Or", released: "1997", spotify: "https://open.spotify.com/album/5bmpvyP7UGqB4VuXmrJUMy" },
  { artist: "Elliott Smith", album: "From a Basement on the Hill", released: "2004", spotify: "https://open.spotify.com/album/4Q5tkG2i4EfKrvCzu1SxBe" },
  { artist: "Elliott Smith", album: "XO", released: "1998", spotify: "https://open.spotify.com/album/6FOUdn1ZEuJkgfcTt1fQnz" },
  { artist: "Fairport Convention", album: "Liege & Lief", released: "1969", spotify: "https://open.spotify.com/album/1FrW2Bbq6IXkyPM5wznMPD" },
  { artist: "Father John Misty", album: "Pure Comedy", released: "2017", spotify: "https://open.spotify.com/album/2QgZA6t1oFOjiJ59x7jrEI" },
  { artist: "Fleet Foxes", album: "Fleet Foxes", released: "2008", spotify: "https://open.spotify.com/album/6UaRSBqoruFQQNd6bUb1E4" },
  { artist: "Fleet Foxes", album: "Helplessness Blues", released: "2011", spotify: "https://open.spotify.com/album/7D0rCfJjFj9x0bdgRKtvzb" },
  { artist: "Fleet Foxes", album: "Sun Giant", released: "2008", spotify: "https://open.spotify.com/album/5qVtxV68qcHGGLFoWIGWUX", type: "EP" },
  { artist: "The Geraldine Fibbers", album: "Lost Somewhere Between the Earth and My Home", released: "1995", spotify: "https://open.spotify.com/album/1okNlkU53SyCnNH6qF33mM" },
  { artist: "Gram Parsons", album: "Grievous Angel", released: "1974", spotify: "https://open.spotify.com/album/6UQujMGmR5MbFsML9amCuN" },
  { artist: "Hap & Martha Palmer", album: "Witches' Brew - Pot Full of Songs for Oral Language Development", released: "1976", spotify: "https://open.spotify.com/album/2L1Pn0qZtMA7fUdwVbBrYz" },
  { artist: "Harley Poe", album: "Satan, Sex and No Regrets", released: "2012", spotify: "", link: "https://drive.google.com/drive/folders/1EBHBAvdDXwpWejT3kmg3EypnxUQBp2NG?usp=drive_link" },
  { artist: "Harley Poe", album: "The Dead And The Naked", released: "2006", spotify: "https://open.spotify.com/album/1yDPnlL5DtJGYBMj6Q6dzR" },
  { artist: "Ichiko Aoba", album: "Windswept Adan", released: "2020", spotify: "https://open.spotify.com/album/0LxeUCxtPfUtnHTKbW52MB" },
  { artist: "Iris DeMent", album: "My Life", released: "1994", spotify: "https://open.spotify.com/album/021A1VNvPPNWl0frHswwoM" },
  { artist: "Jason Isbell", album: "Southeastern", released: "2013", spotify: "https://open.spotify.com/album/1OICQP3AoGHVNDQRV9aS6c" },
  { artist: "Jessica Pratt", album: "Here in the Pitch", released: "2024", spotify: "https://open.spotify.com/album/3sxWkhkLVGfUd9jltFgcrG" },
  { artist: "Jimmie Dale Gilmore", album: "Spinning Around the Sun", released: "1993", spotify: "https://open.spotify.com/album/1FikRv9BleO0qs269UZODE" },
  { artist: "Joanna Newsom", album: "Have One on Me", released: "2010", spotify: "https://open.spotify.com/album/4ZFCqS8Ye5qgp4w7Sq09T4" },
  { artist: "Joanna Newsom", album: "The Milk-Eyed Mender", released: "2004", spotify: "", link: "https://drive.google.com/drive/folders/1z3odZDn8Y46WWf-DuiDnwZzImH7cFxzv?usp=drive_link" },
  { artist: "Joanna Newsom", album: "Ys", released: "2006", spotify: "", link: "https://drive.google.com/drive/folders/1CtZtpbIF4Znr7seb4qOw2qGDbl1KYI0_?usp=drive_link" },
  { artist: "Joanne Robertson", album: "Blurrr", released: "2025", spotify: "https://open.spotify.com/album/5WhOeAAZdZNuVPd0owQ88D" },
  { artist: "Johnny Cash", album: "Unchained", released: "1996", spotify: "https://open.spotify.com/album/59RjxVKpH3c80E4a86yP7b" },
  { artist: "Joni Mitchell", album: "Blue", released: "1971", spotify: "https://open.spotify.com/album/1vz94WpXDVYIEGja8cjFNa" },
  { artist: "Joni Mitchell", album: "The Hissing of Summer Lawns", released: "1975", spotify: "https://open.spotify.com/album/3gUlFM3azK6ZIkKz1zK7Nj" },
  { artist: "Kacey Musgraves", album: "Golden Hour", released: "2018", spotify: "https://open.spotify.com/album/7f6xPqyaolTiziKf5R5Z0c" },
  { artist: "Kate & Anna McGarrigle", album: "Kate & Anna McGarrigle", released: "1976", spotify: "https://open.spotify.com/album/4PtJUyTpyy4pkiNsPYfW0J" },
  { artist: "Laura Marling", album: "Song for Our Daughter", released: "2020", spotify: "https://open.spotify.com/album/0ubXthGSkZfe30Nuj91lcu" },
  { artist: "Loretta Lynn", album: "Van Lear Rose", released: "2004", spotify: "https://open.spotify.com/album/1vdwXqGngUmAfHx9M8LTyH" },
  { artist: "Lucinda Williams", album: "Car Wheels on a Gravel Road", released: "1998", spotify: "https://open.spotify.com/album/3iC6dJobZulVXp0F4Bojig" },
  { artist: "Lucinda Williams", album: "Essence", released: "2001", spotify: "https://open.spotify.com/album/657Le4PfHsbTniNxUYVPRH" },
  { artist: "Mount Eerie", album: "A Crow Looked at Me", released: "2017", spotify: "https://open.spotify.com/album/7hXqXOhAbmimMk1YoSApLb" },
  { artist: "Mount Eerie", album: "Night Palace", released: "2024", spotify: "https://open.spotify.com/album/7MrfHt0BhMpSDUocMjW0r9" },
  { artist: "Neil Young", album: "After the Gold Rush", released: "1970", spotify: "https://open.spotify.com/album/5EVlXlHbRQI8ybuNt4ArXI" },
  { artist: "Neil Young", album: "Harvest", released: "1972", spotify: "https://open.spotify.com/album/1pHo7X82cTObgZll65R1rW" },
  { artist: "Neil Young", album: "Mirror Ball", released: "1995", spotify: "https://open.spotify.com/album/6ae2GvnIQqf0oUf3AQiebC" },
  { artist: "Neil Young", album: "On the Beach", released: "1974", spotify: "https://open.spotify.com/album/3w5Hok05AFjCLy269xXM7e" },
  { artist: "Neil Young", album: "Sleeps with Angels", released: "1994", spotify: "https://open.spotify.com/album/1mZYNuRS343ByrirlbTK2N" },
  { artist: "Nick Drake", album: "Bryter Layter", released: "1971", spotify: "https://open.spotify.com/album/0B2E1w5T7PEbZIctZnnt9K" },
  { artist: "Nick Drake", album: "Pink Moon", released: "1972", spotify: "https://open.spotify.com/album/5f1wmSKPXzXaveRhDvI4jd" },
  { artist: "Old Scratch Revival Singers", album: "Oh, Didn't He Ramble", released: "2005", spotify: "https://open.spotify.com/album/0qiopNPgsQz1OV9MhPo7A7", link: "https://drive.google.com/drive/folders/1Q5FjqGKVtK_7UKip7DPDlEg_mnXBc40q?usp=drive_link", cover: "https://f4.bcbits.com/img/a1007035355_10.jpg" },
  { artist: "Pistol Annies", album: "Interstate Gospel", released: "2018", spotify: "https://open.spotify.com/album/0IXxmmlfSQxgJNWnNjHhgJ" },
  { artist: "Purple Mountains", album: "Purple Mountains", released: "2019", spotify: "https://open.spotify.com/album/6YM4MpYgz6BhIeqQkxp3u4" },
  { artist: "Regina Spektor", album: "Remember Us to Life", released: "2016", spotify: "https://open.spotify.com/album/6C0ZhA7FLKwguVU8BWfkeS" },
  { artist: "Richard and Linda Thompson", album: "Shoot Out the Lights", released: "1982", spotify: "https://open.spotify.com/album/0F883FD7gw4hmf9lKXOcF6" },
  { artist: "Richard Dawson", album: "2020", released: "2019", spotify: "https://open.spotify.com/album/6IDM4kjUWU82mzE7F9CB8R" },
  { artist: "Richard Thompson", album: "Henry the Human Fly", released: "1972", spotify: "https://open.spotify.com/album/4HEio8TGfOeggpOJaL9tIR" },
  { artist: "Rosanne Cash", album: "Interiors", released: "1990", spotify: "https://open.spotify.com/album/51FOZgsd4wLU1OYp9uplXS" },
  { artist: "Ryan Adams", album: "Demolition", released: "2002", spotify: "https://open.spotify.com/album/49QSCTbZrKSolEVBg8XzrN" },
  { artist: "Shelby Lynne", album: "I Am Shelby Lynne", released: "1999", spotify: "https://open.spotify.com/album/0pBQ3tNbRfGhynTUmKZ6eJ" },
  { artist: "Silvana Estrada", album: "Marchita", released: "2022", spotify: "https://open.spotify.com/album/0Y1tsEnH5gN8TEJRQ9xOLi" },
  { artist: "Simon & Garfunkel", album: "Bridge over Troubled Water", released: "1970", spotify: "https://open.spotify.com/album/0JwHz5SSvpYWuuCNbtYZoV" },
  { artist: "Son Volt", album: "Trace", released: "1995", spotify: "https://open.spotify.com/album/5secpXfB8n8zeDiA0l60K6" },
  { artist: "Steve Earle", album: "Jerusalem", released: "2002", spotify: "https://open.spotify.com/album/2alDoMx3PMJpXAnWAfRLrs" },
  { artist: "Sufjan Stevens", album: "Carrie & Lowell", released: "2015", spotify: "https://open.spotify.com/album/64xtjfsPHNHch0CZ7fPTjS" },
  { artist: "Sufjan Stevens", album: "Illinois", released: "2005", spotify: "https://open.spotify.com/album/1pOl0KEC1iQnA6F0XxV4To" },
  { artist: "Sufjan Stevens", album: "Javelin", released: "2023", spotify: "https://open.spotify.com/album/2KqSL3vLfyVO7rrZJL9tUs" },
  { artist: "Sufjan Stevens", album: "Michigan", released: "2003", spotify: "https://open.spotify.com/album/4mIfqTE8DOnFRFWUQH02Og" },
  { artist: "Sun Kil Moon", album: "Benji", released: "2014", spotify: "https://open.spotify.com/album/4KnFXX4nObGw6rq9aQmSyf" },
  { artist: "Sun Kil Moon", album: "Common as Light and Love Are Red Valleys of Blood", released: "2017", spotify: "https://open.spotify.com/album/45qQZfLyeAuYuAykNxblwY" },
  { artist: "The Byrds", album: "Mr. Tambourine Man", released: "1965", spotify: "https://open.spotify.com/album/3t77340gPGvAaJhdO4hEit" },
  { artist: "The Byrds", album: "The Notorious Byrd Brothers", released: "1968", spotify: "", link: "https://drive.google.com/drive/folders/1thltqcvF8zzRawSWuNPhGEMSAbFftFFv?usp=drive_link" },
  { artist: "The Byrds", album: "Younger Than Yesterday", released: "1967", spotify: "https://open.spotify.com/album/33puYJ2y5qANDenRmL8BS1" },
  { artist: "The Costello Show featuring The Attractions and the Confederates", album: "King Of America", released: "1986", spotify: "https://open.spotify.com/album/6zwFIyWKbdHi9mwrQcrEY1" },
  { artist: "The Mavericks", album: "What a Crying Shame", released: "1994", spotify: "https://open.spotify.com/album/04CuRKgpxxmsxt9xXMCysf" },
  { artist: "The Mekons", album: "Fear and Whiskey", released: "1985", spotify: "https://open.spotify.com/album/1zg9WoVOStqPNH0aJdrED7" },
  { artist: "The Pogues", album: "Rum Sodomy & the Lash", released: "1985", spotify: "https://open.spotify.com/album/2wRH4pcI8TIQFCK1MeByWO" },
  { artist: "Tallest Man on Earth", album: "Sometimes the Blues Is Just a Passing Bird", released: "2010", spotify: "https://open.spotify.com/album/5lCQtNmeRx4cI4UDwdv6Rn", type: "EP" },
  { artist: "Timber Timbre", album: "Creep On Creepin' On", released: "2011", spotify: "https://open.spotify.com/album/2tWkGlUTyWZcVsqryi8U1q" },
  { artist: "Townes Van Zandt", album: "Townes Van Zandt", released: "1969", spotify: "https://open.spotify.com/album/1vJiiYn8AfzjI9Hbmd28KC" },
  { artist: "Tracy Chapman", album: "Tracy Chapman", released: "1988", spotify: "https://open.spotify.com/album/6hmmX5UP4rIvOpGSaPerV8" },
  { artist: "Waxahatchee", album: "Saint Cloud", released: "2020", spotify: "https://open.spotify.com/album/04HMMwLmjkftjWy7xc6Bho" },
  { artist: "Waxahatchee", album: "Tigers Blood", released: "2024", spotify: "https://open.spotify.com/album/2n3HUMLmNl0Cm2atVwWSK6" },

  { artist: "", album: "", released: "", spotify: "" },

]);
