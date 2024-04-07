let button = document.querySelector("#button");

button.addEventListener('click', function() {
    let y = document.documentElement.scrollHeight - window.pageYOffset - window.innerHeight;
    console.log(y)
})
