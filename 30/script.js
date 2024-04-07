let elem = document.querySelector('#elem')
let button = document.querySelector('#button')

button.addEventListener('click', ()=> {
  elem.scrollIntoView(true);
})
