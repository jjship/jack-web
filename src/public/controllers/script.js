const togg = document.querySelector('.js-toggle');
const nav = document.querySelector('.js-nav');
const arr = document.querySelector('.js-arrow');
const lights = document.querySelector('.bg_lights');
const dsk = '(min-width: 1450px)';
const mob = '(max-width: 1449px)';
const mq_dsk = window.matchMedia(dsk);
const mq_mob = window.matchMedia(mob);
const input = document.querySelector('.js-textarea');

const setArrow = () => {
  if (nav.classList.contains('h-is__closed')) {
    togg.innerHTML - 'mniej';
    arr.classList.remove('h-is__down');
    nav.classList.toggle('h-is__closed');
  } else {
    togg.innerHTML - 'menu';
    arr.classList.add('h-is__down');
    nav.classList.toggle('h-is__closed');
  }
};

const changeClass = (mediaQuery) => {
  mediaQuery.matches
    ? nav.classList.add('h-is__closed')
    : nav.classList.remove('h-is__closed');
};

const changeInputSize = (mediaQuery) => {
  input ? (mediaQuery.matches ? (input.rows = '7') : (input.rows = '4')) : null;
};

// const changePicture = (mediaQuery) => {
//   mediaQuery.matches
//     ? (lights.src = '/images/BG_lights_desktop_main.png')
//     : (lights.src = '/images/BG_lights.png');
// };

// Call listener function at run time
changeClass(mq_dsk);
setArrow(mq_mob);
changeInputSize(mq_dsk);
// changePicture(mediaQuery);

// Attach listener function on state changes
// mediaQuery.addListener(changePicture);
mq_dsk.addListener(changeClass);
mq_mob.addListener(setArrow);
mq_dsk.addListener(changeInputSize);

togg.addEventListener('click', () => {
  setArrow();
});
