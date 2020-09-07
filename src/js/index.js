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

////////////////////////// Menu /////////////////////////////////
/////////////////////////////////////////////////////////////////

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

// Init on Dom Load
document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

////////////////////////// Contact Form /////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Listen for from sumit

document.getElementById('contactform').addEventListener('submit', submitFrom);

// function to get from values
function getInputValue(id) {
  return document.getElementById(id).value;
}

function submitFrom(e) {
  e.preventDefault();

  // Get value

  var userName = getInputValue('userName');
  var userEmail = getInputValue('userEmail');
  var userMessage = getInputValue('userMessage');

  // save data to firebase

  saveMessage(userName, userEmail, userMessage);

  showAlert('Message Sent', 'alert');

  // // show alert
  // document.querySelector('.alert').style.display = 'block';

  // // Hide alert after 3 seconds
  // setTimeout(function () {
  //   document.querySelector('.alert').style.display = 'none';
  // }, 3000);

  //clear form
  document.getElementById('contactform').reset();
}

////////////////////////// FireBase DB //////////////////////////
/////////////////////////////////////////////////////////////////

// Creating a table
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
  } else {
    const alterMessage = document.createElement('div');
    alterMessage.className = `alert ${className}`;
    alterMessage.appendChild(document.createTextNode(message));

    const section = document.querySelector('.con-section-a');
    const main = document.querySelector('#contactform');
    section.insertBefore(alterMessage, main);

    // Vanish in 3 seconds
    setTimeout(function () {
      alterMessage.className = 'remove';
    }, 2000);

    setTimeout(() => document.querySelector('.remove').remove(), 3500);
  }
}
