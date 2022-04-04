import React, {useState} from 'react'
import "./register.css"
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {


  const history = useHistory();

    const [user, setUser]= useState({
      name: "",
      email: "",
      password: "",
      re_password: ""
    })

    const handleChange = e =>{
      const {name, value} = e.target
      setUser({
        ...user,
        [name]:value
      })
    }

    const register= ()=>{
      const {name, email, password, re_password} = user
      if(name && email && password && (password === re_password)){
          axios.post("https://api-auth.ahadalichowdhury.com/register", user)
          .then(res=>{
            alert(res.data.message)
          })
      }
      else{
        alert("Please fill the all details")
      }
    }

  return (
    
       <div className='register'>
         {console.log("user", user)}
          <h1>Register</h1>
          <input type="text" name='name' value={user.name} onChange= {handleChange} placeholder='enter your name' />
          <input type="text" name='email' value={user.email} onChange={handleChange } placeholder="enter the email" />
          <input type="password" name='password' value={user.password} onChange= {handleChange} placeholder='enter your password' />
          <input type="password" name='re_password' value={user.re_password} onChange= {handleChange} placeholder='re enter password' />
          <div className="button" onClick={register}>register</div>
          <div>or</div>
          <div className="button" onClick={()=>{history.push("/login")}}>login</div>
    </div>
    
  )
}

export default Register
