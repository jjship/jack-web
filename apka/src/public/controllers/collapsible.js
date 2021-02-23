const togg = document.querySelector('.js-toggle');
const nav = document.querySelector('.js-nav');
const arr = document.querySelector('.js-arrow');

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

togg.addEventListener('click', () => {
  setArrow();
});
