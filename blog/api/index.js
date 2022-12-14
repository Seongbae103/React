import axios from "axios";
const server = `http://127.0.0.1:8000`
export const strokeapi = req => axios.get(`${server}/blog/stroke/stroke`, req)
export const irisapi = req => axios.post(`${server}/shop/iris/iris`, req)