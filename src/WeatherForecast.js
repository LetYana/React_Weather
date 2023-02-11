import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecastStyle.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <p className="weatherForecastTitle">Forecast for next 5 days</p>
      <div className="weatherForecastDiv">
        <div>
          <p className="forecastDay">Mon</p>

          <WeatherIcon code="01d" />

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
}
