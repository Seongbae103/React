import './SignUp.css'
const SignUp = ()=> {
    return(<>
    <div id="id01" className="modal"/>
    <span onClick="" className="close" title="Close Modal">times;</span>
    <form className="modal-content" action="/action_page.php"/>
    <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required/>

        <label htmlFor="nickname"><b>Nickname</b></label>
        <input type="text" placeholder="Enter Nickname" name="nickname" required/>

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

        <label>
            <input type="checkbox" checked="checked" name="remember" style={{marginbottom:"15px"}}/> Remember me
        </label>

        <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
        <button type="submit" className="signup">Sign Up</button>
        <button type="button" onClick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
        
    </div>
    </div>
    </>)
}
export default SignUp