import axios from "axios";
import Cookies from "js-cookie";
const baseUrl = process.env.REACT_APP_URL;
const accessToken = Cookies.get("accessToken");

const Axios = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosWithAuth = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export default Axios;
