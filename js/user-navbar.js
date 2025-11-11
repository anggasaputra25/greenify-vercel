const menuBtn = document.getElementById('menuBtn');
const sidebar = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('left-0')) {
        sidebar.classList.replace('left-0', '-left-full');
    } else {
        sidebar.classList.replace('-left-full', 'left-0');
    }
});