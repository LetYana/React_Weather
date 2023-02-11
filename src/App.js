import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

import WorkFile_searchImage from "./WorkFile_searchImage.svg";

export default function App() {
  let defaultCity = "Amsterdam";
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "1da1773b8d8c37236ad8e28c3090a15f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Wrapper">
          <form className="citySearch" onSubmit={handleSubmit}>
            <img src={WorkFile_searchImage} alt="City Search" />
            <input
              className="cityInput"
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              required
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input className="citySubmit" type="submit" />
          </form>

          <WeatherInfo data={weatherData} />
          <WeatherForecast />

          <hr className="spaceHr" />

          <div className="gitHub">
            <p>
              <a href="https://github.com/LetYana/React_Weather">
                Open-source code on GitHub
              </a>
              by letYana
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
