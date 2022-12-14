import { Link } from "react-router-dom"

const Navigation = () => 
    <nav>
        <ul>
            <li><Link to ="/common">Home</Link></li>
            <li><Link to ="/counter">Counter</Link></li>
            <li><Link to ="/schedule">To-Do</Link></li>
            <li><Link to ="/login">LogIn</Link></li>
            <li><Link to ="/signup">SignUp</Link></li>
            <li><Link to ="/stroke">Stroke</Link></li>
        </ul>
    </nav>
export default Navigation