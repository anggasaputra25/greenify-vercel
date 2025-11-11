document.addEventListener('DOMContentLoaded', () => {
    const btnBars = document.getElementById('btn-bars');
    const btnClose = document.getElementById('btn-navbar-close');
    const navbarMobile = document.getElementById('navbar-mobile');
    
    btnBars.addEventListener('click', () => {
        navbarMobile.classList.toggle('-left-full');
        navbarMobile.classList.toggle('left-0');
    });

    btnClose.addEventListener('click', () => {
        navbarMobile.classList.toggle('left-0');
        navbarMobile.classList.toggle('-left-full');
    })
});