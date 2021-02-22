const changeClass = (mediaQuery) => {
  if (mediaQuery.matches) {
    // If media query matches
    nav.classList.remove('h-is__closed');
  } else {
    nav.classList.add('h-is__closed');
  }
};

const lights = document.querySelector('.bg_lights');

const changePicture = (mediaQuery) => {
  mediaQuery.matches
    ? (lights.src = '/images/BG_lights_desktop_main.png')
    : (lights.src = '/images/BG_lights.png');
};

var mediaQuery = window.matchMedia('(min-width: 1450px)');

// Call listener function at run time
changeClass(mediaQuery);
changePicture(mediaQuery);

// Attach listener function on state changes
mediaQuery.addListener(changePicture);
