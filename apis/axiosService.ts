import axios from 'axios';

const axiosService = axios.create({
    baseURL: 'https://api.example.com',
});
axiosService.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosService.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);
export default axiosService;