document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const menu = document.querySelector(".menu");
  const projekterLink = document.getElementById("projekter-link");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle burger menu
  burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Toggle dropdown menu on click
  projekterLink.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownMenu.classList.toggle("show");
    }
  });
});
