import axios from "axios";

function axiosRequestInterceptor() {
  axios.interceptors.request.use(
    (config) => {
      // Get token from wherever it's stored (e.g., localStorage, sessionStorage)
      const token = sessionStorage.getItem("token_response");

      // Add token to headers if it exists
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}

export default axiosRequestInterceptor;
