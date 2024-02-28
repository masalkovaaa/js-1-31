let div = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener ("click", ()=>{
    let width = elem.style.width;
    let height = elem.style.height;
    console.log(parseInt(width));
    console.log(parseInt(height));
})
