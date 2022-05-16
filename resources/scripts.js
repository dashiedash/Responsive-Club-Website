// Make the nav bar stick on top when the page is scrolled.
let nav = document.getElementById("nav");

let sticky = nav.offsetTop;

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

window.onscroll = function () {
  makeNavStick();
};
