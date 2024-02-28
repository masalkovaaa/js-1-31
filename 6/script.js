let div = document.querySelector("#elem");
let button = document.querySelector("#button");

button.addEventListener ('click', ()=>{
    elem.style.cssText = `
	width: 100px;
	height: 100px;
	margin: '10px auto';
    color: red;
`;
})
