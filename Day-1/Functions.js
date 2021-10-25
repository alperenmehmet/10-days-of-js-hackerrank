function factorial(num) {
  let val = 1;
  for (let i = 2; i <= num; i++) val = val * i;
  return val;
}
console.log(sFact(5));
