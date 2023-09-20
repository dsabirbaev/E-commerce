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
    sendCode: (data) => api.post(`/user/auth/register/send-code?phone=${encodeURIComponent(data)}`),
    verify: (data) => api.post("/user/auth/register/verify", data),
    login: (data) => api.post("/user/auth/login", data)
}

export default useAuth;