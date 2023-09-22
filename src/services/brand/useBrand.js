

import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useBrand = {
    getBrand: () => api.get("/common/brands"),
    getBrandItem: (id) => api.get(`/common/brands/${id}`),
    getBrandCount: () => api.get("/common/brands/count")
}

export default useBrand;