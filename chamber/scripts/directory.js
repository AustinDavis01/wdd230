// directory page
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const printSections = document.getElementById("print");
const url = "data/members.json"

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getProphetData() {
    const response = await fetch(url);
	console.log("hi")
    const data = await response.json();
    console.table(data.prophets); // temporary testing of data retreival
  }