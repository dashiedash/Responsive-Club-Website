// Make the nav bar stick on top when the page is scrolled.

window.onscroll = function () {
  makeNavStick();
};

let nav = document.getElementById("nav");

let sticky = nav.offsetTop;

console.log(nav);
console.log(sticky);

/*
function makeNavStick() {
  if (window.scrollY >= sticky) {
    nav.classList.add("stickIt");
  } else {
    nav.classList.remove("stickIt");
  }
}
*/

const makeNavStick = () =>
  window.scrollY >= sticky
    ? nav.classList.add("stickIt")
    : nav.classList.remove("stickIt");
