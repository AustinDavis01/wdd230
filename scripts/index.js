// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const temple = document.getElementById("templo");
const visits = document.getElementById("visits");
const tempature = document.getElementById("tempature");
const location = document.getElementById("location");




menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");
    temple.classList.toggle("down");
    
})

// make passenger counter on home page.
let numVisits = Number( localStorage.getItem("numVisits")) || 0;

window.localStorage.setItem("numVisits", numVisits);

if (numVisits != 0) {
	visits.textContent = numVisits;
} else {
	visits.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;




