import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://rentspot-j45m.onrender.com",
  withCredentials: true,
});
export default axiosInstance;
