import "./WeatherList.scss";

import React from "react";
import IconHelper from "../../helpers/IconHelper";
import HourWeatherModel from "../../models/HourWeatherModel";

interface WeatherListProps {
  weathers: HourWeatherModel[];
  date: string;
}

const WeatherList: React.FC<WeatherListProps> = (props) => {
  const renderHeader = () => {
    return (
      <div className="header">
        <div>{"Godzina"}</div>
        <div>{"Temperatura"}</div>
        <div>{"Prognoza"}</div>
        <div>{"Wilgotność"}</div>
      </div>
    );
  };

  const renderContent = (weather: HourWeatherModel) => {
    const hour = weather.dt_txt
      .split(" ")[1]
      .substring(
        weather.dt_txt.split(" ")[1].length - 3,
        weather.dt_txt.split(" ")[1].length - 8
      );
      
    return (
      <div className="element">
        <div>{hour}</div>
        <div>
          {weather.main.temp}
          {"°C"}
        </div>
        <div>
          <img
            src={IconHelper.getIconByName(weather.weather[0].icon).default}
            alt=""
          />
        </div>
        <div>
          {weather.main.humidity}
          {"%"}
        </div>
      </div>
    );
  };

  return (
    <div className="weather-list">
      {renderHeader()}
      {props.weathers.map((weather) => {
        return renderContent(weather);
      })}
    </div>
  );
};

export default WeatherList;
