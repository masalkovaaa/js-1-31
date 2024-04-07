let button = document.querySelector("#button");

button.addEventListener('click', function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
})
