import dlearnService from "../api"
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
        dlearnService.getFashion(id)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    const onPostClick = e =>{
        e.preventDefault()
        const request = {id}
        dlearnService.postFashion(request)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
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

