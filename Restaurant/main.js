//Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");



menu.onclick = () => {
  console.log(menu)
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};

// Close Menu On Scroll
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};

//ScrollReveal
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img", {origin: "bottom"});