
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
const section = document.querySelector("section");
const visits = document.getElementById("visits");
const hidden = document.getElementById("hidden");


//Dark mode
modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        main.style.background = "#000000";
        header.style.background = "#000000";
        footer.style.background = "#000000";
        section.style.background = "#FFFFFF";
        section.style.border = "2px solid white";
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
    hidden = mod.today();
}

lastModifiedDate()
year()

// // directory page
// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("article");

// // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

// gridbutton.addEventListener("click", () => {
// 	// example using arrow function
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); // example using defined function

// function showList() {
//     console.log("hi");
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }
