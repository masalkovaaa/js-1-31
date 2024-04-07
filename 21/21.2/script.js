let elem = document.getElementById('elem');
let button = document.getElementById('button');
button.addEventListener('click', function() {
  if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
    alert('Элемент прокручен до конца');
  } else {
    alert('Элемент не прокручен до конца');
  }
});