// add solution here
var musicians = ["John Lennon", "Ringo Starr", "George Harrison", "Paul McCartney"];
var instruments = ["Rhythm Guitar", "Drums", "Lead Guitar", "Bass Guitar"];

function theBeatlesPlay(musicians, instruments) {
  var theBeatlesPlayThese = [];
  for (let i = 0; i < 4; i++) {
      theBeatlesPlayThese.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return theBeatlesPlayThese;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0;
  var newJLF = [];
  while(i < johnLennonFacts.length) {
    newJLF.push(`${johnLennonFacts[i]}!!!`)
    i++
  }
  return newJLF;
}

johnLennonFacts;








