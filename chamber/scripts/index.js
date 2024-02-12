// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const member = document.getElementById("member");
const modeButton = document.getElementById("mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const title = document.querySelectorAll("h2");


//Dark mode
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000000";
        header.style.background = "#000000";
        footer.style.background = "#000000";
        body.style.color = "#FFFFFF";            
        modeButton.textContent = "🔆";
    } else {
        main.style.background = "#FFFFFF";
        header.style.background = "#FFFFFF";
        footer.style.background = "#FFFFFF";
        body.style.color = "#000000";
        modeButton.textContent = "🕶️";
    }
});

// event listener for menu button
menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");
    member.classList.toggle("em");
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