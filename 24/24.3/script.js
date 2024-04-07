let button = document.querySelector("#button");

button.addEventListener('click', ()=> {
    let w = document.documentElement.clientWidth;
    let w1 = window.innerWidth;
    let w2 = w1 - w;
    if (w2 != 0) {
        console.log("Есть прокрутка")
    } else console.log("Нет прокрутки")
})
