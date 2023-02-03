import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import FormattedFirstdate from "./FormattedFirstdate.js";
import WorkFile_searchImage from "./WorkFile_searchImage.svg";
import WorkFile_mainImage from "./WorkFile_mainImage.svg";
import WorkFile_properImage from "./WorkFile_properImage.svg";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
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
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="citySearch">
            <img src={WorkFile_searchImage} alt="City Search" />
            <input
              className="cityInput"
              type="search"
              placeholder="Enter a city"
              autofocus="on"
              required
              autocomplete="off"
            />
            <input className="citySubmit" type="submit" />
          </div>

          <div className="dateData">
            <p className="dateYear">
              <FormattedFirstdate date={weatherData.date} />
            </p>
            <h1 className="cityName">{weatherData.city}</h1>
            <p className="dayWeekTime">
              <FormattedDate date={weatherData.date} />
            </p>
          </div>

          <div className="dayWeather">
            <div className="dayWeatherImage">
              <img
                className="dayWeatherIcon"
                src={weatherData.iconUrl}
                alt="Weather"
              />
            </div>
            <div className="dayWeatherTemp">
              <h2>{Math.round(weatherData.temperature)}°C</h2>
              <h3>{weatherData.description}</h3>
            </div>
          </div>

          <div className="dayWeatherDetails">
            <div className="detailsWind">
              <img
                className="detailsIcon"
                src={WorkFile_properImage}
                alt="Weather"
              />
              <p className="detailsProperty">Wind</p>
              <p className="detailsValue">
                {Math.round(weatherData.wind)} km/h
              </p>
            </div>
            <div className="detailsHumidity">
              <img
                className="detailsIcon"
                src={WorkFile_properImage}
                alt="Weather"
              />
              <p className="detailsProperty">Humidity</p>
              <p className="detailsValue">{weatherData.humidity}%</p>
            </div>
            <div className="detailsUVIndex">
              <img
                className="detailsIcon"
                src={WorkFile_properImage}
                alt="Weather"
              />
              <p className="detailsProperty">VMC</p>
              <p className="detailsValue">{weatherData.visibility}</p>
            </div>
            <div className="detailsPressure">
              <img
                className="detailsIcon"
                src={WorkFile_properImage}
                alt="Weather"
              />
              <p className="detailsProperty">Pressure</p>
              <p className="detailsValue">{weatherData.pressure} mb</p>
            </div>
          </div>

          <div className="weatherForecast">
            <p className="weatherForecastTitle">Forecast for next 5 days</p>
            <div className="weatherForecastDiv">
              <div>
                <p className="forecastDay">Mon</p>
                <img
                  className="forecastIcon"
                  src={WorkFile_mainImage}
                  alt="Weather"
                />
                <p className="forecastTempMax">12°</p>
                <p className="forecastTempMin">9°</p>
              </div>
              <div>
                <p className="forecastDay">Mon</p>
                <img
                  className="forecastIcon"
                  src={WorkFile_mainImage}
                  alt="Weather"
                />
                <p className="forecastTempMax">12°</p>
                <p className="forecastTempMin">9°</p>
              </div>
              <div>
                <p className="forecastDay">Mon</p>
                <img
                  className="forecastIcon"
                  src={WorkFile_mainImage}
                  alt="Weather"
                />
                <p className="forecastTempMax">12°</p>
                <p className="forecastTempMin">9°</p>
              </div>
              <div>
                <p className="forecastDay">Mon</p>
                <img
                  className="forecastIcon"
                  src={WorkFile_mainImage}
                  alt="Weather"
                />
                <p className="forecastTempMax">12°</p>
                <p className="forecastTempMin">9°</p>
              </div>
              <div>
                <p className="forecastDay">Mon</p>
                <img
                  className="forecastIcon"
                  src={WorkFile_mainImage}
                  alt="Weather"
                />
                <p className="forecastTempMax">12°</p>
                <p className="forecastTempMin">9°</p>
              </div>
            </div>
          </div>

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
    const apiKey = "1da1773b8d8c37236ad8e28c3090a15f";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
