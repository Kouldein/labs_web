import axios from "axios";

const baseURL = "http://localhost:8778/api/v1"

const loginRoute = `${baseURL}/login`;
const userRoute = `${baseURL}/user`;

const userAPI = {
    
    login: (loginData) =>
        axios.post(loginRoute, loginData),

    register: (registerData) => 
        axios.post(userRoute, registerData),
}

export default userAPI