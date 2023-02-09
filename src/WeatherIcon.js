import React from "react";

import mist from "./icon_50d.svg";
import snow from "./icon_13d.svg";
import thunderstorm from "./icon_11d.svg";
import rain from "./icon_10d.svg";
import shower_rain from "./icon_09d.svg";
import broken_clouds from "./icon_04d.svg";
import scattered_clouds from "./icon_03d.svg";
import few_clouds from "./icon_02d.svg";
import clear_sky from "./icon_01d.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": { clear_sky },
    "01n": { clear_sky },
    "02d": { few_clouds },
    "02n": { few_clouds },
    "03d": { scattered_clouds },
    "03n": { scattered_clouds },
    "04d": { broken_clouds },
    "04n": { broken_clouds },
    "09d": { shower_rain },
    "09n": { shower_rain },
    "10d": { rain },
    "10n": { rain },
    "11d": { thunderstorm },
    "11n": { thunderstorm },
    "13d": { snow },
    "13n": { snow },
    "50d": { mist },
    "50n": { mist },
  };

  return (
    <div>
      <img
        className="dayWeatherIcon"
        src={codeMapping[props.code]}
        alt={props.description}
      />
    </div>
  );
}
