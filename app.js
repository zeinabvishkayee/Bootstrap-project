let caret = document.getElementById("caret");
    caret.addEventListener('click', () => {
        caret.lastElementChild.classList.toggle('bi-caret-down-fill')
        caret.lastElementChild.classList.toggle('bi-caret-up-fill')
});
