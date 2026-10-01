/* Rock / Classic Rock / Roots Rock / Blues Rock
   ---------------------------------------------
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

  { artist: "AC/DC", album: "Back in Black", released: "1980", spotify: "https://open.spotify.com/album/6mUdeDZCsExyJLMdAfDuwh" },
  { artist: "AC/DC", album: "Highway to Hell", released: "1979", spotify: "https://open.spotify.com/album/10v912xgTZbjAtYfyKWJCS" },
  { artist: "Aerosmith", album: "Rocks", released: "1976", spotify: "https://open.spotify.com/album/4ldiyfqRvKiIasHHuDftuP" },
  { artist: "Alice Cooper", album: "Brutally Live", released: "2000", spotify: "", type: "Live" },
  { artist: "Alice Cooper", album: "Welcome To My Nightmare", released: "1975", spotify: "https://open.spotify.com/album/4QhvqS4OQ4Lxe78Bafn8VH" },
  { artist: "Blue Cheer", album: "Vincebus Eruptum", released: "1968", spotify: "" },
  { artist: "Boston", album: "Boston", released: "1976", spotify: "https://open.spotify.com/album/2QLp07RO6anZHmtcKTEvSC" },
  { artist: "Bruce Springsteen", album: "Born in the U.S.A.", released: "1984", spotify: "https://open.spotify.com/album/0PMasrHdpaoIRuHuhHp72O" },
  { artist: "Bruce Springsteen", album: "Born to Run", released: "1975", spotify: "https://open.spotify.com/album/43YIoHKSrEw2GJsWmhZIpu" },
  { artist: "Bruce Springsteen", album: "Darkness on the Edge of Town", released: "1978", spotify: "https://open.spotify.com/album/4KT6G8fj8EEIfsyr75hbgc" },
  { artist: "Bruce Springsteen", album: "The River", released: "1980", spotify: "https://open.spotify.com/album/6YNIEeDWqC09YIWzhoSVLg" },
  { artist: "Cold Chisel", album: "Circus Animals", released: "1982", spotify: "" },
  { artist: "Cream", album: "Disraeli Gears", released: "1967", spotify: "https://open.spotify.com/album/6fRqzJT070Kp9RWlSXmKcY" },
  { artist: "Cream", album: "Wheels of Fire", released: "1968", spotify: "https://open.spotify.com/album/0zrtTZC7yY2TOEhnbJzSb9" },
  { artist: "Crosby, Stills, Nash & Young", album: "Déjà Vu", released: "1970", spotify: "https://open.spotify.com/album/5bHkK1X4WEOzNvRhehvOcb" },
  { artist: "Danny Gatton", album: "88 Elmira St.", released: "1991", spotify: "" },
  { artist: "David Bowie", album: "Blackstar", released: "2016", spotify: "https://open.spotify.com/album/2w1YJXWMIco6EBf0CovvVN" },
  { artist: "David Bowie", album: "Hunky Dory", released: "1971", spotify: "https://open.spotify.com/album/6fQElzBNTiEMGdIeY0hy5l" },
  { artist: "David Bowie", album: "Low", released: "1977", spotify: "https://open.spotify.com/album/2de6LD7eOW8zrlorbS28na" },
  { artist: "David Bowie", album: "Outside", released: "1995", spotify: "" },
  { artist: "David Bowie", album: "Station to Station", released: "1976", spotify: "https://open.spotify.com/album/0MWrKayUshRuT8maG4ZAOU" },
  { artist: "David Bowie", album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars", released: "1972", spotify: "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56" },
  { artist: "David Bowie", album: "Young Americans", released: "1975", spotify: "" },
  { artist: "Dead Meadow", album: "Feathers", released: "2005", spotify: "" },
  { artist: "Dean Madonia", album: "Shadow to Shadow - Dean Madonia's Frankenstein", released: "2013", spotify: "" },
  { artist: "Deep Purple", album: "Machine Head", released: "1972", spotify: "https://open.spotify.com/album/1EK3a0Yctg4d3nGQzE4Uty" },
  { artist: "Def Leppard", album: "High 'n' Dry", released: "1981", spotify: "https://open.spotify.com/album/2FC50FeHFVmksOYX1cymxr" },
  { artist: "Def Leppard", album: "Hysteria", released: "1987", spotify: "https://open.spotify.com/album/1ja2qzCrh6bZykcojbZs82" },
  { artist: "Def Leppard", album: "Pyromania", released: "1983", spotify: "https://open.spotify.com/album/5ab6RIlAGwbVAacV1JIr2d" },
  { artist: "Derek and the Dominos", album: "Layla and Other Assorted Love Songs", released: "1970", spotify: "https://open.spotify.com/album/5iIWnMgvSM8uEBwXKsPcXM" },
  { artist: "Dire Straits", album: "Brothers in Arms", released: "1985", spotify: "https://open.spotify.com/album/7jvcSnCnugLcisBCNBm60s" },
  { artist: "Eagles", album: "Hotel California", released: "1976", spotify: "https://open.spotify.com/album/2widuo17g5CEC66IbzveRu" },
  { artist: "Family", album: "Music in a Doll's House", released: "1968", spotify: "" },
  { artist: "Fleetwood Mac", album: "Rumours", released: "1977", spotify: "https://open.spotify.com/album/63k57x0qOkUWEMR0dkMivh" },
  { artist: "Frank Marino & Mahogany Rush", album: "Live", released: "1978", spotify: "", type: "Live" },
  { artist: "Gein And The Graverobbers", album: "The Passion Of The Anti-Christ", released: "2018", spotify: "" },
  { artist: "Graham Parker", album: "Squeezing Out Sparks", released: "1979", spotify: "https://open.spotify.com/album/4ZImzDF35hQWiN5FdAqQbN" },
  { artist: "Guns N' Roses", album: "Appetite for Destruction", released: "1987", spotify: "https://open.spotify.com/album/3I9Z1nDCL4E0cP62flcbI5" },
  { artist: "Guns N' Roses", album: "Use Your Illusion I", released: "1991", spotify: "https://open.spotify.com/album/4L5pz06MVlsWaTEjSQPN8h" },
  { artist: "Hanoi Rocks", album: "Two Steps from the Move", released: "1984", spotify: "" },
  { artist: "Hawkwind", album: "The Space Ritual Alive in Liverpool and London (Space Ritual)", released: "1973", spotify: "", type: "Live" },
  { artist: "Hunters & Collectors", album: "Human Frailty", released: "1986", spotify: "" },
  { artist: "Jeff Beck", album: "Blow by Blow", released: "1975", spotify: "https://open.spotify.com/album/3PZSoJCzPos29legd35FAu" },
  { artist: "Jeff Beck", album: "Truth", released: "1968", spotify: "" },
  { artist: "Jethro Tull", album: "Stand Up", released: "1969", spotify: "" },
  { artist: "Joe Satriani", album: "Surfing with the Alien", released: "1987", spotify: "" },
  { artist: "John Lennon", album: "Imagine", released: "1971", spotify: "https://open.spotify.com/album/0xzaemKucrJpYhyl7TltAk" },
  { artist: "John Lennon", album: "John Lennon/Plastic Ono Band", released: "1970", spotify: "https://open.spotify.com/album/0DFYbYCcHCEJPcN1hODG6K" },
  { artist: "John Mellencamp", album: "Human Wheels", released: "1993", spotify: "" },
  { artist: "Kiss", album: "Alive!", released: "1975", spotify: "https://open.spotify.com/album/6TRmLIsPKSPS71Cnq8FiMc", type: "Live" },
  { artist: "Led Zeppelin", album: "Led Zeppelin", released: "1969", spotify: "https://open.spotify.com/album/1J8QW9qsMLx3staWaHpQmU" },
  { artist: "Led Zeppelin", album: "Led Zeppelin II", released: "1969", spotify: "https://open.spotify.com/album/70lQYZtypdCALtFVlQAcvx" },
  { artist: "Led Zeppelin", album: "Untitled (Led Zeppelin IV)", released: "1971", spotify: "https://open.spotify.com/album/1Ugdi2OTxKopVVqsprp5pb" },
  { artist: "Led Zeppelin", album: "Physical Graffiti", released: "1975", spotify: "https://open.spotify.com/album/4Q7cPyiP8cMIlUEHAqeYfd" },
  { artist: "Link Wray", album: "Link Wray", released: "1971", spotify: "" },
  { artist: "Los Lobos", album: "Colossal Head", released: "1996", spotify: "" },
  { artist: "Los Lobos", album: "Kiko", released: "1992", spotify: "" },
  { artist: "Lou Reed", album: "Transformer", released: "1972", spotify: "https://open.spotify.com/album/5SqbMEyAt8332ISGiLX0St" },
  { artist: "Love", album: "Forever Changes", released: "1967", spotify: "https://open.spotify.com/album/2amHBpP8C0EUy6yBNy6nN6" },
  { artist: "Lynyrd Skynyrd", album: "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", released: "1973", spotify: "https://open.spotify.com/album/6DExt1eX4lflLacVjHHbOs" },
  { artist: "Lynyrd Skynyrd", album: "One More from the Road", released: "1976", spotify: "", type: "Live" },
  { artist: "Moby Grape", album: "Moby Grape", released: "1967", spotify: "https://open.spotify.com/album/5MTUjDTUWFuyhWW7oRqqmi" },
  { artist: "Poison", album: "Look What the Cat Dragged In", released: "1986", spotify: "https://open.spotify.com/album/0xOBnypzEh4WKROJ51LL09" },
  { artist: "Queen", album: "A Night at the Opera", released: "1975", spotify: "https://open.spotify.com/album/7HVoV2lgVsmuiHsjbbUJB4" },
  { artist: "Rod Stewart", album: "Every Picture Tells a Story", released: "1971", spotify: "https://open.spotify.com/album/4VykjLwkyfKMZVLrJJVrYh" },
  { artist: "Rod Stewart", album: "Gasoline Alley", released: "1970", spotify: "" },
  { artist: "Roy Buchanan", album: "Roy Buchanan", released: "1972", spotify: "" },
  { artist: "Steely Dan", album: "Countdown To Ecstasy", released: "1973", spotify: "https://open.spotify.com/album/3VwMlhrc3Z0YON3UNV0VSC" },
  { artist: "Stevie Ray Vaughan", album: "Texas Flood", released: "1983", spotify: "https://open.spotify.com/album/1AL5oXZRtTc8PyhcTwg4xQ" },
  { artist: "Stevie Ray Vaughan", album: "The Sky Is Crying", released: "1991", spotify: "" },
  { artist: "Stevie Ray Vaughan and Double Trouble", album: "The Essential Stevie Ray Vaughan and Double Trouble", released: "2002", spotify: "https://open.spotify.com/album/4dShhtGUjPunYS95jHOm3r" },
  { artist: "The Allman Brothers Band", album: "At Fillmore East", released: "1971", spotify: "https://open.spotify.com/album/0Y5Wlv2OJKaW0uDJ5HnUfy", type: "Live" },
  { artist: "The Band", album: "Music from Big Pink", released: "1968", spotify: "https://open.spotify.com/album/0ky5kdvfPxSmSpj03hpSAE" },
  { artist: "The Band", album: "The Band", released: "1969", spotify: "https://open.spotify.com/album/4vXFiaDS8zuEl5bOUbW53x" },
  { artist: "The Beatles", album: "A Hard Day's Night", released: "1964", spotify: "https://open.spotify.com/album/6wCttLq0ADzkPgtRnUihLV" },
  { artist: "The Beatles", album: "Abbey Road", released: "1969", spotify: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN" },
  { artist: "The Beatles", album: "Please Please Me", released: "1963", spotify: "https://open.spotify.com/album/3KzAvEXcqJKBF97HrXwlgf" },
  { artist: "The Beatles", album: "Revolver", released: "1966", spotify: "https://open.spotify.com/album/3PRoXYsngSwjEQWR5PsHWR" },
  { artist: "The Beatles", album: "Rubber Soul", released: "1965", spotify: "https://open.spotify.com/album/50o7kf2wLwVmOTVYJOTplm" },
  { artist: "The Beatles", album: "Sgt. Pepper's Lonely Hearts Club Band", released: "1967", spotify: "https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW" },
  { artist: "The Beatles", album: "The Beatles (The White Album)", released: "1968", spotify: "https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL" },
  { artist: "The Beatles", album: "With the Beatles", released: "1963", spotify: "https://open.spotify.com/album/1aYdiJk6XKeHWGO3FzHHTr" },
  { artist: "The Crazy World of Arthur Brown", album: "The Crazy World of Arthur Brown", released: "1968", spotify: "" },
  { artist: "The Doors", album: "L.A. Woman", released: "1971", spotify: "https://open.spotify.com/album/7IKUTIc9UWuVngyGPtqNHS" },
  { artist: "The Doors", album: "Strange Days", released: "1967", spotify: "https://open.spotify.com/album/6v5IVMmY1IvWtbfnQoiFSf" },
  { artist: "The Doors", album: "The Doors", released: "1967", spotify: "https://open.spotify.com/album/1jWmEhn3ggaL6isoyLfwBn" },
  { artist: "The Gun Club", album: "Fire of Love", released: "1981", spotify: "" },
  { artist: "The Jimi Hendrix Experience", album: "Are You Experienced", released: "1967", spotify: "https://open.spotify.com/album/7rSZXXHHvIhF4yUFdaOCy9" },
  { artist: "The Jimi Hendrix Experience", album: "Axis: Bold As Love", released: "1967", spotify: "https://open.spotify.com/album/3uFZf8rykoHo7XMIQVYW6r" },
  { artist: "The Jimi Hendrix Experience", album: "Electric Ladyland", released: "1968", spotify: "https://open.spotify.com/album/5z090LQztiqh13wYspQvKQ" },
  { artist: "The Kinks", album: "The Kinks Are the Village Green Preservation Society", released: "1968", spotify: "https://open.spotify.com/album/10c0h2wJ40mTjfIM5B0Lwr" },
  { artist: "The Moon-Rays", album: "Sinister Surf", released: "2006", spotify: "" },
  { artist: "The Moon-Rays", album: "Something Wicked", released: "2014", spotify: "" },
  { artist: "The Moon-Rays", album: "Swingin' At the Séance", released: "2008", spotify: "" },
  { artist: "The Moon-Rays", album: "The Bat", released: "2014", spotify: "" },
  { artist: "The Moon-Rays", album: "The Ghouls Go West", released: "2004", spotify: "" },
  { artist: "The Moon-Rays", album: "Thrills and Chills", released: "2002", spotify: "" },
  { artist: "The Rolling Stones", album: "Beggars Banquet", released: "1968", spotify: "https://open.spotify.com/album/6OHri5qNxwCdVSdyCslspd" },
  { artist: "The Rolling Stones", album: "Exile on Main St.", released: "1972", spotify: "https://open.spotify.com/album/5U4dnRZsfW8NmwBBkELFPh" },
  { artist: "The Rolling Stones", album: "Let It Bleed", released: "1969", spotify: "https://open.spotify.com/album/47hOpZQfXVIRzTiv0Ef8pO" },
  { artist: "The Rolling Stones", album: "Sticky Fingers", released: "1971", spotify: "https://open.spotify.com/album/29m6DinzdaD0OPqWKGyMdz" },
  { artist: "The Rolling Stones", album: "The Rolling Stones", released: "1964", spotify: "" },
  { artist: "The Route 66 Killers", album: "Murder On Beaver Street", released: "2003", spotify: "" },
  { artist: "The Voodoo Organist", album: "Exotic Demonic Blues", released: "2012", spotify: "" },
  { artist: "The Who", album: "Live at Leeds", released: "1970", spotify: "https://open.spotify.com/album/6W3aTLI4B5UsPpWMvhT2W4", type: "Live" },
  { artist: "The Who", album: "My Generation", released: "1965", spotify: "https://open.spotify.com/album/6Oc6Ok1Oawu8lRkjmD4mXy" },
  { artist: "The Who", album: "The Who Sell Out", released: "1967", spotify: "https://open.spotify.com/album/2nSduHVT17MPQCehfMRPG6" },
  { artist: "The Who", album: "Tommy", released: "1969", spotify: "https://open.spotify.com/album/2srjzxgFaYLNh8UlJPAJ8b" },
  { artist: "The Who", album: "Who's Next", released: "1971", spotify: "https://open.spotify.com/album/5mQnSrc0cFV6greyhJJIR6" },
  { artist: "Thin Lizzy", album: "Jailbreak", released: "1976", spotify: "https://open.spotify.com/album/6Cf545T4jkaiyvMnTRPOB2" },
  { artist: "Traffic", album: "Traffic", released: "1968", spotify: "https://open.spotify.com/album/0HXUEUFACh0b3VBhm7jBhi" },
  { artist: "Van Halen", album: "1984", released: "1984", spotify: "https://open.spotify.com/album/6x2n6wj3WvkRi8J8gxEcF0" },
  { artist: "Van Halen", album: "Van Halen", released: "1978", spotify: "https://open.spotify.com/album/7DdEbYFPKTZ8KB4z6L4UnQ" },
  { artist: "Van Halen", album: "Van Halen II", released: "1979", spotify: "https://open.spotify.com/album/4eYRJKNF2HAytIvQtoasLc" },
  { artist: "Van Halen", album: "Women and Children First", released: "1980", spotify: "" },
  { artist: "Van Morrison", album: "Astral Weeks", released: "1968", spotify: "https://open.spotify.com/album/4pG3bKkbmReDt5QTDn3JDz" },
  { artist: "Van Morrison", album: "Moondance", released: "1970", spotify: "https://open.spotify.com/album/5PfnCqRbdfIDMb1x3MPQam" },
  { artist: "Various Artists", album: "They Came From Outer Space: The Alien Songbook", released: "1998", spotify: "" },

  { artist: "", album: "", released: "", spotify: "" },

]);
