let elem = document.querySelector('input');

elem.addEventListener('blur', ()=> {
    if (elem.value <= 10) {
        elem.dataset.type = 'success';
    } else if (elem.value <= 20 && elem.value > 10){
        elem.dataset.type = 'warning';
    } else {
        elem.dataset.type = 'error';
    }
})