import { Route, Routes } from "react-router-dom"
import {Navigation, Counter, Footer, LogIn, SignUp} from "../components"
import {Schedule} from "../containers"
const Home = () => {
    return (<>
    <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
        <thead>
            <tr columns="3" >
                <td style={{ width: "100%", border: "1px solid black"}}>
                    <Navigation/>
                </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
            <td style={{ width: "100%", border: "1px solid black"}}>
            <Routes>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/todos" element={<Schedule/>}></Route>
                <Route path="/login" element={<LogIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
            </Routes>
            </td>
        </tr>
        <Footer/>
        </tbody>
    </table>
    </>)
}
export default Home