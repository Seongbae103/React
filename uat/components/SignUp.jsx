import './SignUp.css'
import { useState } from "react"

const SignUp = ()=> {
    const [inputs, setInputs] = useState({})
    const {user_name, email, nickname, password} = inputs;
    const onClick = e =>{
        e.preventDefault()
        const request = {user_name, email, nickname, password}
        setInputs(request)
        .then((res)=>{
            console.log(`Response is ${res}`)
            localStorage.setItem('token',JSON.stringify(res.config.data))
        })
        /**실패시 */
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시 입력해주세요')
        })
    }
    return (<>
        <h5>회원가입</h5>
        <button onClick={onClick}>등록</button>
        <p>더미 사용자 100명 등록</p>
        </>)
}
export default SignUp