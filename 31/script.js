window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log('Достигнут конец страницы!');
    }
  });
