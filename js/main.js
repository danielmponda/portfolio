// Select DOM items 
const menuBtn = document.querySelector('.menu-btn');          
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); 

// set the initial state of the Menu 
let showMenu= false; 

menuBtn.addEventListener('click', toggleMenu);  // Onclick on Btn Call the func toggleMenu 

function toggleMenu(){
    if(!showMenu){                                          // If ShowMenu is false 
        menuBtn.classList.add('close');                     //
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
       
        // Set the Menu state 
       showMenu=true; 
   
    }else {                                                 // If ShowMenu is True 
        menuBtn.classList.remove('close');            
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
       
        // set the Menu state 
       showMenu=false; 
   
    }
}