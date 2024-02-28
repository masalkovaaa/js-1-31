let div = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener ('click', ()=>{
    let widthNm = div.style.width;
    let heightNm = div.style.height;
    let width = parseInt(widthNm);
    let height = parseInt(heightNm);
    elem.style.width = (width + 50) + 'px';
    elem.style.height = (height + 50) + 'px';
})

