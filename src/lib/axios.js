import axios from 'axios';
const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Any status codes outside the range of 2xx cause this function to trigger
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      console.error('Unauthorized, logging out...');
    }
    if (status === 500) {
      console.error('Server error, please try again later.');
    }
    return Promise.reject(error);
  }
);

export default api;