import "./MainPage.scss";

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WeatherApiClient from "../../clients/WeatherApiClient";
import HourWeatherListModel from "../../models/HourWeatherListModel";
import SearchBar from "../shared/SearchBar";
import WeatherList from "../weather/WeatherList";
import TabsBar from "../shared/TabsBar";
import * as _ from "lodash";
import HourWeatherModel from "../../models/HourWeatherModel";
import CurrentWeather from "../weather/CurrentWeather";
import WeatherHelper from "../../helpers/WeatherHelper";

const _weatherApiClient = new WeatherApiClient();

const MainPage: React.FC = () => {
  const [weatherModel, setWeatherModel] = useState<HourWeatherListModel>();
  const [dates, setDates] = useState<string[]>();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedDateWeathers, setSelectedDateWeathers] = useState<
    HourWeatherModel[]
  >([]);
  const [error, setError] = useState<string>('');

  const handleButtonClick = async () => {
    try {
      const weathers = _weatherApiClient.getWeather("Londyn");
      const { data } = await weathers;
      setWeatherModel(data as HourWeatherListModel);
    } catch (error) {
      setError("Wystąpił błąd podczas pobierania danych");
    }
    
  };

  useEffect(() => {
    if (weatherModel) {
      const items = weatherModel.list;
      const allDates = [] as string[];
      items.forEach((x) => {
        allDates.push(x.dt_txt.split(" ")[0]);
      });

      const groupDates = _.groupBy(allDates);
      setDates(_.keys(groupDates));
    }
  }, [weatherModel]);

  useEffect(() => {
    if (weatherModel) {
      setSelectedDateWeathers(
        weatherModel.list.filter((x) => x.dt_txt.includes(selectedDate))
      );
    }
  }, [weatherModel, selectedDate]);

  return (
    <div className="main-page">
      <div className="title">{"Znajdź pogodę dla swojego miasta"}</div>
      <SearchBar onClick={handleButtonClick} />
      {error ? <div className="error"></div> : null}
      {weatherModel && dates ? (
        <TabsBar<string>
          items={dates?.map((date) => ({
            value: date,
            label: date,
          }))}
          selectedItem={selectedDate}
          onSelectedTabChange={(date) => setSelectedDate(date)}
        />
      ) : null}
      {selectedDate && weatherModel ? (
        <CurrentWeather
          meanHumidity={WeatherHelper.getMeanValue(
            weatherModel.list
              .filter((w) => w.dt_txt.includes(selectedDate))
              .map((x) => x.main.humidity)
          )}
          maxTemperature={WeatherHelper.getMeanValue(
            weatherModel.list
              .filter((w) => w.dt_txt.includes(selectedDate))
              .map((x) => x.main.temp_max)
          )}
          minTemperature={WeatherHelper.getMeanValue(
            weatherModel.list
              .filter((w) => w.dt_txt.includes(selectedDate))
              .map((x) => x.main.temp_min)
          )}
          meanTemperatureDay={WeatherHelper.getMeanValue(
            weatherModel.list
              .filter(
                (w) =>
                  w.dt_txt.includes(selectedDate) &&
                  +w.dt_txt.split(" ")[1].split(":")[0] >= 6 &&
                  +w.dt_txt.split(" ")[1].split(":")[0] <= 15
              )
              .map((x) => x.main.temp)
          )}
          meanTemperatureNight={WeatherHelper.getMeanValue(
            weatherModel.list
              .filter(
                (w) =>
                  w.dt_txt.includes(selectedDate) &&
                  +w.dt_txt.split(" ")[1].split(":")[0] >= 18 &&
                  +w.dt_txt.split(" ")[1].split(":")[0] <= 0
              )
              .map((x) => x.main.temp)
          )}
        />
      ) : null}
      {selectedDateWeathers && selectedDate ? (
        <WeatherList weathers={selectedDateWeathers} date={selectedDate} />
      ) : null}
    </div>
  );
};

export default MainPage;
