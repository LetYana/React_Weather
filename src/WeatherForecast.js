import React, { useState } from "react";
import axios from "axios";
import WeatherIconForecast from "./WeatherIconForecast.js";
import "./WeatherForecastStyle.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForecast">
        <p className="weatherForecastTitle">Forecast for next 5 days</p>
        <div className="weatherForecastDiv">
          <div>
            <p className="forecastDay">Mon</p>

            <WeatherIconForecast code="01d" />

            <p className="forecastTempMax">12°</p>
            <p className="forecastTempMin">9°</p>
          </div>

          {/* <div>
          <p className="forecastDay">Mon</p>
          <img className="forecastIcon" src={wind} alt="Weather" />
          <p className="forecastTempMax">12°</p>
          <p className="forecastTempMin">9°</p>
        </div> */}
        </div>
      </div>
    );
  } else {
    const apiKey = "f81614abe2395d5dfecd45b9298041de";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
