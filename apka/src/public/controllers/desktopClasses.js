function myFunction(x) {
  if (x.matches) {
    // If media query matches
    nav.classList.remove('closed');
  } else {
    nav.classList.add('closed');
  }
}

var x = window.matchMedia('(min-width: 1000px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
