function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  for (var i = 0; i < s.length; i++) {
    if (
      s[i] == 'a' ||
      s[i] == 'e' ||
      s[i] == 'i' ||
      s[i] == 'o' ||
      s[i] == 'u'
    ) {
      vowels.push(s[i]);
    } else {
      consonants.push(s[i]);
    }
  }
  let concatTwoArray = [...vowels, ...consonants];
  for (let i of concatTwoArray) {
    console.log(i);
  }
}

vowelsAndConsonants('java');
