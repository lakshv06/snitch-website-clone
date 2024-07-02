export interface UserGetLoginSessionData{
    email: string;
}

export interface UserSignUpData{
    name: string;
    email: string;
    password: string;
    confirm_password: string; 
}

export interface ExtendedLoginData extends UserGetLoginSessionData {
    otp?: number;
    password?: string;
  }

export interface GetLoginSessionResponseData{
token_response: string;
email: string;
}

export interface UserSignUpResponseData{

}

export interface UserSignInResponseData{

}

export interface UserLogOutResponseData{
    
}