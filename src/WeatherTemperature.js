import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <h2>
          {Math.round(props.celsius)}°
          <span className="unitText">
            <span style={{ fontWeight: "bold" }}>C</span> |{" "}
            <a href="/" onClick={showFahrenheit}>
              F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div>
        <h2>
          {Math.round(fahrenheit)}°
          <span className="unitText">
            <a href="/" onClick={showCelsius}>
              C
            </a>{" "}
            | <span style={{ fontWeight: "bold" }}>F</span>
          </span>
        </h2>
      </div>
    );
  }
}
