import WeatherEnum from "../enums/WeatherEnum";
import WeatherIconEnum from "../enums/WeatherIconEnum";

interface WeatherModel {
    main: WeatherEnum;
    description: string;
    icon: WeatherIconEnum;
}

export default WeatherModel;