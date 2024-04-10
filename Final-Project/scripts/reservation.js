const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// Hamburger Menu
menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");

})