import axios from 'axios';


const api = axios.create({
    baseURL: 'https://lockheed-backend.herokuapp.com/'
})

export default api;
