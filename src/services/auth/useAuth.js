import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useAuth = {
    register: (data) => api.post("/user/auth/register", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    }),
    registerSendCode: (data) => api.post(`/user/auth/register/send-code?phone=${encodeURIComponent(data)}`),
    registerVerify: (data) => api.post("/user/auth/register/verify", data),
    login: (data) => api.post("/user/auth/login", data),
    reset: (data) => api.post("/user/auth/reset/send-code", data),
    resetVerify: (data) => api.post("/user/auth/reset/verify", data),
    resetUpdataPassword: (data) => api.put("/user/auth/reset/update-password", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    })
    
}

export default useAuth;