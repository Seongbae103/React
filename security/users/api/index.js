import axios from 'axios'
const server = `http://localhost:8000`

export const userlist = req => axios.get(`${server}/security/user-list`, req)
export const userlogin = req => axios.post(`${server}/security/user-login`, req)