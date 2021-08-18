import * as Axios from "axios";
import axiosInstance from "./axios-configuration/axiosInstance";

abstract class ApiBaseClient {
  private _axiosInstance: Axios.AxiosInstance = axiosInstance;

  protected get = <TResult>(param: string) => {
    return this._axiosInstance.get<TResult>('', {params: {q: param}});
  };
}

export default ApiBaseClient;
