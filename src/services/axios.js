

import axios from "axios";


const api = axios.create({
    baseURL: "http://68.183.181.125:89/api",
});


export default api;