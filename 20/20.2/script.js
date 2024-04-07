let elem = document.getElementById('elem');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  elem.scrollTop += 50;
});