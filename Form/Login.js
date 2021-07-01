import React,{useState} from 'react'
import './Form.css'

function Login() {
    const[values,setValues]=useState({
        username:"",
        password:""

    });
    const handleUsernameInputChange =(e)=>{
        setValues({...values,username:e.target.value})
    }


       
    const handlePasswordInputChange =(e)=>{
        setValues({...values,password:e.target.value})

}
const[submitted,setSubmitted]=useState(false);
const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
}



    return (
       <div className="form-container">
           <form className="register-form"onSubmit={handleSubmit}>
        <input
        onChange={handleUsernameInputChange}
        value={values.username}
        className="form-field"
        placeholder="Username"
        name="username"
        type="text"
        />
         {submitted && !values.username ? alert("Enter  Username"):null}
        
         <input
         onChange={handlePasswordInputChange}
         values={values.password}
        className="form-field"
        placeholder="Password"
        name="Password"
        type="password" />
         {submitted && !values.password ? alert("Enter  Password"):null}
         
        <div class="chk">
        <input type="checkbox" id="autoSizingCheck" name="remember me" value="rememberme"/>Remember Me
         <input type="checkbox" id="autoSizingCheck" name="auto login" value="auto login"/>Auto Login
         </div>
          
         
         


         <button className="btn" type="submit">LOG IN</button>
         <button  className="btn1" type="button">SIGN UP</button>


        </form>
        </div>
    )
}
export default Login
