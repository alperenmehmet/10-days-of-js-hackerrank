function getLetter(s) {
  let letter;
  let firstCharacter = s.charAt(0);
  // Write your code here

  switch (true) {
    case firstCharacter === 'a':
      letter = 'A';
      break;
    case firstCharacter === 'b':
      letter = 'B';
      break;
    case firstCharacter === 'h':
      letter = 'C';
      break;
    default:
      letter = 'D';
  }
  return letter;
}

console.log(getLetter('asdas'));
