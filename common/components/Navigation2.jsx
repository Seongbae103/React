import { Link } from "react-router-dom"

const Navigation2 = () =>{
    return (<>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><Link to ="/home">Navbar</Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to ="/counter">Counter</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/login">LogIn</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/signup">SignUp</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/schedule">Schedule</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/stroke">Stroke</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/iris">Iris</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/fashion">Fashion</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/number">Number</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/naver-movie">NaverMovie</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/fruits">Fruits</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/naverimdb">NaverImdb</Link></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><Link to ="/user-list">User-List</Link></a>
            </li>
        </ul>
        </div>
        </div>
        </nav>
    </>)}

export default Navigation2
