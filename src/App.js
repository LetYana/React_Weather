import "./App.css";
import WorkFile_searchImage from "./WorkFile_searchImage.svg";
import WorkFile_mainImage from "./WorkFile_mainImage.svg";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <div className="citySearch">
          <img src={WorkFile_searchImage} alt="City Search" />
          <input
            className="cityInput"
            type="search"
            placeholder="Enter a city"
            autofocus
            required
            autocomplete="off"
          />
          <input className="citySubmit" type="submit" />
        </div>

        <div className="dateData">
          <p className="dateYear">January 28, 2023</p>
          <h1 className="cityName">Amsterdam</h1>
          <p className="dayWeekTime">Saturday 19:21</p>
        </div>

        <div className="dayWeather">
          <div className="dayWeatherImage">
            <img
              className="dayWeatherIcon"
              src={WorkFile_mainImage}
              alt="Weather"
            />
          </div>
          <div className="dayWeatherTemp">
            <h2>12°C</h2>
            <h3>Broken clouds</h3>
          </div>
        </div>

        <div className="dayWeatherDetails">
          <div className="detailsWind">
            <img className="detailsIcon" href="#" alt="Weather" />
            <p className="detailsProperty">Wind</p>
            <p className="detailsValue">11 km/h</p>
          </div>
          <div className="detailsHumidity">
            <img className="detailsIcon" href="#" alt="Weather" />
            <p className="detailsProperty">Humidity</p>
            <p className="detailsValue">77%</p>
          </div>
          <div className="detailsUVIndex">
            <img className="detailsIcon" href="#" alt="Weather" />
            <p className="detailsProperty">UV Index</p>
            <p className="detailsValue">0 of 10</p>
          </div>
          <div className="detailsPressure">
            <img className="detailsIcon" href="#" alt="Weather" />
            <p className="detailsProperty">Pressure</p>
            <p className="detailsValue">1030.1 mb</p>
          </div>
        </div>

        <div className="weatherForecast">
          <p>Forecast for next 6 days</p>
          <div>
            <div>
              <p className="forecastDay">Mon</p>
              <img className="forecastIcon" href="#" alt="Weather" />
              <p className="forecastTempMax">12°C</p>
              <p className="forecastTempMin">9°C</p>
            </div>
            <div>
              <p className="forecastDay">Mon</p>
              <img className="forecastIcon" href="#" alt="Weather" />
              <p className="forecastTempMax">12°C</p>
              <p className="forecastTempMin">9°C</p>
            </div>
            <div>
              <p className="forecastDay">Mon</p>
              <img className="forecastIcon" href="#" alt="Weather" />
              <p className="forecastTempMax">12°C</p>
              <p className="forecastTempMin">9°C</p>
            </div>
            <div>
              <p className="forecastDay">Mon</p>
              <img className="forecastIcon" href="#" alt="Weather" />
              <p className="forecastTempMax">12°C</p>
              <p className="forecastTempMin">9°C</p>
            </div>
            <div>
              <p className="forecastDay">Mon</p>
              <img className="forecastIcon" href="#" alt="Weather" />
              <p className="forecastTempMax">12°C</p>
              <p className="forecastTempMin">9°C</p>
            </div>
            <div>
              <p className="forecastDay">Mon</p>
              <img className="forecastIcon" href="#" alt="Weather" />
              <p className="forecastTempMax">12°C</p>
              <p className="forecastTempMin">9°C</p>
            </div>
          </div>
        </div>

        <div>
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
}

export default App;
