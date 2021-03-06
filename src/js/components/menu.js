const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('nav-item');

// Set Initail State of Menu
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menu.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menu.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    showMenu = true;
  }
};

menuBtn.addEventListener('click', toggleMenu);
