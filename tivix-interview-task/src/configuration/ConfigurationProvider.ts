const AppConfig = require("../app.config.json");

class ConfigurationProvider {
  static getBaseUrl = (): string => {
    let result = AppConfig.baseUrl as string;

    if (result.lastIndexOf("/") === result.length - 1) {
      result = result.substring(0, result.length - 1);
    }

    return result;
  };

  static getApiKey = (): string => {
    return AppConfig.apiKey;
  };
}

export default ConfigurationProvider;
