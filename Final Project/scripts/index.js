const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

// Hamburger Menu
menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    nav.classList.toggle("show");    
    
})

// Fetch api wether for playa del carmen cozumel
fetch("https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=20.6296&lon=87.0739&appid=2182407fe8adf3fe7aed195903bf92aa")
    .then( res =>  res.json())
    .then( data => {
        console.log(data)
        // convert kelvin to fahrenheit and display
        
        // icon
        let icon = data.weather[0].icon;
        let url = `https://openweathermap.org/img/w/${icon}.png`;
        let temp = data.main.temp;
        console.log(temp)

        document.getElementById("tempature").textContent =  `${temp.toFixed(1)} °F  - ${data.weather[0].description}`; 
        document.getElementById("weathericon").setAttribute("src", url);

    })