import axios from "axios";

const server = `http://127.0.0.1:8000`
export const postfashion = id => axios.post(`${server}/shop/fashion/img`, id)  /**POST 방식 */
export const getfashion = id => axios.get(`${server}/shop/fashion/img?id=${id}`)/**GET 방식은 ', id'에서 '?id=${id}'로 변경됐다 **/
