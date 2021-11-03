function getCount(objects) {
  let n = 0;
  for (let o of objects) {
    n += o.x == o.y;
  }
  return n;
}

console.log(getCount({ x: 1, y: 2 }));
