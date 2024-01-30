// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const member = document.getElementById("member");

// event listener for menu button
menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");
    member.classList.toggle("em")
})

// Function for footer
function year() {
    const date = document.getElementById("year")

    let currentYear = new Date().getFullYear()
    date.innerText = `@${currentYear}`
}

function lastModifiedDate() {
    //  grab modidfied element
    const lastMod = document.getElementById("last-mod")

    // the best
    let mod = new Date(document.lastModified)

    lastMod.innerText = mod
}

lastModifiedDate()
year()