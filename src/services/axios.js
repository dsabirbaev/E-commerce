

import axios from "axios";


const api = axios.create({
    baseURL: "http://165.22.242.204:89/api",
});


export default api;