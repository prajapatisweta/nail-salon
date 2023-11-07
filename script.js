'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Looping over the buttons to add click event for opening modal
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling effect

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // Scrolling
/////////Old Way////////////
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

// Modern Way ---------- just one line needed
  section1.scrollIntoView({behavior: 'smooth'});
});

/////// Event listeners
// Page navigation

// --------- Scroll but not optimal ---------
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// --------- For better optimal scroll event ---------
// Using Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching if the element is clicked
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// *** this method is not optimal as it will create copy
// tabs.forEach(t => t.addEventListener('click', () => 
// console.log('tab')));

// *** using event delegation for optimal usage
tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  // ignoring any other click in that area
  if(!clicked) return;

  // remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  
  // activate tab
  clicked.classList.add('operations__tab--active');

  // Activate Content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu Fade animation

///////////////////////////////////////////////////////

const header = document.querySelector('.header');;

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = `We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>`;

// header.append(message);

// removing cookie
header.before(message);
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
  message.remove();

  // Old method of removing
  // message.parentElement.removeChild(message);
});

//styles
message.style.backgroundColor = '#37383d'

// *****************************************
const h1 = document.querySelector('h1');

// --------- Going downwards
// h1.querySelectorAll('.highlights');
// h1.childNodes;
// h1.children;
h1.firstElementChild.style.color = 'white';

//---------- going upward
h1.parentNode;
h1.parentElement;

// -------- siblings
h1.previousElementSibling;
h1.nextElementSibling;
