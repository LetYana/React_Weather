import React from "react";
import FormattedDate from "./FormattedDate.js";
import FormattedFirstdate from "./FormattedFirstdate.js";

import wind from "./wind.svg";
import vmc from "./vmc.svg";
import humidity from "./humidity.svg";
import pressure from "./pressure.svg";
// import icon_50d from "./icon_50d.svg";
// import icon_13d from "./icon_13d.svg";
// import icon_11d from "./icon_11d.svg";
import icon_10d from "./icon_10d.svg";
// import icon_09d from "./icon_09d.svg";
// import icon_04d from "./icon_04d.svg";
// import icon_03d from "./icon_03d.svg";
// import icon_02d from "./icon_02d.svg";
import icon_01d from "./icon_01d.svg";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="dateData">
        <p className="dateYear">
          <FormattedFirstdate date={props.data.date} />
        </p>
        <h1 className="cityName">{props.data.city}</h1>
        <p className="dayWeekTime">
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div className="dayWeather">
        <div className="dayWeatherImage">
          <img
            className="dayWeatherIcon"
            src={props.data.icon}
            alt={props.data.description}
          />
        </div>
        <div className="dayWeatherTemp">
          <h2>{Math.round(props.data.temperature)}°C</h2>
          <h3>{props.data.description}</h3>
        </div>
      </div>

      <div className="dayWeatherDetails">
        <div className="detailsWind">
          <img className="detailsIcon" src={wind} alt="Weather" />
          <p className="detailsProperty">Wind</p>
          <p className="detailsValue">{Math.round(props.data.wind)} km/h</p>
        </div>
        <div className="detailsHumidity">
          <img className="detailsIcon" src={humidity} alt="Weather" />
          <p className="detailsProperty">Humidity</p>
          <p className="detailsValue">{props.data.humidity}%</p>
        </div>
        <div className="detailsVMC">
          <img className="detailsIcon" src={vmc} alt="Weather" />
          <p className="detailsProperty">VMC</p>
          <p className="detailsValue">{props.data.visibility}</p>
        </div>
        <div className="detailsPressure">
          <img className="detailsIcon" src={pressure} alt="Weather" />
          <p className="detailsProperty">Pressure</p>
          <p className="detailsValue">{props.data.pressure} mb</p>
        </div>
      </div>

      <div className="weatherForecast">
        <p className="weatherForecastTitle">Forecast for next 5 days</p>
        <div className="weatherForecastDiv">
          <div>
            <p className="forecastDay">Mon</p>
            <img className="forecastIcon" src={props.data.icon} alt="Weather" />
            <p className="forecastTempMax">12°</p>
            <p className="forecastTempMin">9°</p>
          </div>
          <div>
            <p className="forecastDay">Mon</p>
            <img className="forecastIcon" src={props.data.icon} alt="Weather" />
            <p className="forecastTempMax">12°</p>
            <p className="forecastTempMin">9°</p>
          </div>
          <div>
            <p className="forecastDay">Mon</p>
            <img className="forecastIcon" src={icon_01d} alt="Weather" />
            <p className="forecastTempMax">12°</p>
            <p className="forecastTempMin">9°</p>
          </div>
          <div>
            <p className="forecastDay">Mon</p>
            <img className="forecastIcon" src={icon_01d} alt="Weather" />
            <p className="forecastTempMax">12°</p>
            <p className="forecastTempMin">9°</p>
          </div>
          <div>
            <p className="forecastDay">Mon</p>
            <img className="forecastIcon" src={icon_10d} alt="Weather" />
            <p className="forecastTempMax">12°</p>
            <p className="forecastTempMin">9°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
