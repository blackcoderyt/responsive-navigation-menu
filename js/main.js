const navMenu = document.getElementById("navMenu"),
  navLinks = document.querySelectorAll(".nav-link"),
  navOpen = document.getElementById("navOpen"),
  navClose = document.getElementById("navClose");

navOpen.addEventListener("click", () => {
  navMenu.classList.add("nav--open");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("nav--open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav--open");
  });
});
