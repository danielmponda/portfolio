/* eslint-disable */

var firebaseConfig = {
  apiKey: 'AIzaSyBe6Pw_F6hr2kywHS_FJXa5JrNZVYCyijU',
  authDomain: 'portfoliocontactform-beb39.firebaseapp.com',
  databaseURL: 'https://portfoliocontactform-beb39.firebaseio.com',
  projectId: 'portfoliocontactform-beb39',
  storageBucket: 'portfoliocontactform-beb39.appspot.com',
  messagingSenderId: '87529637836',
  appId: '1:87529637836:web:68b29936dab1e3e474ff69',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const loader = document.querySelector('.hex-border');

// window.addEventListener('load', () => {
//   loader.style.display = 'none';
// });

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');

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

    showMenu = false;
  }
};

menuBtn.addEventListener('click', toggleMenu);
//

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method

TypeWriter.prototype.type = function () {
  // Current index of words
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];

  // Check if deleting
  if (this.isDeleting) {
    // remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // insert txt into element
  this.txtElement.innerHTML = `<span class="txt"> ${this.txt}</span>`;

  // Type speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed = 100;
  }

  // if word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;

    // set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    //pause before start typing
    typeSpeed = 100;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// Init on Dom Load
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// Contact from

// Listen for from sumit

document.getElementById('contactform').addEventListener('submit', submitFrom);

function submitFrom(e) {
  e.preventDefault();

  // Get value

  var UserName = getInputValue('userName');
  var UserEmail = getInputValue('userEmail');
  var UserMessage = getInputValue('userMessage');
}

// function to get from values

function getInputValue(id) {
  return document.getElementById(id).value;
}
