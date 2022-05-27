const burger = document.querySelector('.burger');
const navContainer = document.querySelector('.nav-container');
const x = document.querySelector('.fa-x');
const logo = document.querySelector('.logo');

burger.addEventListener('click', () => {
  burger.classList.add('hidden');
  navContainer.classList.remove('hidden');
  navContainer.classList.add('mobile-view');
  x.classList.remove('hidden');
  logo.src = 'graphics/neuromatch-conference-light-white.svg';
});

x.addEventListener('click', () => {
  burger.classList.remove('hidden');
  burger.classList.remove('hidden');
  navContainer.classList.add('hidden');
  navContainer.classList.remove('mobile-view');
  x.classList.add('hidden');
  logo.src = 'graphics/neuromatch-conference-light.svg';
});