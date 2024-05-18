import axios from 'axios';
import toast from 'react-hot-toast';

const link1 = "https://resumestudio.vercel.app";
const link2 = "http://localhost:8000";
const link = process.env.NODE_ENV === "production" ? link1 : link2;

const axiosInstance = axios.create({
    baseURL: link,
    timeout: 20000, // Set a timeout value in milliseconds
    headers: {
        'Content-Type': 'application/json', // Set the content type for requests
        // Add any other headers you need
    },
});

axiosInstance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        if (error.response) {
            if (error.response.status === 401) {
                toast.error(error.response.data.message || "Unauthorized");
                return {error: error.response.data.message || "Unauthorized"}
            } else if (error.response.status === 403) {
                toast.error(error.response.data.message || "Forbidden");
                return {error: error.response.data.message || "Forbidden"}
            } else if (error.response.status === 404) {
                toast.error(error.response.data.message || "Not Found");
                return {error: error.response.data.message || "Not Found"}
            } else if (error.response.status === 500) {
                toast.error(error.response.data.message || "Internal Server Error");
                return {error: error.response.data.message || "Internal Server Error"}
            } else {
                toast.error(error.response.data.message || "Error");
                return {error: error.response.data.message || "Error"};
            }
        } else {
            toast.error("Network Error");
            return {error: "Network Error"};
        }
        // return Promise.reject(error);
    }
);

export default axiosInstance;