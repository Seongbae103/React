import webcrawler from "../api"

const NaverMovie = ()=> {

    const onClick = e =>{
        e.preventDefault()
        webcrawler.getNaverMovie()
    }

    return (<>
    <h5>네이버 크롤러</h5>
    <button onClick={onClick}>크롤링 시작</button>
    <p>버튼을 클릭하면 네이버 영화 목록이 출력</p>
    </>)
}
export default NaverMovie