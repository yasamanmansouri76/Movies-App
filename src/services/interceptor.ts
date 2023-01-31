import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer 612ccb541a136afca339984ccf0f91e9",
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
