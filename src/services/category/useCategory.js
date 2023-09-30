



import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useSubCategory = {
    getSubCategory: () => api.get("/common/subcategories"),
    getSubCategoryItem: (id) => api.get(`/common/subcategories/${id}`),
    getSubCategoryCount: () => api.get("/common/subcategories/count")
}

export default useSubCategory;
