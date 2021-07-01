import React,{useState} from 'react'
import './Form.css'



function Signup() {
    const[values,setValues]=useState({
        username:"",
        password:"",
        confirmpassword:"",
        nickname:"",
        email:"",
        gender:"",
        Select:""

    });
    const handleUsernameInputChange =(e)=>{
        setValues({...values,username:e.target.value})
    }


       
    const handlePasswordInputChange =(e)=>{
        setValues({...values,password:e.target.value})

}
const handleconfirmPasswordInputChange =(e)=>{
    setValues({...values,password:e.target.value})

}
const handlenickNameInputChange =(e)=>{
    setValues({...values,nickname:e.target.value})
}
const handleemailInputChange =(e)=>{
    setValues({...values,email:e.target.value})
}
const handleonChange =(e)=>{
    setValues({...values,gender:e.target.value})
}







    const[submitted,setSubmitted]=useState(false);



const handleSubmit=(e) => {
    e.preventDefault();
    setSubmitted(true);
}


    return (
       <div className="form-container">
           <form className="register-form" onSubmit={handleSubmit}>
        <div class="text">Account Information</div>
        <input
        onChange={handleUsernameInputChange}
        value={values.username}
        className="form-field"
        placeholder="Username"
        name="username"
        type="text"/>
        {submitted && !values.username ? alert("Enter  Username"):null}
        
        
         <input
         onChange={handlePasswordInputChange}
         values={values.password}
        className="form-field"
        placeholder="Password"
        name="Password"
        type="password" />
         {submitted && !values.password ? alert("Enter  Password"):null}

         <input
         onChange={handleconfirmPasswordInputChange}
         values={values.confirmpassword}
        className="form-field"
        placeholder="Confirm Password"
        name="confirm Password"
        type="password" />
         {submitted && !values.confrimpassword ? alert("Enter Confirm  Password"):null}
         <div className="text">Personal Information</div>
         <input
        onChange={handlenickNameInputChange}
        value={values.nickname}
        className="form-field"
        placeholder="Nick Name"
        name="nickname"
        type="text"/>
        {submitted && !values.nickname ? alert("Enter  Nick Name"):null}


         <input
        onChange={handleemailInputChange}
        value={values.email}
        className="form-field"
        placeholder="Email Address"
        name="email"
        type="email"/>
        {submitted && !values.email ? alert("Enter  Email"):null}


        <div className="text">Gender</div>
        <div className="form-field">
        <div className="gnd">
        <input type="radio" name="gender"value="name"onChange={handleonChange}/>
        <lable>Male</lable>
        <input type="radio"name="gender"value="name"onChange={handleonChange}/>
        <lable>Female</lable>
        <input type="radio"name="gender"value="name"onChange={handleonChange}/>
        <lable>Others</lable>
        </div>
        </div>

        <div className="text">Country</div>
        <div className="form-field">
        <select>
        <option selected value="Nepal">Nepal</option>
        <option value="India">India</option>
        <option  value="Pakistan">Pakistan</option>
        <option value="United States">United States</option>
        </select>
        </div>


        

       
        

        
        

         <button className="btn" type="submit">NEXT</button>
         <button className="btn1" type="button">Already have an account?</button>

        </form>

        </div>

       
       



    )
}


export default Signup
