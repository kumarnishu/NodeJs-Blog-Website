import axios from "axios";

export const CreatePost = async (body: FormData) => {
    return await axios.post("/signup", body)
}
export const UpdatePostSection = async (body: FormData) => {
    return await axios.post("/login", body)
}
export const DelelePostSection = async (body: FormData) => {
    return await axios.post("/login", body)
}
export const Logout = async () => {
    return await axios.post("/logout")
}
export const GetUserProfile = async () => {
    return await axios.get("/profile")
}