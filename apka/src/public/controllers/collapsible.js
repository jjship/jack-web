var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    if ('mniej' == this.innerHTML) {
      this.innerHTML = this.getAttribute('data-text');
      this.classList.remove('active');
      this.classList.add('golden');
    } else {
      this.setAttribute('data-text', this.innerHTML);
      this.innerHTML = 'mniej';
      this.classList.remove('golden');
      this.classList.add('active');
    }

    var content = this.previousElementSibling;
    content.classList.toggle('collapsed');
    content.classList.toggle('expanded');
  });
}
