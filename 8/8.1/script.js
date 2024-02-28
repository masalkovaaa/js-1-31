let div = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener ('click', ()=>{
    let computedStyle = getComputedStyle(div);
	console.log(computedStyle.width);
	console.log(computedStyle.height);
})
