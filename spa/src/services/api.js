import axios from 'axios';

axios.defaults.timeout = 20000;
const api = axios.create({
  baseURL: 'http://localhost:5000/'
});

export default api;