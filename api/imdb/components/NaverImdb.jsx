import imdbService from "../api"
import { useState } from "react"

const NaverImdb = ()=> {
    const [id, setId] = useState()

    const onClick = e =>{
        e.preventDefault()
        imdbService.imdb().then(res => {
            const json = JSON.parse(res)
            setId(json["result"])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (<>
    <h5>네이버 Imdb</h5>
    확인할 리뷰 : <input type="text" name="id" />
    <button onClick={onClick}>리뷰 긍정도 확인</button>
    <table>
        <thead>
            <tr>
                <th>리뷰</th><th>긍정도</th>
            </tr>
        </thead>
        <tbody>
        {id && id.map(({sentence, score})=>(
            <tr key={sentence}><td>{sentence}</td><td>{score}</td></tr>
        ))}    
        </tbody>
    </table>     
    </>)
}
export default NaverImdb

