// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const temple = document.getElementById("templo");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");
    temple.classList.toggle("down");
    
})




