import React from 'react'


const LoginPage=()=> {

    return (
       <div className="wrapper">
       <form action = "">
       <h1>Login</h1>
       <div className ="input-box">
        <input type="text" placeholder='Username' required/>
       </div>
       <div className ="input-box">
       <input type="password" placeholder='Password' required/>
      </div>

      <div className="remember-forgot">
      <label><input type="checkbox"/>Remember me</label>
      <a href="#">Forgot Password?</a>
      </div>

      <button type="submit">Login</button>
       </form>
       </div>
    )
}

export default LoginPage