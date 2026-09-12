const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});