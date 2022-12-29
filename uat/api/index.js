import axios from "axios";
const server = `http://127.0.0.1:8000`
export const uatLogin = req => axios.get(`${server}/blog/auth/login`, req)
