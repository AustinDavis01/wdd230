// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=2182407fe8adf3fe7aed195903bf92aa";

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        currentTemp.innerHTML = `${data.main.temp} F`;
        weatherIcon.innerHTML = `${data.weather.icon}`;

    })