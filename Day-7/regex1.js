function regexVar() {
  let re = /^([aeiou]).+\1$/;
  return re;
}

console.log(regexVar().test('abcda'));
