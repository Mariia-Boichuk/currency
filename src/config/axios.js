import axios from "axios";
const API_KEY = "8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI";

const API_URL = `https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`;
const BASE_URL = `${API_URL}`;
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
