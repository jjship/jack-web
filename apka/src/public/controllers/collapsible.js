const togg = document.getElementById('toggle');
const nav = document.getElementById('navi');
const arr = document.getElementById('arrow');

togg.addEventListener('click', () => {
  if ('mniej' == togg.innerHTML) {
    togg.innerHTML = togg.getAttribute('data-text');
    console.log(togg.innerHTML);
    arr.classList.toggle('down');
  } else {
    togg.setAttribute('data-text', togg.innerHTML);
    togg.innerHTML = 'mniej';
    arr.classList.toggle('down');
  }

  nav.classList.toggle('closed');
});
