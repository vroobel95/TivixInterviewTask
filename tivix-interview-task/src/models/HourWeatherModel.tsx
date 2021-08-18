import MainModel from "./MainModel";
import WeatherModel from "./WeatherModel";

interface HourWeatherModel {
    main: MainModel;
    weather: WeatherModel;
}

export default HourWeatherModel;