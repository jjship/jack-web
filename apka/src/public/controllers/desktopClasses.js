const dsk = '(min-width: 1450px)';
const mob = '(max-width: 1449px)';

const changeClass = (mediaQuery) => {
  mediaQuery.matches
    ? nav.classList.add('h-is__closed')
    : nav.classList.remove('h-is__closed');
};

const lights = document.querySelector('.bg_lights');

// const changePicture = (mediaQuery) => {
//   mediaQuery.matches
//     ? (lights.src = '/images/BG_lights_desktop_main.png')
//     : (lights.src = '/images/BG_lights.png');
// };

const mq_dsk = window.matchMedia(dsk);
const mq_mob = window.matchMedia(mob);

// Call listener function at run time
changeClass(mq_dsk);
setArrow(mq_mob);
// changePicture(mediaQuery);

// Attach listener function on state changes
// mediaQuery.addListener(changePicture);
mq_dsk.addListener(changeClass);
mq_mob.addListener(setArrow);
