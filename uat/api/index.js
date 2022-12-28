import axios from "axios";
const server = `http://127.0.0.1:8000`
export const userLogin = req => axios.post(`${server}/blog/auth/login`, req)
export const userSignup = req => axios.post(`${server}/blog/auth/signup`, req)