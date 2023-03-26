const hamburger = document.getElementById('hamburger');
const lines = document.querySelectorAll('.line');
const navMenu = document.getElementById('nav--menu');
const menu = document.getElementById('menu');
const backdrop = document.getElementById('backdrop')




const activeMenu = () => {
    if(!hamburger.classList.contains('active')) {
        hamburger.classList.add('active');
        lines.forEach(lines => {
            lines.classList.add('active');
        });
        navMenu.classList.add('active');
        backdrop.classList.add('dimmed')

    } else {
        hamburger.classList.remove('active');
        lines.forEach(lines => {
            lines.classList.remove('active');
        })
        navMenu.classList.remove('active')
        backdrop.classList.remove('dimmed')
    }
}

hamburger.addEventListener('click', activeMenu);