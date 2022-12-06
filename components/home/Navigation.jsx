import { Link } from "react-router-dom"

const Navigation = () => 
    <nav>
        <ul>
            <li><Link to ="/home">Home</Link></li>
            <li><Link to ="/counter">Counter</Link></li>
            <li><Link to ="/todos">To-Do</Link></li>
            <li><Link to ="/login">LogIn</Link></li>
            <li><Link to ="/signup">SignUp</Link></li>
        </ul>
    </nav>
export default Navigation