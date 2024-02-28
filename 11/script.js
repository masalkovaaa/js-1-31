let elem = document.querySelectorAll('p');

elem.forEach(elems => {
    elems.addEventListener('click', ()=> {
        elems.classList.toggle('active');
})
})