// Make the nav bar stick on top when the page is scrolled.

let nav = document.getElementById("navbar");

let sticky = nav.offsetTop;

console.log(nav);
console.log(sticky);

/*
function makeNavStick() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
*/

const makeNavStick = () =>
  window.scrollY >= sticky
    ? nav.classList.add("sticky")
    : nav.classList.remove("sticky");

window.onscroll = makeNavStick();
