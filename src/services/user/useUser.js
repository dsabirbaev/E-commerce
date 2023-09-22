import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useUser = {
    profile: () => api.get("/user/profile", {headers}),
    profileUpdate: (data) => api.put("/user/profile/userId", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }),
    profileUpdatePhoneNumber: (data) => api.put("/user/profile/phoneNumber", data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    })
}

export default useUser;