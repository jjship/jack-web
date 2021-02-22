const togg = document.querySelector('.js-toggle');
const nav = document.querySelector('.js-nav');
const arr = document.querySelector('.js-arrow');
console.log(togg);
console.log(nav);
console.log(arr);

togg.addEventListener('click', () => {
  if ('mniej' == togg.innerHTML) {
    togg.innerHTML = togg.getAttribute('data-text');
    arr.classList.toggle('h-is__down');
  } else {
    togg.setAttribute('data-text', togg.innerHTML);
    togg.innerHTML = 'mniej';
    arr.classList.toggle('h-is__down');
  }

  nav.classList.toggle('h-is__closed');
});
