let button = document.querySelector("#button");

button.addEventListener('click', ()=> {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    console.log(w, h)
})
