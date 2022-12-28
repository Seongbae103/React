import imdbService from "../api"
import { useState } from "react"

const NaverImdb = ()=> {
    const [inputs, setInputs] = useState({})
    const [positive, setPositive] = useState('')

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }
    const onClick = e =>{
        e.preventDefault()
        imdbService.classifypositive(inputs).then(res => {
            const json = JSON.parse(res)
            setPositive(json["result"])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (<>
    <form method="post">
    <h5>네이버 Imdb</h5>
    <input type="text" className="box" placeholder="리뷰" name="inputs" onChange={onChange}/>
    <button type="submit" onClick={onClick}> 실행 </button>
    </form>   
    <table>
        <thead>
            <tr>
                <th>긍정도</th>
            </tr>
        </thead>
        <tbody>
        {positive && 
            <tr ><td>{Math.floor(positive*100, 3)} %</td></tr>
        }    
        </tbody>
    </table>     

    </>)
}
export default NaverImdb

