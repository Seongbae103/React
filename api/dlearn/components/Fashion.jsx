import {getfashion, postfashion} from "api/dlearn/api"
import { useState } from "react"

const Fashion = ()=> {
    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const onGetClick = e =>{
        e.preventDefault()
        getfashion(id)
        .then((res)=>{
            alert(`카테고리 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('다시해')
        })
    }
    const onPostClick = e =>{
        e.preventDefault()
        const request = {id}
        postfashion(request)
        .then((res)=>{
            alert(`카테고리 : ${JSON.stringify(res.data.result)}`)
        })
        .catch((err)=>{
            console.log(err)
            alert('안돼 안바꿔줄거야 돌아가')
        })
    }

    return (
    <>
    <form method="get">
    의류 번호(get) : <input type="text" name="id" onChange={onChange} />
    <button onClick={onGetClick}> 실행 </button>
    </form>
    <form method="post">
    의류 번호(post) : <input type="text" name="id" onChange={onChange} />
    <button onClick={onPostClick}> 실행 </button>
    </form>
    </>
    
    )
}
export default Fashion

