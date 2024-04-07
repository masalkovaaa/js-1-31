let button = document.querySelector("#button");

button.addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
})
