
import { Link } from 'react-router-dom';
import './App.css';
import './Login.css';
import { useState } from 'react';
import Login from './Login';


function App() {
    const [loginPageActive, isLoginPageActive] = useState(false);

    const handleLogin = () => {
        isLoginPageActive(true);
    }

    const closeDialog = () => {
        isLoginPageActive(false);
    }


    return (
        
        <div className='App'>
            <div className={loginPageActive ? 'login' : 'login-notActive'}>
                <div className='login-form'>
                    <span className='close-dialog' onClick={closeDialog}>x</span>
                    <h2 className='login-title'>You want to Login? Please Enter the Details</h2>
                    <form className='login-form'>
                        <input type='email' placeholder='Enter Email' className='form-control' />
                        <input type='password' placeholder='Enter Password' className='form-control' />
                        <button className='btn btn-secondary login-btn'>Login</button>
                    </form>
                </div>
            </div>
            <div className={loginPageActive ? 'hide-login-active': 'register-form'}>
                <h1 className='register-form-title'>Registration Form</h1>
                <form>
                    <div className='row'>
                        <div className='col-md-6 input-fields'>
                            <input type="text" placeholder="First Name" className="form-control" />
                        </div>
                        <div className='col-md-6 input-fields'>
                            <input type="text" placeholder="First Name" className="form-control" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 input-fields'>
                            <input type='text' placeholder='Contact Number' className="form-control" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 input-fields'>
                            <input type='email' placeholder='Email ID' className="form-control" />
                        </div>
                    </div>
                    <div className='row'> 
                        <div className='col-md-12 input-fields'>
                            <input type='password' placeholder='Password' className="form-control" />
                        </div>
                    </div>
                    <button className='btn btn-primary' type='button'>Submit</button>
                    <div className='login-link'>
                        <button className='login-link-text' onClick={handleLogin} type='button'>Already registered? Click here to login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default App;
