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

const speakers = [
  {
    imgSrc: 'graphics/athena.jpeg',
    name: 'Athena Akrami',
    oraganization: 'University College London',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    imgSrc: 'graphics/yuki.png',
    name: 'Yuki Kamitani',
    oraganization: 'Kyoto University',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    imgSrc: 'graphics/bassett.jpeg',
    name: 'Dani Bassett',
    oraganization: 'University of Pennsylvania',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    imgSrc: 'graphics/vivek.jpeg',
    name: 'Vivek Jayaraman',
    oraganization: 'Janelia Research Campus',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    imgSrc: 'graphics/chethan.png',
    name: 'Chethan Pandarinath',
    oraganization: 'Georgia Tech/Emory',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    imgSrc: 'graphics/bassett.jpeg',
    name: 'Dani Bassett',
    oraganization: 'University of Pennsylvania',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
];

const speakersContainer = document.querySelector('.speakers-container');
const speakerArticle = speakers.map((speaker) => `<article class="speaker">
<div class="speaker-img-container">
    <img class="brain" src="graphics/brain-circuit.png" alt="">
    <img class="speaker-img" src="${speaker.imgSrc}" alt="">
</div>
<div class="speaker-content">
  <h3>${speaker.name}</h3>
    <div class="speaker-subheading">${speaker.oraganization}</div>
    <hr>
    <p>${speaker.bio}</p>
</div>
</article>`).join('');

speakersContainer.innerHTML += speakerArticle;