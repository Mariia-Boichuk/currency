import axios from "axios";
export const API_KEY = "6hU9a2ox5HHfDNzzeIiDMCgFnHcOy0wo";

const API_URL = "https://api.apilayer.com/exchangerates_data";
const BASE_URL = `${API_URL}`;
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { apikey: API_KEY },
});
