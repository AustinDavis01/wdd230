
// Gather Elements needed
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const temple = document.getElementById("templo");
const visits = document.getElementById("visits");
const tempature = document.getElementById("tempature");


// toggle menu
menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");
    temple.classList.toggle("down");
    
})

// Fetch api 
fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=40.5622&lon=-111.9297&appid=2182407fe8adf3fe7aed195903bf92aa")
    .then( res =>  res.json())
    .then( data => {
        console.log(data)
        // convert kelvin to fahrenheit and display
        let temp = data.main.temp;
        document.getElementById("tempature").textContent =  `img - ${temp.toFixed(1)} °F  - ${data.weather[0].description}`; 

        

    })


// // make passenger counter on home page.
// let numVisits = Number( localStorage.getItem("numVisits")) || 0;

// if (numVisits != 0) {
// 	visits.textContent = `Visits: ${numVisits}`;
// } else {
// 	visits.textContent = `Visits: This is your first visit. 🥳 Welcome!`;
// }

// numVisits++;

// window.localStorage.setItem("numVisits", numVisits);

// grab elements
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


