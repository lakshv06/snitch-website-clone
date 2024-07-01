import axios from "axios";
import { toast } from "react-toastify";

function axiosResponseInterceptor() {
  axios.interceptors.response.use(
    (response) => {
      // Handle successful responses
      return response;
    },
    (error) => {
      // Handle error responses
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { status, data } = error.response;
        console.error(`Request failed with status ${status}:`, data);

        // Example: Display a toast notification for error
        toast.error(`Request failed with status ${status}`, {
          containerId: "toast-container-message",
        });
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        toast.error("No response received", {
          containerId: "toast-container-message",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", error.message);
        toast.error("Error setting up request", {
          containerId: "toast-container-message",
        });
      }

      // Return a rejected promise with the error
      return Promise.reject(error);
    }
  );
}

export default axiosResponseInterceptor;
