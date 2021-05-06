const button = document.querySelector('#openModal');
const modal = document.querySelector('.modal');

button.addEventListener('click', function (event) {
    modal.classList.remove('hidden');
    event.currentTarget.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
    const isEscKey = event.key == 'Escape';
    const modalContainsHidden = modal.classList.contains('hidden');

    if (isEscKey && !modalContainsHidden) {
        modal.classList.add('hidden');
        button.style.display = 'block';
    }
});
