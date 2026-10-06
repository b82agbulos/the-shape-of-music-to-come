/* Playlists
   ---------
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
  /* Your playlists. The title goes in album and artist stays empty, so the sleeve shows just the title.
     link: the playlist's Google Drive folder; Play opens it in a new tab (the Drive app on phones that have it).
     cover: made by prepare-images.ps1 from images\playlists-covers\ (see README, "Playlist covers"). */

  { artist: "", album: "The Architecture of Improvisation", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1OgtDntv6LLH9FDZ34MogRw2SvWf-wJ70?usp=drive_link",
    cover: "images/playlists/the-architecture-of-improvisation.jpg" },
  { artist: "", album: "The Conscious Continuum", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1kMYJEom_e6-jpdqf4uwA9hPLa65Npkix?usp=drive_link",
    cover: "images/playlists/the-conscious-continuum.jpg" },
  { artist: "", album: "Analog Feedback Loop", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1VpeRWhJBgs9PnbK_BG1iSSU2Zkt3h4c1?usp=drive_link",
    cover: "images/playlists/analog-feedback-loop-neon-audio-circuit.jpg" },
  { artist: "", album: "Resonance of the Spheres", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/14IxWQuZmh8EB2Y-139GFQvWtVjmSLoAa?usp=drive_link",
    cover: "images/playlists/resonance-of-the-spheres.jpg" },
  { artist: "", album: "The Architecture of Intimacy", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1UEQo848C_5g8lhBAHGozYPmsqxRQGL8U?usp=drive_link",
    cover: "images/playlists/the-architecture-of-intimacy.jpg" },
  { artist: "", album: "Feedback Override", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1ovSU6-EGcQPTDRRtKEmuYkkymi1ASGs4?usp=drive_link",
    cover: "images/playlists/cybernetic-feedback-override.jpg" },
  { artist: "", album: "Flannel, Feedback, & Fury", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1-DyJZORnidEoFH8sBILNBtsCu1biQNks?usp=drive_link",
    cover: "images/playlists/flannel-feedback-fury.jpg" },
  { artist: "", album: "Programmed Soul", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1dnYVgcfe4Kw8pE0gkJ1KILVjhJQ4uvYb?usp=drive_link",
    cover: "images/playlists/programmed-soul-neon-circuitry.jpg" },
  { artist: "", album: "The Sampling Archive", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1bqJSrT-wWbBIkNcclKZHub1OK1-aifa1?usp=drive_link",
    cover: "images/playlists/the-sampling-archive-studio.jpg" },
  { artist: "", album: "The Signal Chain: The Studio Revolution", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1GBdzqHh3Z87meYrkcjW-vK-C3E2wzMFk?usp=drive_link",
    cover: "images/playlists/the-signal-chain-studio-revolution.jpg" },
  { artist: "", album: "The Signal Chain: Format Divergence", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/15xcY8kaNys6rmdCaEECH3YKal4S57Wbu?usp=drive_link",
    cover: "images/playlists/the-signal-chain-format-divergence.jpg" },
  { artist: "", album: "The Signal Chain: Digital Production Threshold", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1cPYbkDshpoboFbQAT6ymbQMTYXNjCPAE?usp=drive_link",
    cover: "images/playlists/the-signal-chain-analog-to-digital.jpg" },
  { artist: "", album: "The Signal Chain: Format Fragmentation", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1aEY64AMReCC-TdIokeQ0F5yZFQXFiXjg?usp=drive_link",
    cover: "images/playlists/the-signal-chain-format-fragmentation.jpg" },
  { artist: "", album: "The Signal Chain: Bandwidth Abundance", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/16RwKCWf8YustxuX5ThmhRoiPvhiHvK6p?usp=drive_link",
    cover: "images/playlists/the-signal-chain-bandwidth-abundance.jpg" },
  { artist: "", album: "The Signal Chain: Streaming Selection Pressure", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1jHHBgbyKTpMzPzsypns8RsiW5iioTV4J?usp=drive_link",
    cover: "images/playlists/the-signal-chain-streaming-selection-pressure.jpg" },
  { artist: "", album: "Turntable Composition", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1GHvp4pwzDP1aXlM5Os67jN2GUe9xgmMp?usp=drive_link",
    cover: "images/playlists/turntable-composition-at-twilight.jpg" },
  { artist: "", album: "Midnight Blue", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1DDQRK-YR93q5AyJgYGZ3MxLQ2TtnMhxT?usp=drive_link",
    cover: "images/playlists/midnight-blue-vinyl-lounge.jpg" },
  { artist: "", album: "Static in the Veins", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1g9qy1V_Z35j49q84n2xl1Moqg8f1oe6Q?usp=drive_link",
    cover: "images/playlists/static-in-the-veins.jpg" },
  { artist: "", album: "Onslaught", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1HLLZ8ibkuXqJV7m4vR6mB1JzdKg_Bgqy?usp=drive_link",
    cover: "images/playlists/onslaught-infernal-eclipse-fortress.jpg" },
  { artist: "", album: "Vortex", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1W6EsmEOjOPJQTYYdlLAFRQoYSsDOkll_?usp=drive_link",
    cover: "images/playlists/vortex-infernal-citadel-of-storms.jpg" },
  { artist: "", album: "Three Chords and Consequence", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/168X67QeZEel4Cs3r52K-OKzUdZJtBft8?usp=drive_link",
    cover: "images/playlists/three-chords-and-consequence.jpg" },
  { artist: "", album: "The Romance of Decay", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1IH9NZjVlbVtHFPXT7u4rxo1nby_ou1ab?usp=drive_link",
    cover: "images/playlists/the-romance-of-decay.jpg" },
  { artist: "", album: "Pick It Up, Pick It Up!", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1oqoh4Fxn2uZRTS2tap3CbSCzxT5Ilo3n?usp=drive_link",
    cover: "images/playlists/pick-it-up-ska-dance-party.jpg" },
  { artist: "", album: "Monoculture Remnants", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1B_i1YHbUT6sglv83NToNmgeylq4JxrTN?usp=drive_link",
    cover: "images/playlists/monoculture-remnants-neon-media-relics.jpg" },
  { artist: "", album: "The Permanent Collection", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1EqkPG9D8y4-AwaAqt5AJSJcWtS4UMHfY?usp=drive_link",
    cover: "images/playlists/the-permanent-collection-golden-vinyl-gallery.jpg" },
  { artist: "", album: "Amplification Lineage", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/19ZIIFQM6s_PaZbvfg058Y5O5A3x9eje2?usp=drive_link",
    cover: "images/playlists/amplification-lineage-a-guitar-tone-journey.jpg" },
  { artist: "", album: "Mediated Music: 1990-Present: The CD Wallet: A 90s Time Capsule", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1U0bxQavhm1wGIYiGwqNNxNftNnQHY67f?usp=drive_link",
    cover: "images/playlists/mediated-music-a-90s-time-capsule.jpg" },
  { artist: "", album: "Mediated Music: 1990-Present: Pre-Algorithm Gold Rush", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1TM3Da_JN3BGZymwbrg2JpElgyaYFPzE3?usp=drive_link",
    cover: "images/playlists/mediated-music-pre-algorithm-gold-rush.jpg" },
  { artist: "", album: "Mediated Music: 1990-Present: The Algorithm and the Abyss", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1Kizawv9i1lrfmWU-EMgPqKeo0sO0zMzy?usp=drive_link",
    cover: "images/playlists/mediated-music-algorithmic-abyss.jpg" },
  { artist: "", album: "Mediated Music: 1990-Present: Zenith", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1XC99ZEANQWFUK6ZQAQ2HwAbzcWOZWesh?usp=drive_link",
    cover: "images/playlists/mediated-music-zenith-cd-noir.jpg" },
  { artist: "", album: "Angst & Anthems", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1dRwHc8DEj19QstnY14KCiZIQwSZFIaAY?usp=drive_link",
    cover: "images/playlists/angst-anthems-gritty-rock-collage.jpg" },
  { artist: "", album: "Industrial Strength Anger", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1i0IQAN5YYzCJDcMeTV_WoL4hmfNT-9GS?usp=drive_link",
    cover: "images/playlists/industrial-strength-anger-unleashed.jpg" },
  { artist: "", album: "Breakbeat Maximalism", released: "", spotify: "",
    link: "https://drive.google.com/drive/folders/1JjG7sd2bdkPz1-NEzFZA_8trge0D2-Ku?usp=drive_link",
    cover: "images/playlists/breakbeat-maximalism.jpg" },

  { artist: "", album: "", released: "", spotify: "", link: "", cover: "" },

]);
