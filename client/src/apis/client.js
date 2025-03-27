// apis/client.js
import axios from 'axios';

// Create an Axios instance with default settings
const API = axios.create({
  baseURL: 'http://localhost:4000/', // The base URL of your backend API
  timeout: 10000, // 10 seconds timeout for requests
});

// You can add interceptors here for adding headers, handling errors, etc.

export default API;
