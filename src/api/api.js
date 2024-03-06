import axios from "axios";

// Define your Axios instance
export const Axios = axios.create({
  baseURL: "https://ecommerce-ebcx.onrender.com/",
  // baseURL: "http://localhost:5000/",
});

// Add an interceptor for handling errors (if needed)
Axios.interceptors.response.use(
  (response) => {
    // If the request was successful, return the response
    return response;
  },
  (error) => {
    // Error handling logic here
    return Promise.reject(error);
  }
);

export default Axios;
