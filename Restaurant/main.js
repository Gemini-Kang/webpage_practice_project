//Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");



menu.onclick = () => {
  console.log(menu)
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};