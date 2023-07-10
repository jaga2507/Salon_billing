import * as React from 'react';
import "./Login.css"
import TextField from '@mui/material/TextField';
import Buttons from '@mui/material/Button';
import Validation from './LoginValidation'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register(props) {

    const [values, setValues] = React.useState({
        name:'',
        email:'',
        password:''
    });

    console.log("login", values)

    const [errors, setErrors] = React.useState({});
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }
    const navigate = useNavigate();
     const handleSubmit = (event) => {
        event.preventDefualt();
        setErrors(Validation(values))
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err))
        }
     };

    return( 
        <div className="login">
            <form action="" onSubmit={handleSubmit} className="login_card" >
                <div className="header" >
                Register as a new vendor 
                </div>
                <div className="login_txt" >
                    <div>
                        User Name
                    </div>
                      <TextField type='text' onChange={handleInput} className="login_input" name='name' color="warning" placeholder='Enter the Username'  />
                      <div>
                        {errors.name && <span className='red'>{errors.name}</span>}
                      </div>
                </div>
                <div className="login_txt" >
                    <div>
                        Email ID
                    </div>
                      <TextField type='email' onChange={handleInput} className="login_input" name='email' color="warning" placeholder='Enter the Username'  />
                      <div>
                        {errors.email && <span className='red'>{errors.email}</span>}
                      </div>
                </div>
                <div className="login_txt" >
                    <div>
                        Password
                    </div>
                      <TextField type='password' onChange={handleInput} className="login_input" name='password' color="warning" placeholder='Enter the Password'  />
                      <div>
                        {errors.password && <span className='red' >{errors.password}</span>}
                      </div>
                </div>
                <div className="forgot" >
                    <div className="create" >
                        Forgot Password ?
                    </div>
                    <Link to="/login" className="create" >
                        Go to login
                    </Link>
                </div>
                    <Buttons type='submit' variant="contained" color="warning">Login</Buttons>
            </form>
        </div>
    )
}

export default Register;