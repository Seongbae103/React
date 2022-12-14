import { Route, Routes } from "react-router-dom"
import {Navigation2, Counter, Footer} from "common"
import {Schedule} from "cop"
import { SignUp} from "uat"
import image from 'images/fashion.png'
import {Stroke} from "blog"
import {Iris} from "iris"
import { Fashion, Number, NaverMovie, NaverImdb } from "api"
import {UserList, UserLogIn } from "security"


const Home = () => {
    const imgSize = {Width:100, Height:100}
    return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}>
                    <Navigation2/>
                </td>
            </tr>
        </thead>
        <tbody>
        
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
            <Routes>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/schedule" element={<Schedule/>}></Route>
                <Route path="/login" element={<UserLogIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/stroke" element={<Stroke/>}></Route>
                <Route path="/iris" element={<Iris/>}></Route>
                <Route path="/fashion" element={<Fashion/>}></Route>
                <Route path="/number" element={<Number/>}></Route>
                <Route path="/naver-movie" element={<NaverMovie/>}></Route>
                <Route path="/naverimdb" element={<NaverImdb/>}></Route>
                <Route path="/naverimdb" element={<NaverImdb/>}></Route>
                <Route path="/user-list" element={<UserList/>}></Route>
            </Routes>
            </td>
        </tr> 
        <tr>
            <td>
                <img src={image} style={imgSize}/>
            </td>
        </tr>          
            <Footer/>
        </tbody>
        
    </table>
    
    </>)
}
export default Home