let elem = document.getElementById('elem');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  elem.style.height = elem.scrollHeight + 'px';
});