import axios, { AxiosResponse } from "axios";
import { ExtendedLoginData, GetLoginSessionResponseData, UserLogOutResponseData, UserSignInResponseData, UserSignUpData, UserSignUpResponseData } from "../interfaces/global.interfaces";
import environmentData from "../environment-constants";

class snitchAPI {
  endpoints: { [key: string]: string };

  base_url: string;

  constructor() {
    this.endpoints = {
      get_login_session: "/get-login-session",
      sign_up: "/sign-up",
      sign_in: "/sign-in",
      sign_out: "/sign-out"
    };

    this.base_url = environmentData.url;
  }

  getLoginSession = async(email: string):Promise<AxiosResponse<GetLoginSessionResponseData>> =>{
    return axios.post(`${this.base_url}${this.endpoints.get_login_session}/`, {email: email})
  }

  userSignUp = async(data: UserSignUpData): Promise<AxiosResponse<UserSignUpResponseData>>=>{
    return axios.post(`${this.base_url}${this.endpoints.sign_up}/`, data)
  }

  userSignIn = async(data: ExtendedLoginData): Promise<AxiosResponse<UserSignInResponseData>> => {
    return axios.post(`${this.base_url}${this.endpoints.sign_in}/`, data);
  }

  userSignOut = async(data: {email: string | null}): Promise<AxiosResponse<UserLogOutResponseData>> => {
    return axios.post(`${this.base_url}${this.endpoints.sign_out}/`, data);
  }
  
}
const apiService = new snitchAPI();

export default apiService;
