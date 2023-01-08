import { axiosInstance } from "../config/axios";
import { handleErrors } from "./handleErrors";

export const getCurrencyRates = async () => {
  return await handleErrors(axiosInstance.get(""));
};
