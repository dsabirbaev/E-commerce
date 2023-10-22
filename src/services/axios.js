

import axios from "axios";


const api = axios.create({
    baseURL: "http://165.22.110.111:8080/api",
});


export default api;