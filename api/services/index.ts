import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInterceptor.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");

    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  (response) => {
    // Handle response data...

    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
