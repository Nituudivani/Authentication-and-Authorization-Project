import React, { useState } from 'react'
import '../Signup/Signup.css';
import Signin from '../Signin/Signin';


export default function Signup() {

    const [username , setUsername] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [confirmpassword , setConfirmPassword] = useState();
    const [signup , setSignup] = useState(false);

    const validation =() => {
        if(username && email && password && confirmpassword){
            localStorage.setItem('username',username)
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
            localStorage.setItem('confirmpassword',confirmpassword)
            localStorage.setItem('signup',email)

            alert('signup successfully')
            setSignup('signup')
        }
    }

     

 
  return (
    <>
    
      {/* <!-- SignUp Modal --> */}
      {signup?<Signin/>:
    //   automatic signup karya pacchi automatic signin page open karva mate
    <div className='main1'>
  
<div class="container main-div">
        <div class="signup-form">
            <h2>Sign Up</h2>
            <form class="/submit_signup">
                <div class="form-group">
                    <input type="text" id="username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>
                    <label for="username">Username</label>
                </div>
                <div class="form-group">
                    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label for="email">Email</label>
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
                    <label for="password">Password</label>
                </div>
                <div class="form-group">
                    <input type="password" id="confirm_password" name="confirm_password" onChange={(e)=>setConfirmPassword(e.target.value)} required/>
                    <label for="confirm_password">Confirm Password</label>
                </div>
                <button type="submit" class="but-1" onClick={()=>validation()}>Sign Up</button>
            </form>
        </div>
    </div>

    </div>
}

    </>
    
  )
}
