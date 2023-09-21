import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useUser = {
    profile: () => api.get("/user/profile", {headers}),
    updateUser: (data) => api.put("/user/profile/userId", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }),
    updatePhoneNumber: (data) => api.put("/user/profile/phoneNumber", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
}

export default useUser;