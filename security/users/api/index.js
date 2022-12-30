import axios from 'axios'
const server = `http://localhost:8000`

export const userlist = req => axios.get(`${server}/security/list`, req)
export const userlogin = req => axios.post(`${server}/security/login`, req)
export const username = req => axios.get(`${server}/security/user-list/name`, req)