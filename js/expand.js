const toggleButton = document.getElementsByClassName("nav__toggler")[0];
const navbarLinks = document.getElementsByClassName("nav__list")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("nav__list--expanded");
});
