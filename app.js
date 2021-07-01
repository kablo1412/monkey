const zatvorenafaca = document.querySelector ('.closed');
const otvorenafaca = document.querySelector ('.open');

// event listener 
zatvorenafaca.addEventListener('click', () => {
    if (otvorenafaca.classList.contains('open')) {
        otvorenafaca.classList.add('active');
        zatvorenafaca.classList.remove('active');
    }
});

otvorenafaca.addEventListener('click', () => {
    if(zatvorenafaca.classList.contains('closed')) {
        zatvorenafaca.classList.add('active');
        otvorenafaca.classList.remove('active');
    }
})