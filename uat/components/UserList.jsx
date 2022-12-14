
import './LogIn.css'
const UserList =()=>{

    const onChange = e =>{
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const loginRequest = {username, password}
        alert(`사용자 이름 : ${JSON.stringify(loginRequest)}`)

    }
    return (<>
        USERNAME : <inputs type="text" name="username" onChange={onChange}/><br/>
        PASSWORD : <inputs type="text" name="password" onChange={onChange}/><br/>
        <button onClick={onClick}>로그인</button>
    </>)
}
export default UserList