import axios from "axios";
import api from "../utils/api.js";

export const register = (username, password) => {
  return axios.post(api.baseUrl + "/signup", {
    username,
    password,
  });
};

export const login = (username, password) => {
  return axios
    .post(api.baseUrl + "/signin", { username, password })
    .then(r => {
      if (r.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(r.data));
        return true;
      }
      else {
        return r.data;
      }
    })
    .catch(e => {
      console.error("Error logging in:", e);
      return e.message;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};