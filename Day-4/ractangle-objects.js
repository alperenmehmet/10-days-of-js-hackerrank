function Rectangle(a, b) {
  this.lenght = a;
  this.widht = b;
  this.area = a * b;
  this.perimeter = 2 * (a + b);
}

console.log(Rectangle(2, 3));
