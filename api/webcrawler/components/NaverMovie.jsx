import webcrawler from "../api"
import {useState} from 'react'
const NaverMovie = ()=> {
    const [movie, setMovie] = useState()
    const onClick = e =>{
        e.preventDefault()
        webcrawler.getNaverMovie().then(res => {
            const json = JSON.parse(res)
            setMovie(json['result'])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (<>
    <h5>네이버 크롤러</h5>
    <button onClick={onClick}>크롤링 시작</button>
    <p>버튼을 클릭하면 네이버 영화 목록이 출력</p>
    <table>
        <thead>
            <tr>
                <th>순위</th><th>영화 목록</th>
            </tr>
        </thead>
        <tbody>
        {movie && movie.map(({rank, title})=>(
            <tr key={rank}><td>{rank}</td><td>{title}</td></tr>
        ))}    
        </tbody>
    </table>     
    </>)
}
export default NaverMovie