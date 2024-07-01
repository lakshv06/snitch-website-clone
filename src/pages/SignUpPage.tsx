import { ReactElement } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { UserSignUpData } from "../interfaces/global.interfaces";
import apiService from "../api-services/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUpPage(): ReactElement {
  const navigate = useNavigate();

  const signUpMethods = useForm<UserSignUpData>({
    mode: "all",
  });

  const handleSignUpFormSubmit: SubmitHandler<UserSignUpData> = async (
    data
  ) => {
    try {
      console.log(data);
      const SignUpResponse = await apiService.userSignUp(data);
      if (SignUpResponse.status === 201) {
        toast.success("Sign-Up successful!", {
        containerId: "toast-container-message",
        });
      } else {
        toast.error("Error in Sign-up! Please try again.", {
          containerId: "toast-container-message",
        });
      }
      signUpMethods.reset(); // Reset the form
    } catch (e) {
      console.error(e);
      toast.error("Error during Sign-Up.", {
        containerId: "toast-container-message",
      });
    }
  };

  return (
    <div className="m-6 form-container">
      <FormProvider {...signUpMethods}>
        <div className="fs-3">Sign-Up</div>
        <form onSubmit={signUpMethods.handleSubmit(handleSignUpFormSubmit)}>
          <div className="mb-3">
            <label
              id="label-Sign-up-name"
              className="form-label"
              htmlFor="label-for-signup-name"
            >
              <span>
                Enter Your Name:{" "}
                <i
                  className="bi fs-6 bi-asterisk bi-danger"
                  style={{ color: "red" }}
                ></i>
              </span>
            </label>
            <input
              className="form-input form-control"
              id="label-for-signup-name"
              type="text"
              placeholder="Type your name here"
              aria-describedby="nameForSignUp"
              {...signUpMethods.register("name", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label
              id="label-Sign-up-email"
              className="form-label"
              htmlFor="label-for-signup-email"
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
              id="label-for-signup-email"
              type="email"
              placeholder="abc@xyz.com"
              aria-describedby="emailForSignUp"
              {...signUpMethods.register("email", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label
              id="label-password-email"
              className="form-label"
              htmlFor="label-for-signup-password"
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
              id="label-for-signup-password"
              type="password"
              placeholder="Enter your password"
              aria-describedby="Password For SignUp"
              {...signUpMethods.register("password", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label
              id="label-confirm-password-email"
              className="form-label"
              htmlFor="label-for-signup-confirm-password"
            >
              <span>
                Enter Password Again:{" "}
                <i
                  className="bi fs-6 bi-asterisk bi-danger"
                  style={{ color: "red" }}
                ></i>
              </span>
            </label>
            <input
              className="form-input form-control"
              id="label-for-signup-confirm-password"
              type="password"
              placeholder="Please confirm your password"
              aria-describedby="Confirm Password For SignUp"
              {...signUpMethods.register("confirm_password", {
                required: true,
              })}
            />
          </div>
          <div className="d-flex flex-column">
            <button className="btn btn-outline-warning" type="submit">
              Sign Up
            </button>
            <span className="d-flex flex-row">
              Want to{" "}
              <div
                className="mx-2 text-primary"
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Sign-In
              </div>{" "}
              instead?
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
export default SignUpPage;
