import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import WeatherApiClient from '../../clients/WeatherApiClient';
import HourWeatherListModel from '../../models/HourWeatherListModel';

const _weatherApiClient = new WeatherApiClient();

const MainPage: React.FC = () => {
    const [weatherModel, setWeatherModel] = useState<HourWeatherListModel>();

    const handleButtonClick = async () => {
        const weathers = _weatherApiClient.getWeather('Londyn');
        const { data } = await weathers;
        setWeatherModel(data as HourWeatherListModel);
    }

    useEffect(() => {
        console.log(weatherModel?.list[0].main.temp);
    }, [weatherModel]);

    return (
        <div className="search-bar">
            {/* <input className="search"/> */}
            <button className="search-button" onClick={handleButtonClick}/>
        </div>
        
    );
}

export default MainPage;