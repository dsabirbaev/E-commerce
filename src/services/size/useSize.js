






import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useSize = {
    getSize: () => api.get("/common/product/detail/sizes"),
    getSizeItem: (id) => api.get(`/common/product/detail/sizes/${id}`),
    getSizeCount: () => api.get("/common/product/detail/sizes/count")
}

export default useSize;
