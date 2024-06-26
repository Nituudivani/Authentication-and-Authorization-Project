import React, { useState } from 'react'
import '../Signin/Signin.css';


export default function Signin() {
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const [Signin , setSignin] = useState(false)

  const form = () => {
    if (email && password){
      const first = localStorage.getItem('email')
      const second= localStorage.getItem('password')

      if(first == email && second == password)
      alert('Signin Successfully')
    
      else{
      alert('Please Enter Your Valid Password')
    }
    }
  }


  return (
    <>

    <div className='main'>
      {/* <!-- Signin Modal --> */}
      <div class="container main-div2">
        <div class="signup-form">
            <h2>Sign In</h2>
            <form class="/submit_signup">
                <div class="form-group">
                    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
                    <label for="email">Email</label>
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
                    <label for="password">Password</label>
                </div>
                <button type="submit" class="but-1" onClick={()=>form()}>Sign Up</button>
            </form>
        </div>
    </div>

    </div>
    </>
  )
}
