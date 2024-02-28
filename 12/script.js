let elem = document.querySelector('input');

elem.addEventListener('blur', ()=> {
    if (elem.value.length <= 9) {
        elem.classList.add('warrning');
        elem.classList.remove('error');
    } else {
        elem.classList.remove('warrning');
        elem.classList.add('error');
    }
})