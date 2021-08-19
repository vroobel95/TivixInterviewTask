import MainModel from "./MainModel";
import WeatherModel from "./WeatherModel";

interface HourWeatherModel {
    dt_txt: string;
    main: MainModel;
    weather: WeatherModel[];
}

export default HourWeatherModel;