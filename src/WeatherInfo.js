import React from "react";
import FormattedDate from "./FormattedDate.js";
import FormattedFirstdate from "./FormattedFirstdate.js";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon.js";

import wind from "./wind.svg";
import vmc from "./vmc.svg";
import humidity from "./humidity.svg";
import pressure from "./pressure.svg";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="dateData">
        <span className="dateYear">
          <FormattedFirstdate date={props.data.date} />
        </span>
        <h1 className="cityName">{props.data.city}</h1>
        <span className="dayWeekTime">
          <FormattedDate date={props.data.date} />
        </span>
      </div>

      <div className="dayWeather">
        <div className="dayWeatherImage">
          <WeatherIcon
            code={props.data.icon}
            description={props.data.description}
          />
        </div>
        <div className="dayWeatherTemp">
          <WeatherTemperature celsius={props.data.temperature} />
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
    </div>
  );
}
