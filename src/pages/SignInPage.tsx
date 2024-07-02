import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import {
  GetLoginSessionResponseData,
  ExtendedLoginData,
} from "../interfaces/global.interfaces";
import apiService from "../api-services/apiServices";
import { AxiosResponse } from "axios";
import { setUser } from "../api-services/sessionStorage";

function SignInPage(): ReactElement {
  const navigate = useNavigate();
  const [showOtpAndPassword, setShowOtpAndPassword] = useState<boolean>(false);

  const loginMethods = useForm<ExtendedLoginData>({
    mode: "all",
  });

  const handleLoginSessionFormSubmit: SubmitHandler<ExtendedLoginData> = async (
    data
  ) => {
    if (!showOtpAndPassword) {
      try {
        console.log(data);
        const TokenResponse: AxiosResponse<GetLoginSessionResponseData> =
          await apiService.getLoginSession(data.email);
        toast.success("Token Response received successfully", {
          containerId: "toast-container-message",
        });
        console.log(TokenResponse);
        setUser(TokenResponse.data.token_response, data.email); // Save the token to session storage
        setShowOtpAndPassword(true);
      } catch (e) {
        console.error(e);
        toast.error("Error in fetching Login Session.", {
          containerId: "toast-container-message",
        });
      }
    } else {
      try {
        console.log(data);
        const SignInResponse = await apiService.userSignIn(data);
        toast.success("Login successful!", {
          containerId: "toast-container-message",
        });
        console.log(SignInResponse);
        
        navigate("/");
      } catch (e) {
        console.error(e);
        toast.error("Error during login.", {
          containerId: "toast-container-message",
        });
      }
    }
  };

  return (
    <div className="m-6">
      <div className="form-container">
        <FormProvider {...loginMethods}>
          <div className="fs-3">Sign-In</div>
          <form
            onSubmit={loginMethods.handleSubmit(handleLoginSessionFormSubmit)}
          >
            <div className="mb-3">
              <label
                id="label-get-login-session"
                className="form-label"
                htmlFor="label-for-get-session"
              >
                <span>
                  Enter email id:{" "}
                  <i
                    className="bi fs-6 bi-asterisk bi-danger"
                    style={{ color: "red" }}
                  ></i>
                </span>
              </label>
              <input
                className="form-input form-control"
                id="label-for-get-session"
                type="email"
                placeholder="abc@xyz.com"
                aria-describedby="emailLoginSession"
                {...loginMethods.register("email", { required: true })}
              />
            </div>
            {showOtpAndPassword && (
              <>
                <div className="mb-3">
                  <label
                    id="label-otp"
                    className="form-label"
                    htmlFor="label-for-otp"
                  >
                    <span>
                      Enter OTP:{" "}
                      <i
                        className="bi fs-6 bi-asterisk bi-danger"
                        style={{ color: "red" }}
                      ></i>
                    </span>
                  </label>
                  <input
                    className="form-input form-control"
                    id="label-for-otp"
                    type="number"
                    placeholder="Enter your OTP"
                    aria-describedby="otpField"
                    {...loginMethods.register("otp", { required: true })}
                  />
                </div>
                <div className="mb-3">
                  <label
                    id="label-password"
                    className="form-label"
                    htmlFor="label-for-password"
                  >
                    <span>
                      Enter Password:{" "}
                      <i
                        className="bi fs-6 bi-asterisk bi-danger"
                        style={{ color: "red" }}
                      ></i>
                    </span>
                  </label>
                  <input
                    className="form-input form-control"
                    id="label-for-password"
                    type="password"
                    placeholder="Enter your password"
                    aria-describedby="passwordField"
                    {...loginMethods.register("password", { required: true })}
                  />
                </div>
              </>
            )}
            <div className="d-flex flex-column">
              <button className="btn btn-outline-warning" type="submit">
                {showOtpAndPassword ? "Login" : "Get OTP"}
              </button>
              <span className="d-flex flex-row">
                Want to{" "}
                <div
                  className="mx-2 text-primary"
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/sign-up");
                  }}
                >
                  Sign-Up
                </div>{" "}
                instead?
              </span>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default SignInPage;
