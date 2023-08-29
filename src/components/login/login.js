import React , { useState} from 'react';
import "./Login.css";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import Button from '@mui/material/Button';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import {   useNavigate } from "react-router-dom";




function Login(props) {

    const [email , setEmail ] = useState("")
    const [password , setPassword ] = useState("")
    const navigate = useNavigate();
    


    const data = {
        email:email,
        password :password
    }

    const HandelLoginData = (event) => { 
        axios
          .post(`${process.env.REACT_APP_API}/auth/login`, data)
          .then(function (res) {
            if(res.data.error){ 
              toast.warn("Invalid email or password ", {
                position: toast.POSITION.TOP_RIGHT,
              });
            }else{
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", res.data.user);
                toast.success("Login successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setTimeout(function () {
                    navigate(`/`);
                  }, 1000);
            }
          });
    };




    return (
        <div>
            <div className='form'>
                <div className='login_input' >
                    <EmailOutlinedIcon className='email_logo' />
                    <input 
                        type='email' 
                        placeholder='enter your email' 
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}  
                    />
                </div>
                <br></br>
                <div className='login_input' >
                    <PasswordOutlinedIcon className='email_logo' />
                    <input 
                        type='password' 
                        placeholder='enter your email' 
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} 
                    />
                </div>
                <br></br>
                <div className='forgotPass' >
                    <a>Forgot Passaword</a>
                </div>
                <br></br>
                <div>
                    <Button 
                        variant="contained" 
                        className='login_btn'
                        onClick={HandelLoginData}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
            <ToastContainer
                style={{
                    marginTop : "50px"
                }}
            />
        </div >
    )
}

export default Login;