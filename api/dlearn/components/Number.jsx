import dlearnService from "../api"
import { useState } from "react"

const Number = ()=> {
    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const onGetClick = e =>{
        e.preventDefault()
        dlearnService.getNumber(id)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    const onPostClick = e =>{
        e.preventDefault()
        const request = {id}
        dlearnService.postNumber(request)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (
    <>
    <form method="get">
    인식할 인덱스 번호(get) : <input type="int" name="id" onChange={onChange} />
    <button onClick={onGetClick}> 실행 </button>
    </form>
    <form method="post">
    인식할 인덱스 번호(post) : <input type="int" name="id" onChange={onChange} />
    <button onClick={onPostClick}> 실행 </button>
    </form>
    </>
    
    )
}
export default Number

