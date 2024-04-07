let result = document.getElementById('result');
let button = document.getElementById('button');

button.addEventListener('click', function() {
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  document.body.append(div);

  div.remove();

  let scrollWidth = div.offsetWidth - div.clientWidth;

  result.textContent = 'Ширина полосы прокрутки: ' + scrollWidth + 'px';
});
