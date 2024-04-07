let button = document.querySelector("#button");

button.addEventListener('click', ()=> {
    let h = document.documentElement.clientHeight;
    let h1 = window.innerHeight;
    let h2 = h1 - h;
    if (h2 != 0) {
        console.log("Есть прокрутка")
    } else console.log("Нет прокрутки")
})
