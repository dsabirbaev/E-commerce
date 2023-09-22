


import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useProduct = {
    getProduct: () => api.get("/common/products"),
    getProductItem: (id) => api.get(`/common/products/${id}`),
    getProductCount: () => api.get("/common/products/count"),
    getProductSearch: (data) => api.get("/common/products/search", data, {headers}),
}

export default useProduct;