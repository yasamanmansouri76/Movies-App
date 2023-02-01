import axios from "axios";
import constants from "../constants/index";

const api = axios.create({
  baseURL: constants.BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  params: {
    api_key: constants.API_KEY,
  },
});

api.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response && err.response.status >= 400) {
      const errors = err.response.data.errors;
      for (const e in errors) {
        alert(e + " " + errors[e][0]);
      }
    }
    if (err.response && err.response.status === 500) {
      alert("Network Error");
    }
    if (err.response && err.response.status <= 403) {
      alert(err.response.data.detail);
    } else {
      return Promise.reject(err);
    }
  }
);

export default api;
