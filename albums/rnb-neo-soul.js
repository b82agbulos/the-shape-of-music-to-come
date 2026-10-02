/* R&B / Soul / Funk › Neo Soul
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

  { artist: "Anderson .Paak", album: "Malibu", released: "2016", spotify: "https://open.spotify.com/album/4VFG1DOuTeDMBjBLZT7hCK" },
  { artist: "Bilal", album: "1st Born Second", released: "2001", spotify: "https://open.spotify.com/album/1ilNAiReN4SWReFw8Qmt5U" },
  { artist: "Cody Chesnutt", album: "The Headphone Masterpiece", released: "2002", spotify: "" },
  { artist: "D'Angelo", album: "Brown Sugar", released: "1995", spotify: "https://open.spotify.com/album/1Owp8VOaFEk4r7zkvGOHmE", pick: true },
  { artist: "D'Angelo", album: "Voodoo", released: "2000", spotify: "https://open.spotify.com/album/2lO9yuuIDgBpSJzxTh3ai8" },
  { artist: "D'Angelo and the Vanguard", album: "Black Messiah", released: "2014", spotify: "https://open.spotify.com/album/5Hfbag0SsHxafx1SySFSX6" },
  { artist: "Dijon", album: "Baby", released: "2025", spotify: "" },
  { artist: "Erykah Badu", album: "Baduizm", released: "1997", spotify: "https://open.spotify.com/album/3qr4pTBWEU1SVf01j6RAx3", pick: true },
  { artist: "Erykah Badu", album: "Mama's Gun", released: "2000", spotify: "https://open.spotify.com/album/3cADvHRdKniF9ELCn1zbGH" },
  { artist: "Gnarls Barkley", album: "St. Elsewhere", released: "2006", spotify: "https://open.spotify.com/album/5I0Wf7lRLZArM1K2uQ1AEA" },
  { artist: "India Arie", album: "Acoustic Soul", released: "2001", spotify: "https://open.spotify.com/album/6ApdnTHD5zXzmZqxf0TA9Z" },
  { artist: "Jill Scott", album: "Who Is Jill Scott?: Words and Sounds Vol. 1", released: "2000", spotify: "https://open.spotify.com/album/620y2xi6SkUb6IZlnnWxuG" },
  { artist: "Lauryn Hill", album: "The Miseducation of Lauryn Hill", released: "1998", spotify: "https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD" },
  { artist: "Macy Gray", album: "The Id", released: "2001", spotify: "" },
  { artist: "Maxwell", album: "Maxwell's Urban Hang Suite", released: "1996", spotify: "https://open.spotify.com/album/2k5YAxjmAD3DmYtmlrY64p" },
  { artist: "Maxwell", album: "MTV Unplugged", released: "1997", spotify: "", type: "Live" },
  { artist: "Musiq Soulchild", album: "Aijuswanaseing", released: "2000", spotify: "https://open.spotify.com/album/2RmMKj20xouC3Mqq1CyZ3c" },
  { artist: "Rahsaan Patterson", album: "Rahsaan Patterson", released: "1997", spotify: "https://open.spotify.com/album/1uMPGRwlgCjpIxjGTjg93c" },
  { artist: "Res", album: "How I Do", released: "2001", spotify: "" },
  { artist: "Sampha", album: "Lahai", released: "2023", spotify: "" },
  { artist: "Solange", album: "A Seat at the Table", released: "2016", spotify: "https://open.spotify.com/album/3Yko2SxDk4hc6fncIBQlcM" },
  { artist: "Solange", album: "When I Get Home", released: "2019", spotify: "https://open.spotify.com/album/4WF4HvVT7VjGnVjxjoCR6w" },
  { artist: "Sudan Archives", album: "Natural Brown Prom Queen", released: "2022", spotify: "" },
  { artist: "SZA", album: "Ctrl", released: "2017", spotify: "https://open.spotify.com/album/76290XdXVF9rPzGdNRWdCh" },
  { artist: "SZA", album: "SOS", released: "2022", spotify: "" },
  { artist: "The Weeknd", album: "House of Balloons", released: "2011", spotify: "" },
  { artist: "Thundercat", album: "Apocalypse", released: "2013", spotify: "" },
  { artist: "Yaya Bey", album: "Remember Your North Star", released: "2022", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
