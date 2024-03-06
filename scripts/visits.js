// make passenger counter on home page.
let numVisits = Number( localStorage.getItem("numVisits")) || 0;

if (numVisits != 0) {
	visits.textContent = `Visits: ${numVisits}`;
} else {
	visits.textContent = `Visits: This is your first visit. 🥳 Welcome!`;
}

numVisits++;

window.localStorage.setItem("numVisits", numVisits);

