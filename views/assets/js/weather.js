const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

const weather = {};

weather.temperature = {
    unit: "celsius"
}

const KELVIN = 273;

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function getWeather(latitude, longitude) {
    fetch("/api/key")
        .then(function(response) {
            let key = response.json();
            return key;
        })
        .then(function(key) {

            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
            console.log(api)
            fetch(api)
                .then(function(response) {
                    let data = response.json();
                    return data;
                })
                .then(function(data) {
                    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
                    weather.description = data.weather[0].description;
                    weather.iconId = data.weather[0].icon;
                    weather.city = data.name;
                    weather.country = data.sys.country;
                })
                .then(function() {
                    displayWeather();
                });
        });
}

function displayWeather() {
    iconElement.innerHTML = `<img src="assets/css/icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}