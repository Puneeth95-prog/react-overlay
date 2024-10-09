import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login'>
        <div className='login-form'>
            <span className='close-dialog'>x</span>
            <h2 className='login-title'>You want to Login? Enter the Details</h2>
            <form className='login-form'>
                <input type='email' placeholder='Enter Email' className='form-control' />
                <input type='password' placeholder='Enter Password' className='form-control' />
                <button className='btn btn-secondary login-btn'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
