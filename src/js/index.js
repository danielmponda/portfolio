/* eslint-disable */

////////////////////////// firebaseConfig ////////////////////////
/////////////////////////////////////////////////////////////////

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

////////////////////////// Menu /////////////////////////////////
/////////////////////////////////////////////////////////////////

const body = document.querySelector('#body'); // Menu Button

const menuBtn = document.querySelector('.menu-btn'); // Menu Button
const menu = document.querySelector('.menu'); // Menu Wrapper
const menuNav = document.querySelector('.menu-nav'); // Nav Section
const navItems = document.querySelectorAll('.nav-item'); // Nav List

// Set Initail State of Menu
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menu.classList.add('show');
    navItems.forEach((item) => item.classList.add('show'));

    showMenu = true; // Set Menu Off
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menu.classList.remove('show');
    navItems.forEach((item) => item.classList.remove('show'));

    showMenu = false; // Set Menu On
  }
};

// Menu Button Onclick call toggleMenu
menuBtn.addEventListener('click', toggleMenu);

// On click on each link also call toggleMenu
navItems.forEach((item) =>
  item.firstElementChild.addEventListener('click', toggleMenu)
);

////////////////////////// Type Method ////////////////////////////////
///////////////////////////////////////////////////////////////////////

const TypeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

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

// On DOMContentLoaded call init
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));

  const wait = txtElement.getAttribute('data-wait'); // getAttribute waitTime

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

////////////////////////// Contact Form /////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Conatact Form on Submit call submitFrom

document.getElementById('contactform').addEventListener('submit', submitFrom);

// function to get Input Value
function getInputValue(id) {
  return document.getElementById(id).value;
}

function submitFrom(e) {
  e.preventDefault();

  var userName = getInputValue('userName');
  var userEmail = getInputValue('userEmail');
  var userMessage = getInputValue('userMessage');

  // Send data to firebase
  saveMessage(userName, userEmail, userMessage);

  // Notify Message Sent
  showAlert('Message Sent', 'alert');

  // reset form input
  document.getElementById('contactform').reset();
}

////////////////////////// FireBase DB //////////////////////////
/////////////////////////////////////////////////////////////////

// Creating a table / Ref
var messagesRef = firebase.database().ref('messages');

// save message to firebase
function saveMessage(name, email, message) {
  // send data to table message
  var newMessageRef = messagesRef.push();
  // set data
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

////////////////////////// Show Message //////////////////////////
/////////////////////////////////////////////////////////////////

function showAlert(message, className) {
  if (document.querySelector('.alert')) {
    // If message already exist do nothing
  } else {
    // else
    const alterMessage = document.createElement('div'); // create a div
    alterMessage.className = `alert ${className}`; // Add class to the div
    alterMessage.appendChild(document.createTextNode(message)); // Create textNode and append it to the div

    const section = document.querySelector('.con-section-b');
    const main = document.querySelector('#contactform');
    section.insertBefore(alterMessage, main); // insert the div between section and main element

    // Vanish in 3 seconds
    setTimeout(function () {
      alterMessage.className = 'remove'; // set class name to remove
    }, 2000);

    setTimeout(() => document.querySelector('.remove').remove(), 3500); // delete element with remove class name
  }
}
