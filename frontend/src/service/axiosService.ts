import API_BASE_URL from "../config/config";
import axios, {AxiosInstance} from "axios";

const axiosService: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosService;