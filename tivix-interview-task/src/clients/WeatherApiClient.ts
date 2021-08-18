import HourWeatherListModel from "../models/HourWeatherListModel";
import ApiBaseClient from "./ApiBaseClient";

class WeatherApiClient extends ApiBaseClient {
    getWeather = (city: string) => {
        return this.get<HourWeatherListModel>(`${city}`);
    }
}

export default WeatherApiClient;