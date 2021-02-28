const togg = document.querySelector('.js-toggle');
const toggFAQ = document.querySelectorAll('.js-faq-btn');
const nav = document.querySelector('.js-nav');
const arr = document.querySelector('.js-arrow');
const lights = document.querySelector('.bg_lights');
const dsk = '(min-width: 1450px)';
const mob = '(max-width: 1449px)';
const mq_dsk = window.matchMedia(dsk);
const mq_mob = window.matchMedia(mob);
const input = document.querySelector('.js-textarea');
const wrap = document.querySelector('.js-wrapper');
const ageInputs = document.querySelectorAll('.js-age-input');
const textarea = document.querySelector('.js-h-textarea');
console.log(togg);

const switchToForm = (e) => {
  window.location.href = '/form';
  // e.preventDefault();
  // const source = document.querySelector('.js-h-textarea');
  // testimonial = source.value;
  // window.location.href = '/form';
  // window.onload = () => {
  //   const target = document.querySelector('.js-target');
  //   console.log(target);
  //   target.value = testimonial;
  // };
};

const onlyNumberKey = (evt) => {
  // Only ASCII charactar in that range allowed
  const ASCIICode = evt.which ? evt.which : evt.keyCode;
  ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)
    ? evt.preventDefault()
    : true;
};

const toggleNav = () => {
  if (nav.classList.contains('h-is__closed')) {
    togg.firstChild.textContent = 'mniej';
    arr.classList.add('h-is__up');
    nav.classList.toggle('h-is__closed');
  } else {
    togg.firstChild.textContent = 'menu';
    arr.classList.remove('h-is__up');
    nav.classList.toggle('h-is__closed');
  }
};

const toggleCollapsible = (btn) => {
  const elem = btn.nextElementSibling;
  const closed = 'h-is__closed';
  elem.classList.contains(closed)
    ? elem.classList.remove(closed)
    : elem.classList.add(closed);
};

const switchArrow = (btn) => {
  const arrow = btn.children[0];
  const isUp = 'h-is__up';
  arrow.classList.contains(isUp)
    ? arrow.classList.remove(isUp)
    : arrow.classList.add(isUp);
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
toggleNav(mq_mob);
changeInputSize(mq_dsk);
setBackgoundImage(mq_dsk);
setBackgoundImage(mq_mob);
// changePicture(mediaQuery);

// Attach listener function on state changes
// mediaQuery.addListener(changePicture);
mq_dsk.addListener(changeClass);
mq_mob.addListener(toggleNav);
mq_dsk.addListener(changeInputSize);
mq_mob.addListener(setBackgoundImage);
mq_dsk.addListener(setBackgoundImage);

togg.addEventListener('click', () => {
  toggleNav();
});

toggFAQ.forEach((elem) =>
  elem.addEventListener('click', (e) => {
    toggleCollapsible(e.currentTarget);
    switchArrow(e.currentTarget);
  })
);

ageInputs.forEach((elem) =>
  elem.addEventListener('keydown', (e) => {
    onlyNumberKey(e);
  })
);

// homeBtn
//   ? homeBtn.addEventListener('click', (e) => {
//       switchToForm(e);
//     })
//   : null;

textarea
  ? textarea.addEventListener('focus', (e) => {
      switchToForm(e);
    })
  : null;
