// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
    alert("working");
    menu.classList.toggle("show");
    nav.classList.toggle("show");
})




