const server = `http://127.0.0.1:8000`
const imdbService = {classifypositive}

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
async function classifypositive(review){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(review)
    }
    const res = await fetch(`${server}/imdb/naverimdb`, requestOption) /** 경로는 장고admin의 urls/파일의 url **/
    .then(handleResponse)
    .then(data => (JSON.stringify(data))
    )
    .catch((error) => {
        alert('error :::: '+error);
    });
    return Promise.resolve(res);
}
export default imdbService