import * as React from 'react';
import "./Login.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import Button from '@mui/material/Button';

function Login(props) {


    return (
        <div>
            <div className='form'>
                <div className='login_input' >
                    <EmailOutlinedIcon className='email_logo' />
                    <input type='email' placeholder='enter your email' />
                </div>
                <br></br>
                <div className='login_input' >
                    <PasswordOutlinedIcon className='email_logo' />
                    <input type='password' placeholder='enter your email' />
                </div>
                <br></br>
                <div className='forgotPass' >
                    <a>Forgot Passaword</a>
                </div>
                <br></br>
                <div>
                    <Button variant="contained" className='login_btn'>
                        Signin
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Login;