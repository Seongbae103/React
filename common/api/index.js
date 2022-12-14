import axios from "axios";
const server = `http://lacalhost:3000`
export const FakeFaces = req => axios.get(`${server}/blog/stroke.py`, req)