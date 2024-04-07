let button = document.querySelector('#button');

button.addEventListener('click', ()=>{
    let h = document.body.scrollHeight - document.documentElement.clientHeight;
    console.log(h)
})