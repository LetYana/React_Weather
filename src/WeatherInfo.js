import React from "react";
import FormattedDate from "./FormattedDate.js";
import FormattedFirstdate from "./FormattedFirstdate.js";
import WorkFile_mainImage from "./WorkFile_mainImage.svg";
import WorkFile_properImage from "./WorkFile_properImage.svg";

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
            src={props.data.iconUrl}
            alt="Weather"
          />
        </div>
        <div className="dayWeatherTemp">
          <h2>{Math.round(props.data.temperature)}°C</h2>
          <h3>{props.data.description}</h3>
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
          <p className="detailsValue">{Math.round(props.data.wind)} km/h</p>
        </div>
        <div className="detailsHumidity">
          <img
            className="detailsIcon"
            src={WorkFile_properImage}
            alt="Weather"
          />
          <p className="detailsProperty">Humidity</p>
          <p className="detailsValue">{props.data.humidity}%</p>
        </div>
        <div className="detailsUVIndex">
          <img
            className="detailsIcon"
            src={WorkFile_properImage}
            alt="Weather"
          />
          <p className="detailsProperty">VMC</p>
          <p className="detailsValue">{props.data.visibility}</p>
        </div>
        <div className="detailsPressure">
          <img
            className="detailsIcon"
            src={WorkFile_properImage}
            alt="Weather"
          />
          <p className="detailsProperty">Pressure</p>
          <p className="detailsValue">{props.data.pressure} mb</p>
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
    </div>
  );
}
