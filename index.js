// add solution here
var musicians = ["John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney"];
var instruments = ["plays the Rhythm Guitar", "plays the Drums", "plays the Lead Guitar", "plays the Bass Guitar"];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayThese = [];
  for (let i = 0; i < musicians.length; i++) {
    (let p = 0; p < instruments.length; p++) {
      theBeatlesPlayThese.push(musicians[i] + instruments[p]);
    }
  }
}













var theBeatles = ["John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney"];
var instrumentPlayed = ["plays the Rhythm Guitar", "plays the Drums", "plays the Lead Guitar", "plays the Bass Guitar"];