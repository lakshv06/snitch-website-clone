import { ReactElement } from "react";
import NavHeader from "./NavigationHeader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignInPage(): ReactElement{

    const navigate = useNavigate();

    const navigateHomePage = (): void =>{
        toast.success("Taking you to Home Page.", {containerId: "toast-container-message"});
        navigate("/home-page");
    }

    return(
        <div className="">
            Sign In Page
            <button onClick={navigateHomePage}>Go</button>
        </div>
    );
}

export default SignInPage;
