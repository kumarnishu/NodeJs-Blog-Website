import axios from "axios";

export const SignUp = async (body: FormData) => {
    return await axios.post("/signup", body)
}
export const Login = async (body: { email: string, password: string }) => {
    return await axios.post("/login", body)
}
export const Logout = async () => {
    return await axios.post("/logout")
}
export const GetUserProfile = async () => {
    return await axios.get("/profile")
}