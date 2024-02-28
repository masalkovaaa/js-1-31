let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph =>{
    if (paragraph.textContent % 2 == 0) {
        paragraph.classList.add('error');
    } else {
        paragraph.classList.add('success');
    }
})