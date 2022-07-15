import {API_URL} from '../config/constants';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async config => {
    config.headers = {
      Accept: 'text/plain',
      'Content-Type': 'application/json',
    };

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => response,

  async error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default api;
