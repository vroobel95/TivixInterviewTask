import iconPaths from "../icons/iconPaths";

class IconHelper {
  static getIconByName = (icon: string) => {
    switch (icon) {
      case "01d":
        return iconPaths.clearSkyDay;
      case "01n":
        return iconPaths.clearSkyNight;
      case "02d":
        return iconPaths.fewCloudsDay;
      case "02n":
        return iconPaths.fewCloudsNight;
      case "03d":
      case "03n":
        return iconPaths.scatteredClouds;
      case "04d":
      case "04n":
        return iconPaths.brokenClouds;
      case "09d":
      case "09n":
        return iconPaths.showerRain;
      case "10d":
        return iconPaths.rainDay;
      case "10n":
        return iconPaths.rainNight;
      case "11d":
      case "11n":
        return iconPaths.thunderstorm;
      case "13d":
      case "13n":
        return iconPaths.snow;
      case "50d":
      case "50n":
        return iconPaths.mist;
      default:
        return "NoInfo";
    }
  };
}

export default IconHelper;
