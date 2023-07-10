import * as React from 'react';
import "./Login.css"
import TextField from '@mui/material/TextField';
import Buttons from '@mui/material/Button';
import Validation from './LoginValidation'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login(props) {

    const [values, setValues] = React.useState({
        email:'',
        password:''
    });

    console.log("login", values)

    const navigate = useNavigate();
     const [errors, setErrors] = React.useState({});
     const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
     }
     const handleSubmit = (event) => {
        setErrors(Validation(values))
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "success") {
                    navigate('/');
                }else{
                    alert("No record existed")
                }
            })
            .catch(err => console.log(err))
        }
     };

    return(
        <div className="login">
            <form action="" className="login_card" >
                <div className="header" >
                    Login to Dashboard
                </div>
                <div className="login_txt" >
                    <strong>
                        Email
                    </strong>
                      <TextField type='email' onChange={handleInput} className="login_input" name='email' color="warning" placeholder='Enter the Username'  />
                      <div>
                        {errors.email && <span className='red'>{errors.email}</span>}
                      </div>
                </div>
                <div className="login_txt" >
                    <strong>
                        Password
                    </strong>
                      <TextField type='password' onChange={handleInput} className="login_input" name='password' color="warning" placeholder='Enter the Password'  />
                      <div>
                        {errors.password && <span className='red'>{errors.password}</span>}
                      </div>
                </div>
                <div className="forgot" >
                    <div className="create" >
                        Forgot Password ?
                    </div>
                    <Link to='/signup' className="create" >
                        create account now
                    </Link>
                </div>
                    <Buttons onClick={handleSubmit} type='button' variant="contained" color="warning">Login</Buttons>
            </form>
            {/* <div className="login_img" >
                <img src="https://cdn.fightforsmall.com/gmichaelsalon.com/2016/07/best-hair-salon-near-dl-lowry-west-86th-street-and-deweese-hair-design-in-indianapolis-g-michael-salon.jpg" />
            </div> */}
        </div>
    )
}

export default Login;