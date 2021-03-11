const testimony = document.querySelector('.js-testimony');
const personal = document.querySelector('.js-personal');
const sent = document.querySelector('.js-sent');

const switchForm = (e, prev, next) => {
  e.preventDefault();
  prev.classList.add('h-is__hidden');
  next.classList.remove('h-is__hidden');
};

testimony.addEventListener('submit', (e) => {
  switchForm(e, testimony, personal);
});

personal.addEventListener('submit', (e) => {
  switchForm(e, personal, sent);
});
