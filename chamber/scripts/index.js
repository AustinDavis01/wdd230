
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
const url = "https://github.com/AustinDavis01/wdd230/main/chamber/data/spotlight.json"
const article = document.getElementById("articlehome");



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
        section.style.background = "#eee"
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

// fetch data an render
fetch(url)
    .then((res) => res.json())
    .then((data) => {

        let num = 4 
        data.buisness.forEach((repo) => {
        
			let sections = `
            <section class="medium${num} large${num}">
                <h2 class="heading2">${repo.name}</h2>
                    <p class="right">"${repo.qoute}"</p>
                        <div class="middle">
                            <p>${repo.email}</p>
                            <p>${repo.number}</p>
                            <P><a href="#">${repo.website}</a></P>
                        </div>
            </section>`
			article.innerHTML += sections;
            num = num + 1
		  });

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
