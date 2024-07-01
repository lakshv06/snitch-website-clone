import axios, { Axios, AxiosResponse } from "axios";
import { GetLoginSessionResponseData, UserSignUpData, UserSignUpResponseData } from "../interfaces/global.interfaces";
import environmentData from "../environment-constants";

class snitchAPI {
  endpoints: { [key: string]: string };

  base_url: string;

  constructor() {
    this.endpoints = {
      get_login_session: "/get_login_session",
      sign_up: "/sign-up"
    };

    this.base_url = environmentData.url;
  }

  getLoginSession = async(email: string):Promise<AxiosResponse<GetLoginSessionResponseData>> =>{
    return axios.post(`${this.base_url}${this.endpoints.get_login_session}/`, {username: email})
  }

  userSignUp = async(data: UserSignUpData): Promise<AxiosResponse<UserSignUpResponseData>>=>{
    return axios.post(`${this.base_url}${this.endpoints.sign_up}/`, data)
  }
  
}
const apiService = new snitchAPI();

export default apiService;
