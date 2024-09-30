import API_Key from "./apikey.js";
const getWeatherButton = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");

getWeatherButton.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}`;
  function getWeather() {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        function displayWeather() {
          const { current, location } = data;
          const weatherHtml = `
                  <h2>Weather in ${location.name}</h2>
                  <p>Temperature: ${current.temp_c}°C</p>
                  <p>Condition: ${current.condition.text}</p>
              `;
          weatherResult.innerHTML = weatherHtml;
          console.log(data);
        }
        displayWeather();
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }
  //   function displayWeather(data) {
  //     const { main, weather, name } = data;
  //     const weatherHtml = `
  //           <h2>Weather in ${name}</h2>
  //           <p>Temperature: ${main.temp}°C</p>
  //           <p>Condition: ${weather[0].description}</p>
  //       `;
  //     weatherResult.innerHTML = weatherHtml;
  //     console.log(data.name);
  //   }
  getWeather();
});
