import axios from 'axios';

axios.defaults.timeout = 20000;
const api = axios.create({
  baseURL: 'http://192.168.0.100:5000/'
});

export default api;