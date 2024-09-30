import API_Key from "./apikey.js";
const getWeatherButton = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");

getWeatherButton.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`;
  function getWeather() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error: ", error);
      });
  }
  console.log(city);
  getWeather();
});
