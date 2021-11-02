function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else if (a === 0) {
    throw 'Zero Error';
  } else if (a < 0) {
    return 'Negative Error';
  }
}

console.log(isPositive());
