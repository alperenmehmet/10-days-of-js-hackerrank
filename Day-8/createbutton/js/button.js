const button = document.getElementById('btn');

button.addEventListener('click', function () {
  const value = parseInt(button.innerHTML);
  const currentValue = parseInt(value + 1);
  button.innerHTML = currentValue;
});
