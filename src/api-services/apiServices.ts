import axios, { Axios, AxiosResponse } from "axios";
import {
//   randomData
} from "../interfaces/global.interfaces";
import environmentData from "../environment-constants";

class snitchAPI {
  endpoints: { [key: string]: string };

  base_url: string;

  constructor() {
    this.endpoints = {
      question: "/test_app/question/",
    };

    this.base_url = `${environmentData.url}`;
  }

  
}
const apiService = new snitchAPI();

export default apiService;
