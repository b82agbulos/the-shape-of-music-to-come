/* =====================================================================
   INVENTORY — your hand edits
   ---------------------------------------------------------------------
   The records themselves come from your Google Sheet (one tab per room,
   one column per section, "Artist - Album" in each cell, a link on each
   cell). Use this file for what the sheet doesn't hold:

   1) STAFF PICKS and shelf-talker notes
        { artist: "Joy Division", album: "Unknown Pleasures", pick: true,
          note: "A line or two in your own words" },

   2) FULL RELEASE DATES (for the date sorts), EP badges, covers, filing names
        { artist: "Metallica", album: "Master of Puppets", released: "1986-03-03" },
        { artist: "Bob Dylan", album: "Blonde on Blonde", sortAs: "Dylan, Bob" },
        { artist: "Burial", album: "Untrue", cover: "images/covers/untrue.jpg" },

   3) A record in several rooms, or a pick in only one of them
        { artist: "The Clash", album: "London Calling",
          sections: ["punk/punk-rock", "post-punk"], pick: ["punk/punk-rock"] },

   An entry applies to the record with the same artist + album as the sheet
   (capitals, "The" and punctuation don't matter). Whatever you write here
   wins over the sheet. An entry that matches nothing but has sections: [...]
   and link: "..." is added as a record of its own.

   Fields: artist, album, released ("1986" or "1986-03-03"), type ("EP"),
   sections, pick (true, or ["room/id"] for only some rooms), note,
   sortAs, cover, link.
   ===================================================================== */

window.INVENTORY = [

];
