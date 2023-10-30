let today = new Date();
let hours = today.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = today.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayName = today.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
let dayy = document.querySelector("#day");
dayy.innerHTML = `${day}${hours}:${minutes}`;

function displayWeather(response) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let windSpeed = document.querySelector("#windspeed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let key = `0335cd162e61e0d928e202af64973b8e`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  axios.get(url).then(displayWeather);
}
function handleSubmit(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-input");
  search(cityName.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);
search("Paris");
