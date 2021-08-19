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

const _weatherApiClient = new WeatherApiClient();

const MainPage: React.FC = () => {
  const [weatherModel, setWeatherModel] = useState<HourWeatherListModel>();
  const [dates, setDates] = useState<string[]>();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedDateWeathers, setSelectedDateWeathers] = useState<HourWeatherModel[]>([]);

  const handleButtonClick = async () => {
    const weathers = _weatherApiClient.getWeather("Londyn");
    const { data } = await weathers;
    setWeatherModel(data as HourWeatherListModel);
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
      setSelectedDateWeathers(weatherModel.list.filter(x => x.dt_txt.includes(selectedDate)));
    }
  }, [weatherModel, selectedDate])

  return (
    <div className="main-page">
      <div className="title">{"Znajdź pogodę dla swojego miasta"}</div>
      <SearchBar onClick={handleButtonClick} />
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
      {selectedDateWeathers && selectedDate ? (
        <WeatherList weathers={selectedDateWeathers} date={selectedDate}/>
      ) : null}
    </div>
  );
};

export default MainPage;
