/* R&B / Soul / Funk
   -----------------
   Records filed under R&B / Soul / Funk but NOT in one of its sections.
   The sections have their own files:
     albums/rnb-neo-soul.js   (Neo Soul)

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

  { artist: "Aaliyah", album: "One in a Million", released: "1996", spotify: "https://open.spotify.com/album/79EIRdmpPSIWfRlxaZdJbG" },
  { artist: "Al Green", album: "Call Me", released: "1973", spotify: "https://open.spotify.com/album/1hryVGXoRLV9WAhO97xEDJ" },
  { artist: "Al Green", album: "Cream of Al Green", released: "1980", spotify: "" },
  { artist: "Al Green", album: "I'm Still in Love with You", released: "1972", spotify: "https://open.spotify.com/album/7hI0QCwcx9GB8MZK24IfTT" },
  { artist: "Amy Winehouse", album: "Back to Black", released: "2006", spotify: "https://open.spotify.com/album/097eYvf9NKjFnv4xA9s2oV" },
  { artist: "Anohni and the Johnsons", album: "My Back Was a Bridge for You to Cross", released: "2023", spotify: "" },
  { artist: "Aretha Franklin", album: "Aretha Now", released: "1968", spotify: "" },
  { artist: "Aretha Franklin", album: "Aretha's Greatest Hits", released: "1971", spotify: "" },
  { artist: "Aretha Franklin", album: "I Never Loved a Man the Way I Love You", released: "1967", spotify: "https://open.spotify.com/album/5WndWfzGwCkHzAbQXVkg2V" },
  { artist: "Aretha Franklin", album: "Lady Soul", released: "1968", spotify: "https://open.spotify.com/album/7lEOKZaOpqP70UYqdLPejG" },
  { artist: "Aretha Franklin", album: "Queen of Soul", released: "1968", spotify: "" },
  { artist: "Aretha Franklin", album: "Spirit in the Dark", released: "1970", spotify: "" },
  { artist: "Beyoncé", album: "Beyoncé", released: "2013", spotify: "" },
  { artist: "Beyoncé", album: "Beyoncé (Platinum Edition)", released: "2014", spotify: "https://open.spotify.com/album/2UJwKSBUz6rtW4QLK74kQu" },
  { artist: "Beyoncé", album: "Lemonade", released: "2016", spotify: "https://open.spotify.com/album/7dK54iZuOxXFarGhXwEXfF" },
  { artist: "Beyoncé", album: "Renaissance", released: "2022", spotify: "" },
  { artist: "Bobby Womack", album: "The Poet", released: "1981", spotify: "" },
  { artist: "Bobby Womack", album: "Understanding", released: "1972", spotify: "" },
  { artist: "Boyz II Men", album: "Cooleyhighharmony", released: "1991", spotify: "https://open.spotify.com/album/3riDn321q9TNeS1YOSzkv7" },
  { artist: "Boyz II Men", album: "II", released: "1994", spotify: "https://open.spotify.com/album/1IWhZEOwEoXbOB4a40XaR3" },
  { artist: "Brandy", album: "Never Say Never", released: "1998", spotify: "https://open.spotify.com/album/1Co6e9ag1gRKcWdG7xKcCi" },
  { artist: "Chic", album: "C'est Chic", released: "1978", spotify: "" },
  { artist: "Chic", album: "Risqué", released: "1979", spotify: "https://open.spotify.com/album/7rAk4WPpYlYr0fElVfXTOF" },
  { artist: "Chico DeBarge", album: "Long Time No See", released: "1997", spotify: "https://open.spotify.com/album/5NXBYIr7OScDZfI02pIAKD" },
  { artist: "Craig David", album: "Born to Do It", released: "2000", spotify: "https://open.spotify.com/album/5TedEgCbtmvDnXzUtXEFJY" },
  { artist: "Curtis Mayfield", album: "Curtis", released: "1970", spotify: "https://open.spotify.com/album/1e7dJKGZZaPEsge725g2S8" },
  { artist: "Curtis Mayfield", album: "Super Fly", released: "1972", spotify: "https://open.spotify.com/album/5ljIGCRRvS48V4ADzPGav2" },
  { artist: "Donell Jones", album: "Where I Wanna Be", released: "1999", spotify: "https://open.spotify.com/album/01riz9JMpPdL99fYhoZaph" },
  { artist: "Dusty Springfield", album: "Dusty In Memphis", released: "1969", spotify: "https://open.spotify.com/album/14UrtAcLym4a6f7IgXVGjF" },
  { artist: "Earth Wind & Fire", album: "That's the Way of the World", released: "1975", spotify: "https://open.spotify.com/album/5tXZfxvr2VaWibD74nw8VL" },
  { artist: "Faith Evans", album: "Faith", released: "1995", spotify: "https://open.spotify.com/album/36G7gDkkRckUGU7lgG6nev" },
  { artist: "Frank Ocean", album: "Blonde", released: "2016", spotify: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf" },
  { artist: "Frank Ocean", album: "Channel Orange", released: "2012", spotify: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8" },
  { artist: "Funkadelic", album: "Maggot Brain", released: "1971", spotify: "https://open.spotify.com/album/3ywVzrwMQ3Kq43N9zBdBQm" },
  { artist: "Isaac Hayes", album: "The Isaac Hayes Movement", released: "1970", spotify: "" },
  { artist: "James Brown", album: "Live And Lowdown At The Apollo, Vol.1", released: "1980", spotify: "", type: "Live" },
  { artist: "James Brown", album: "Solid Gold: 30 Golden Hits", released: "1977", spotify: "" },
  { artist: "James Brown", album: "There It Is", released: "1972", spotify: "" },
  { artist: "James Brown and the Famous Flames", album: "Live At The Apollo", released: "1963", spotify: "", type: "Live" },
  { artist: "Janet Jackson", album: "Control", released: "1986", spotify: "https://open.spotify.com/album/7GWkceE5McMVfffd1RGL6Y" },
  { artist: "Janet Jackson", album: "Janet", released: "1993", spotify: "https://open.spotify.com/album/7qIuZgsMkRuh7rzi4qVcpg" },
  { artist: "Janet Jackson", album: "The Velvet Rope", released: "1997", spotify: "https://open.spotify.com/album/1uFp52Q9EXLNA6DTRYnpTj" },
  { artist: "Jazmine Sullivan", album: "Heaux Tales", released: "2021", spotify: "" },
  { artist: "Jodeci", album: "Diary of a Mad Band", released: "1993", spotify: "https://open.spotify.com/album/4Q8fGnbtJ3z3spSAmmz1A9" },
  { artist: "Jodeci", album: "Forever My Lady", released: "1991", spotify: "https://open.spotify.com/album/2u41wsU4YVTbtOTCapKLe7" },
  { artist: "Jon B", album: "Cool Relax", released: "1997", spotify: "https://open.spotify.com/album/4OLSMLHNl7Nf8wwsxnxqwJ" },
  { artist: "Keith Sweat", album: "Keith Sweat", released: "1996", spotify: "https://open.spotify.com/album/0BzXvdpUKDEk612hLc6rZV" },
  { artist: "Kelela", album: "Take Me Apart", released: "2017", spotify: "" },
  { artist: "Mariah Carey", album: "Butterfly", released: "1997", spotify: "" },
  { artist: "Marvin Gaye", album: "Let's Get It On", released: "1973", spotify: "https://open.spotify.com/album/1oIICL75sMuInkEhX8jj3b" },
  { artist: "Marvin Gaye", album: "What's Going On", released: "1971", spotify: "https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B" },
  { artist: "Mary J. Blige", album: "My Life", released: "1994", spotify: "https://open.spotify.com/album/1OQ5l5rHKqUumPpn559zJC" },
  { artist: "Mary J. Blige", album: "Share My World", released: "1997", spotify: "https://open.spotify.com/album/11s3RAPMk0LpsZhuniepSW" },
  { artist: "Miguel", album: "Wildheart", released: "2015", spotify: "" },
  { artist: "Nourished by Time", album: "Erotic Probiotic 2", released: "2023", spotify: "" },
  { artist: "Nourished by Time", album: "The Passionate Ones", released: "2025", spotify: "" },
  { artist: "Otis Redding", album: "Complete & Unbelievable: The Otis Redding Dictionary of Soul", released: "1966", spotify: "https://open.spotify.com/album/0WfED1nqBzTMxv0NvnUNjf" },
  { artist: "Otis Redding", album: "Otis Blue/Otis Redding Sings Soul", released: "1965", spotify: "https://open.spotify.com/album/68BCjMsHX4Gf11BJSkjwGz" },
  { artist: "Parliament", album: "Mothership Connection", released: "1975", spotify: "https://open.spotify.com/album/4q1HNSka8CzuLvC8ydcsD2" },
  { artist: "Prince", album: "Sign o' the Times", released: "1987", spotify: "https://open.spotify.com/album/2QuHyvguNhl5kfdoE17RRe" },
  { artist: "Prince And The Revolution", album: "Purple Rain", released: "1984", spotify: "https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc" },
  { artist: "R. Kelly", album: "R.", released: "1998", spotify: "" },
  { artist: "R. Kelly", album: "R. Kelly", released: "1995", spotify: "" },
  { artist: "Raphael Saadiq", album: "Stone Rollin'", released: "2011", spotify: "https://open.spotify.com/album/26orrccGqNXm1m6mr9OO91" },
  { artist: "Rihanna", album: "Anti", released: "2016", spotify: "https://open.spotify.com/album/48i37aZTC1prDr4EcpQeEa" },
  { artist: "Sade", album: "Diamond Life", released: "1984", spotify: "https://open.spotify.com/album/3JcNnjMVSKiNpqhErZarW0" },
  { artist: "Sade", album: "Love Deluxe", released: "1992", spotify: "https://open.spotify.com/album/2PfGKHtqEX58bHtkQxJnWG" },
  { artist: "Sam Cooke", album: "Night Beat", released: "1963", spotify: "" },
  { artist: "Sly and the Family Stone", album: "Greatest Hits", released: "1970", spotify: "https://open.spotify.com/album/0UM9SydcBtsklCTFgGLvcT" },
  { artist: "Sly and the Family Stone", album: "There's a Riot Goin' On", released: "1971", spotify: "https://open.spotify.com/album/29f2cOueckYE8Nc1pkJjrU" },
  { artist: "Stevie Wonder", album: "Innervisions", released: "1973", spotify: "https://open.spotify.com/album/5jgI8Eminx9MmLBontDWq8" },
  { artist: "Stevie Wonder", album: "Songs in the Key of Life", released: "1976", spotify: "https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0" },
  { artist: "Stevie Wonder", album: "Talking Book", released: "1972", spotify: "https://open.spotify.com/album/3PResMqFgQYBfzTnqTKwQw" },
  { artist: "The Impressions", album: "The Impressions' Greatest Hits (Big Sixteen)", released: "1965", spotify: "" },
  { artist: "The Miracles", album: "Anthology", released: "1974", spotify: "" },
  { artist: "The O'Jays", album: "Ship Ahoy", released: "1973", spotify: "" },
  { artist: "The Temptations", album: "Anthology", released: "1974", spotify: "" },
  { artist: "The Temptations", album: "Sky's the Limit", released: "1971", spotify: "" },
  { artist: "TLC", album: "CrazySexyCool", released: "1994", spotify: "https://open.spotify.com/album/5eg56dCpFn32neJak2vk0f" },
  { artist: "Toni Braxton", album: "Secrets", released: "1996", spotify: "https://open.spotify.com/album/6rxtWZH5ua9eANwWdwwf9o" },
  { artist: "Toni Braxton", album: "Toni Braxton", released: "1993", spotify: "https://open.spotify.com/album/73ojqvZakvdkBxSg9pyPqz" },
  { artist: "Tony! Toni! Toné!", album: "Hits", released: "1997", spotify: "" },
  { artist: "War", album: "The World Is a Ghetto", released: "1972", spotify: "https://open.spotify.com/album/4UZmpGH8kpAgyZ2yqQ8sP9" },

  { artist: "", album: "", released: "", spotify: "" },

]);
