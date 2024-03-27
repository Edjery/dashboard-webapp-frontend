import axios from "axios";

// const BASE_URL = "192.168.1.169";
const BASE_URL = "localhost";
const PORT = "6800";
const API_BASE_URL = `http://${BASE_URL}:${PORT}/api/`;
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;
