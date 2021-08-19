const iconPaths = {
  clearSkyDay: require("./01d.png"),
  clearSkyNight: require("./01n.png"),
  fewCloudsDay: require("./02d.png"),
  fewCloudsNight: require("./02n.png"),
  scatteredClouds: require("./03.png"),
  brokenClouds: require("./04.png"),
  showerRain: require("./09.png"),
  rainDay: require("./10d.png"),
  rainNight: require("./10n.png"),
  thunderstorm: require("./11.png"),
  snow: require("./13.png"),
  mist: require("./50.png"),
};

export type IconKey = keyof typeof iconPaths;

namespace IconKey {
  export const getIconByName = (icon: string) => {
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

export default iconPaths;
