/* =====================================================================
   THE SHAPE OF MUSIC TO COME — store layout
   ---------------------------------------------------------------------
   Every room, sub-room and sub-sub-room lives here. Order in this file
   = order in the Store Directory and the "next room" walk.

   Room fields
     id      short id, unique among its siblings. The full id is the path,
             e.g. "metal/thrash". Its album file is albums/<full-id-with-dashes>.js
             (albums/metal-thrash.js) and its picture images/rooms/metal-thrash.jpg
     name    what the sign says
     wing    top-level rooms only: "floor" (genres) or "back" (specialty)
     accent  neon colour for this room (sub-rooms inherit if omitted)
     img     leave out  -> uses images/rooms/<full-id-with-dashes>.jpg
             false      -> no image of its own; borrows its parent's
             "some-slug"-> uses images/rooms/some-slug.jpg
     crateImg  optional banner shown above the room's own bins
     blurb   optional one-liner shown under the room sign
     subs    child rooms (shown ABOVE the room's own records)
   ===================================================================== */

window.SHOP = {
  name: "The Shape of Music to Come",
  storefront: "images/rooms/storefront.jpg",
  defaultAccent: "#f4b048",

  /* Currently Playing — Last.fm (same account Melodic Mosaic uses) */
  lastfm: {
    user: "bagbulos82",
    apiKey: "efb001211a1a43834081d3889119e0b9",
    pollSeconds: 30
  },

  wings: [
    { id: "floor", label: "The Floor",  note: "Genre rooms" },
    { id: "back",  label: "Back Rooms", note: "Seasonal, spoken & specialty" }
  ],

  rooms: [
    { id: "blues", wing: "floor", name: "Blues / Early R&B / Rock 'n' Roll", accent: "#5b9cf0" },
    { id: "classical", wing: "floor", name: "Classical / Orchestral", accent: "#e2cc8f" },

    { id: "electronic", wing: "floor", name: "Electronic", accent: "#3fd7ff", subs: [
      { id: "bass",     name: "Bass / Breakbeat / Jungle–DnB / Dubstep / UKG", accent: "#b6ff3b" },
      { id: "dance",    name: "Dance / House / Techno / Big Beat", accent: "#ff4fd8" },
      { id: "idm",      name: "IDM / Ambient / Glitch / Experimental", accent: "#9b8bff" },
      { id: "trip-hop", name: "Trip-Hop / Downtempo", accent: "#79a6de" }
    ]},

    { id: "experimental-rock", wing: "floor", name: "Experimental Rock / Post-Rock / Noise Rock", accent: "#c6a8ff" },
    { id: "folk", wing: "floor", name: "Folk / Singer-Songwriter / Americana / Country", accent: "#e0a868" },
    { id: "grunge", wing: "floor", name: "Grunge / 90s Alt. Rock", accent: "#a9c16f" },

    { id: "hip-hop", wing: "floor", name: "Hip Hop", accent: "#ffcc33", crateImg: "hip-hop-crate", subs: [
      { id: "conscious",    name: "Conscious Hip Hop / Political Hip Hop", accent: "#ff6a3d" },
      { id: "experimental", name: "Experimental Hip Hop / Abstract Hip Hop / Industrial Hip Hop", accent: "#b4bcc6" }
    ]},

    { id: "indie-alt", wing: "floor", name: "Indie Rock / Alternative Rock", accent: "#6fd6c8" },
    { id: "industrial", wing: "floor", name: "Industrial / EBM", accent: "#ff4747" },
    { id: "jazz", wing: "floor", name: "Jazz", accent: "#4fa3ff" },
    { id: "latin", wing: "floor", name: "Latin / Global", accent: "#ff9a3c" },

    { id: "metal", wing: "floor", name: "Metal", accent: "#e23b3b", subs: [
      { id: "black",       name: "Black Metal / Atmospheric Black Metal / Post-Black Metal", accent: "#d4d8e0" },
      { id: "death",       name: "Death Metal / Grindcore", accent: "#d94848" },
      { id: "doom",        name: "Doom Metal / Sludge Metal / Stoner Metal / Post-Metal", accent: "#a386d6" },
      { id: "groove",      name: "Groove Metal / Alt Metal / Nu Metal / Rap Metal", accent: "#ff9448" },
      { id: "metalcore",   name: "Metalcore / Mathcore", accent: "#ff5a5a" },
      { id: "thrash",      name: "Thrash Metal", accent: "#ff7a1f" },
      { id: "traditional", name: "Traditional Heavy Metal / NWOBHM / Power Metal / Prog Metal", accent: "#ecb54f" }
    ]},

    { id: "pop", wing: "floor", name: "Pop / Synth-Pop / Art Pop", accent: "#ff7ccb" },
    { id: "post-punk", wing: "floor", name: "Post-Punk / New Wave / Gothic Rock", accent: "#b691ff" },

    { id: "punk", wing: "floor", name: "Punk Rock / Hardcore Punk / Post-Hardcore", accent: "#ff3a64", subs: [
      { id: "hardcore",  name: "Hardcore Punk / Post-Hardcore", accent: "#ffd41f" },
      { id: "punk-rock", name: "Punk Rock", accent: "#ff3a64" }
    ]},

    { id: "rnb", wing: "floor", name: "R&B / Soul / Funk", accent: "#ffa24a", crateImg: "rnb-crate", subs: [
      { id: "neo-soul", name: "Neo Soul", accent: "#e8b27a" }
    ]},

    { id: "reggae", wing: "floor", name: "Reggae / Dub / Dancehall", accent: "#45cc72" },
    { id: "rock", wing: "floor", name: "Rock / Classic Rock / Roots Rock / Blues Rock", accent: "#f06a45" },
    { id: "ska", wing: "floor", name: "Ska / 2-Tone / Ska-Punk", accent: "#f2f2f2" },
    { id: "soundtrack", wing: "floor", name: "Soundtrack / Score", accent: "#f2c35e" },

    { id: "halloween", wing: "back", name: "Halloween", accent: "#ff7a1a", crateImg: "halloween-crate", subs: [
      { id: "compilations", name: "Compilations" },
      { id: "playlists",    name: "Playlists", accent: "#c07bff" },
      { id: "podcasts", name: "Podcasts / Broadcasts", accent: "#ffb35c" },
      { id: "stage-screen", name: "Stage & Screen", subs: [
        { id: "sound-effects", name: "Sound Effects", accent: "#8ef0c8" },
        { id: "spoken-word",   name: "Spoken Word", accent: "#e6c28a" }
      ]}
    ]},

    { id: "podcasts", wing: "back", name: "Podcasts / Broadcasts", accent: "#72c8ff" },

    { id: "stage-screen", wing: "back", name: "Stage & Screen", accent: "#e8c47e", subs: [
      { id: "sound-effects", name: "Sound Effects", accent: "#80e3c5" },
      { id: "spoken-word",   name: "Spoken Word", accent: "#dcbc90" }
    ]},

    { id: "playlists", wing: "back", name: "Playlists", accent: "#f4b048" }
  ]
};
