let button = document.querySelector("#button");

button.addEventListener('click', ()=> {
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    
    console.log(scrollWidth);
})
