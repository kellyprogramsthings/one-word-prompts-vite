import axios from "axios";
import { toast } from "react-toastify";
import { toastTime } from "./constants";
// import authHeader from "./auth-header";

const baseUrl = import.meta.env.VITE_APP_API;

axios.interceptors.response.use(response => {
  if (response.config.method === "post") {
    toast(response.data.message, { autoClose: toastTime });
  }
  return response;
}, e => {
  // why is your error object so broken
  const error = JSON.parse(JSON.stringify({ ...e?.response?.data }));
  // handle 404s individually so can forward with react router
  if (e?.response?.status === 404) {
    return Promise.resolve();
  }
  else {
    toast(
      error.message || "Something unexpected has happened.", 
      { autoClose: toastTime }
    );
  }
  return Promise.reject({ error });
});

const get = (url, header) => {
  if (header) {
    return axios.get(url, { headers: header });
  }
  return axios.get(url);
}

const post = (url, payload, header) => {
  if (header) {
    return axios.post(url, payload, { headers: header });
  }
  return axios.post(url, payload);
}

const deactivate = (url, header) => {
  if (header) {
    return axios.delete(url, { headers: header })
  }
  return axios.delete(url);
}

const api = {
  baseUrl,
  get,
  post,
  deactivate
}

export default api;