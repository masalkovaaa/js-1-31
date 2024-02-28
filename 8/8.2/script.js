let div = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener ('click', ()=>{
    let computedStyle = getComputedStyle(div);
	let widthNm = computedStyle.width;
	let heightNm = computedStyle.height;
    let width = parseInt(widthNm);
    let height = parseInt(heightNm);
    elem.style.width = (width * 2) + 'px';
    elem.style.height = (height * 2) + 'px';
})
