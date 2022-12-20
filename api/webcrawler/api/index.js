/**import axios from "axios";

const server = `http://127.0.0.1:8000`
export const postfashion = id => axios.post(`${server}/shop/fashion/img`, id)  
export const getfashion = id => axios.get(`${server}/shop/fashion/img?id=${id}`)
**/

const server = `http://127.0.0.1:8000`
const webcrawler = {
    getNaverMovie
}
function handleResponse(response){ 
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
    }

async function getNaverMovie(){
    fetch(`${server}/webcrawler/navermovie`)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
} 

export default webcrawler