import axios from "axios";
import { getUserToken } from "utils";

export const userClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

userClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getUserToken();
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);
