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

const firstSpeaker = {
  imgSrc: 'graphics/athena.jpeg',
  name: 'Athena Akrami',
  oraganization: 'University College London',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
};

document.querySelector('.speaker-1 .speaker-img').src = firstSpeaker.imgSrc;
document.querySelector('.speaker-1 h3').textContent = firstSpeaker.name;
document.querySelector('.speaker-1 .speaker-subheading').textContent = firstSpeaker.oraganization;
document.querySelector('.speaker-1 p').textContent = firstSpeaker.bio;

const secondSpeaker = {
  imgSrc: 'graphics/yuki.png',
  name: 'Yuki Kamitani',
  oraganization: 'Kyoto University',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
};

document.querySelector('.speaker-2 .speaker-img').src = secondSpeaker.imgSrc;
document.querySelector('.speaker-2 h3').textContent = secondSpeaker.name;
document.querySelector('.speaker-2 .speaker-subheading').textContent = secondSpeaker.oraganization;
document.querySelector('.speaker-2 p').textContent = secondSpeaker.bio;

const thirdSpeaker = {
  imgSrc: 'graphics/bassett.jpeg',
  name: 'Dani Bassett',
  oraganization: 'University of Pennsylvania',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
};

document.querySelector('.speaker-3 .speaker-img').src = thirdSpeaker.imgSrc;
document.querySelector('.speaker-3 h3').textContent = thirdSpeaker.name;
document.querySelector('.speaker-3 .speaker-subheading').textContent = thirdSpeaker.oraganization;
document.querySelector('.speaker-3 p').textContent = thirdSpeaker.bio;

const fourthSpeaker = {
  imgSrc: 'graphics/vivek.jpeg',
  name: 'Vivek Jayaraman',
  oraganization: 'Janelia Research Campus',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
};

document.querySelector('.speaker-4 .speaker-img').src = fourthSpeaker.imgSrc;
document.querySelector('.speaker-4 h3').textContent = fourthSpeaker.name;
document.querySelector('.speaker-4 .speaker-subheading').textContent = fourthSpeaker.oraganization;
document.querySelector('.speaker-4 p').textContent = fourthSpeaker.bio;

const fifthSpeaker = {
  imgSrc: 'graphics/chethan.png',
  name: 'Chethan Pandarinath',
  oraganization: 'Georgia Tech/Emory',
  bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
};

document.querySelector('.speaker-5 .speaker-img').src = fifthSpeaker.imgSrc;
document.querySelector('.speaker-5 h3').textContent = fifthSpeaker.name;
document.querySelector('.speaker-5 .speaker-subheading').textContent = fifthSpeaker.oraganization;
document.querySelector('.speaker-5 p').textContent = fifthSpeaker.bio;