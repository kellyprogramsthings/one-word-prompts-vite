import axios from "axios";

const baseUrl = process.env.REACT_APP_API;

const get = (url) => {
  return axios.get(url);
}

const post = (url, data, headers) => {
  if (headers) {
    return axios.post(url, data, headers);
  }
  return axios.post(url, data);
}

const api = {
  baseUrl,
  get,
  post,
};

export default api;