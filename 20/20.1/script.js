let elem = document.getElementById('elem');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  elem.scrollTop += 100;
  elem.scrollLeft += 50;
});