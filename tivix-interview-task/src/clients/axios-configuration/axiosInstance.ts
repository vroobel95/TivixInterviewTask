import * as Axios from "axios";
import ConfigurationProvider from "../../configuration/ConfigurationProvider";

const axiosInstance = Axios.default.create({
  baseURL: ConfigurationProvider.getBaseUrl(),
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    units: "metric",
    lang: "pl",
    appid: ConfigurationProvider.getApiKey(),
    ...config.params
  };
  return config;
});

export default axiosInstance;
