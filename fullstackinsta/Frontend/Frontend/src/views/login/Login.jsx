import React from 'react'
import './loginstyle.css'

const Login = () => {
  return (
    <div className='login-container'>
        <form>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" placeholder='Enter your email'/>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" placeholder='Enter your password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login