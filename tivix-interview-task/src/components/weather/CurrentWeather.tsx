import "./CurrentWeather.scss";

import React from "react";
import CurrentWeatherElement from "./CurrentWeatherElement";

interface CurrentWeatherProps {
  meanTemperatureDay: string;
  meanTemperatureNight: string;
  meanHumidity: string;
  minTemperature: string;
  maxTemperature: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
  return (
    <div className="current-weather">
      {props.meanTemperatureDay !== "NaN" ? <CurrentWeatherElement
        className="temperature-day"
        label="Średnia temperatura (dzień)"
        value={props.meanTemperatureDay + "°C"}
      /> : null}
      {props.meanTemperatureNight !== "NaN" ? <CurrentWeatherElement
        className="temperature-night"
        label="Średnia temperatura (noc)"
        value={props.meanTemperatureNight + "°C"}
      /> : null}
      {props.minTemperature !== "NaN" ? <CurrentWeatherElement
        className="min-temperature"
        label="Minimalna temperatura"
        value={props.minTemperature + "°C"}
      /> : null}
      {props.maxTemperature !== "NaN" ? <CurrentWeatherElement
        className="max-temperature"
        label="Maksymalna temperatura"
        value={props.maxTemperature + "°C"}
      /> : null}
      {props.meanHumidity !== "NaN" ? <CurrentWeatherElement
        className="humidity"
        label="Wilgotność"
        value={props.meanHumidity + "%"}
      /> : null}
    </div>
  );
};

export default CurrentWeather;
