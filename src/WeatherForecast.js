import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecastStyle.css";
import WeatherForecastDay from "./WeatherForecastDay.js";

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
        <div className="wrapperForecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="weatherForecastDiv" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
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
