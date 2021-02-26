const togg = document.querySelector('.js-toggle');
const nav = document.querySelector('.js-nav');
const arr = document.querySelector('.js-arrow');
const lights = document.querySelector('.bg_lights');
const dsk = '(min-width: 1450px)';
const mob = '(max-width: 1449px)';
const mq_dsk = window.matchMedia(dsk);
const mq_mob = window.matchMedia(mob);
const input = document.querySelector('.js-textarea');
const wrap = document.querySelector('.js-wrapper');

const toggleMenu = () => {
  if (nav.classList.contains('h-is__closed')) {
    togg.innerHTML = 'mniej';
    arr.classList.remove('h-is__down');
    nav.classList.toggle('h-is__closed');
  } else {
    togg.innerHTML = 'menu';
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

const setBackgoundImage = (mediaQuery) => {
  wrap
    ? mediaQuery.matches
      ? (wrap.style.backgroundImage = wrap.dataset.bg__dsk)
      : (wrap.style.backgroundImage = wrap.dataset.bg__mob)
    : null;
};

// const changePicture = (mediaQuery) => {
//   mediaQuery.matches
//     ? (lights.src = '/images/BG_lights_desktop_main.png')
//     : (lights.src = '/images/BG_lights.png');
// };

// Call listener function at run time
changeClass(mq_dsk);
toggleMenu(mq_mob);
changeInputSize(mq_dsk);
setBackgoundImage(mq_dsk);
setBackgoundImage(mq_mob);
// changePicture(mediaQuery);

// Attach listener function on state changes
// mediaQuery.addListener(changePicture);
mq_dsk.addListener(changeClass);
mq_mob.addListener(toggleMenu);
mq_dsk.addListener(changeInputSize);
mq_mob.addListener(setBackgoundImage);
mq_dsk.addListener(setBackgoundImage);

togg.addEventListener('click', () => {
  toggleMenu();
});
