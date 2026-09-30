/* =====================================================================
   HOUSE STAFF PICKS
   ---------------------------------------------------------------------
   1) window  — the display on the Store Directory page, before anyone
                walks into a room. Shown in this order.
                spotify: is used for Play and the cover. If the same album
                is also filed in a room, that room's line is used instead,
                so editing it there updates the window too.

   2) always  — these are Staff Picks in whatever room they're filed in,
                automatically; no pick: true needed on their lines.
                Matching ignores capitals, punctuation, accents, a leading
                "The", "&" vs "and", and anything in (brackets), so
                "Sex Pistols" matches "The Sex Pistols" and
                "The Beatles" matches "The Beatles (White Album)".
                The artist can be shorter or longer by whole words:
                "Jimi Hendrix" matches "The Jimi Hendrix Experience".
                Add other names an album goes by with  also: ["..."].
   ===================================================================== */

window.HOUSE_PICKS = {

  window: [
    { artist: "Marvin Gaye", album: "What's Going On", released: "1971-05-21", spotify: "https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B" },
    { artist: "The Beatles", album: "Revolver", released: "1966-08-05", spotify: "https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR" },
    { artist: "Radiohead", album: "OK Computer", released: "1997-05-21", spotify: "https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE" },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back", released: "1988-06-28", spotify: "https://open.spotify.com/album/1Rj1daFzMlYzLv7lJl14hz" },
    { artist: "Nirvana", album: "Nevermind", released: "1991-09-24", spotify: "https://open.spotify.com/album/2tqNAmW9Q61osYJM7xdutO" },
    { artist: "The Beach Boys", album: "Pet Sounds", released: "1966-05-16", spotify: "https://open.spotify.com/album/2CNEkSE8TADXRT2AzcEt1b" },
    { artist: "Lauryn Hill", album: "The Miseducation of Lauryn Hill", released: "1998-08-25", spotify: "https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD" },
    { artist: "The Clash", album: "London Calling", released: "1979-12-14", spotify: "https://open.spotify.com/album/6FCzvataOZh68j8OKzOt9a" },
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", released: "1977-10-28", spotify: "https://open.spotify.com/album/5fxYu3rqjCNTSPKN8mtEl2" }
  ],

  always: [
    { artist: "A Tribe Called Quest", album: "The Low End Theory" },
    { artist: "Arcade Fire", album: "Funeral" },
    { artist: "Beastie Boys", album: "Paul's Boutique" },
    { artist: "Beck", album: "Odelay" },
    { artist: "Björk", album: "Post" },
    { artist: "Black Sabbath", album: "Paranoid" },
    { artist: "Bob Dylan", album: "Blonde on Blonde" },
    { artist: "Bob Dylan", album: "Blood on the Tracks" },
    { artist: "Bob Dylan", album: "Highway 61 Revisited" },
    { artist: "Bruce Springsteen", album: "Born to Run" },
    { artist: "D'Angelo", album: "Voodoo" },
    { artist: "David Bowie", album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", also: ["Ziggy Stardust"] },
    { artist: "DJ Shadow", album: "Endtroducing....." },
    { artist: "Dr. Dre", album: "The Chronic" },
    { artist: "Fleetwood Mac", album: "Rumours" },
    { artist: "Hole", album: "Live Through This" },
    { artist: "Jay-Z", album: "The Blueprint" },
    { artist: "The Jimi Hendrix Experience", album: "Are You Experienced" },
    { artist: "The Jimi Hendrix Experience", album: "Electric Ladyland" },
    { artist: "John Coltrane", album: "A Love Supreme" },
    { artist: "Joni Mitchell", album: "Blue" },
    { artist: "Joy Division", album: "Closer" },
    { artist: "Joy Division", album: "Unknown Pleasures" },
    { artist: "Kanye West", album: "My Beautiful Dark Twisted Fantasy" },
    { artist: "Kate Bush", album: "Hounds of Love" },
    { artist: "Kendrick Lamar", album: "To Pimp a Butterfly" },
    { artist: "Lauryn Hill", album: "The Miseducation of Lauryn Hill" },
    { artist: "Led Zeppelin", album: "Untitled aka Led Zeppelin IV", also: ["Led Zeppelin IV", "IV", "Untitled", "Four Symbols"] },
    { artist: "Marvin Gaye", album: "What's Going On" },
    { artist: "Massive Attack", album: "Blue Lines" },
    { artist: "Metallica", album: "Master of Puppets" },
    { artist: "Michael Jackson", album: "Thriller" },
    { artist: "Miles Davis", album: "Kind of Blue" },
    { artist: "My Bloody Valentine", album: "Loveless" },
    { artist: "Nas", album: "Illmatic" },
    { artist: "Nine Inch Nails", album: "The Downward Spiral" },
    { artist: "Nirvana", album: "In Utero" },
    { artist: "Nirvana", album: "Nevermind" },
    { artist: "The Notorious B.I.G.", album: "Ready to Die" },
    { artist: "Oasis", album: "Definitely Maybe" },
    { artist: "Oasis", album: "(What's the Story) Morning Glory?", also: ["What's the Story Morning Glory"] },
    { artist: "OutKast", album: "Aquemini" },
    { artist: "Patti Smith", album: "Horses" },
    { artist: "Pink Floyd", album: "The Dark Side of the Moon" },
    { artist: "PJ Harvey", album: "To Bring You My Love" },
    { artist: "Portishead", album: "Dummy" },
    { artist: "Primal Scream", album: "Screamadelica" },
    { artist: "Prince", album: "Sign O' the Times" },
    { artist: "Prince and the Revolution", album: "Purple Rain" },
    { artist: "Public Enemy", album: "It Takes a Nation of Millions to Hold Us Back" },
    { artist: "R.E.M.", album: "Automatic for the People" },
    { artist: "Radiohead", album: "Kid A" },
    { artist: "Radiohead", album: "OK Computer" },
    { artist: "Ramones", album: "Ramones" },
    { artist: "Sex Pistols", album: "Never Mind the Bollocks, Here's the Sex Pistols", also: ["Never Mind the Bollocks"] },
    { artist: "Stevie Wonder", album: "Innervisions" },
    { artist: "Stevie Wonder", album: "Songs in the Key of Life" },
    { artist: "Talking Heads", album: "Remain in Light" },
    { artist: "Television", album: "Marquee Moon" },
    { artist: "The Beach Boys", album: "Pet Sounds" },
    { artist: "The Beatles", album: "Abbey Road" },
    { artist: "The Beatles", album: "Revolver" },
    { artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band" },
    { artist: "The Beatles", album: "The Beatles (White Album)", also: ["The White Album", "White Album"] },
    { artist: "The Clash", album: "London Calling" },
    { artist: "The Clash", album: "The Clash" },
    { artist: "The Rolling Stones", album: "Exile on Main St." },
    { artist: "The Rolling Stones", album: "Let It Bleed" },
    { artist: "The Smiths", album: "The Queen Is Dead" },
    { artist: "The Stooges", album: "Fun House" },
    { artist: "The Stooges", album: "Raw Power" },
    { artist: "The Velvet Underground and Nico", album: "The Velvet Underground & Nico" },
    { artist: "Tricky", album: "Maxinquaye" },
    { artist: "U2", album: "The Joshua Tree" },
    { artist: "Van Morrison", album: "Astral Weeks" },
    { artist: "Wu-Tang Clan", album: "Enter the Wu-Tang (36 Chambers)", also: ["Enter the Wu-Tang: 36 Chambers"] }
  ]
};
