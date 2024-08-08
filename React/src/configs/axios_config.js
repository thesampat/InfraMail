import axios from "axios";

const apiaxios = axios.create({});

apiaxios.interceptors.request.use(
  (config) => {
    console.log('Request sent:', config);
    return config;
  },
  (error) => {
    console.error('Request error occurred:', error);
    return Promise.reject(error);
  },
);

apiaxios.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  (error) => {
    console.error('Response error occurred:', error);
    return Promise.reject(error);
  },
);

export default apiaxios;
