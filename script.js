const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});



const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

nextBtn.addEventListener('click', () => {
    carousel.scrollLeft += 300;
});

prevBtn.addEventListener('click', () => {
    carousel.scrollLeft -= 300;
});


const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});