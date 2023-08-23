import React from 'react';
import "./Login.css";
import Login from './login'
import Register from './Register'

function LoginTab(props) {

    const [state, setState] = React.useState(false);


    return (
        <div class="login">
            <div className='welcome' >
                <h1 className='title' >
                    Welcome To salon
                </h1>
                <img src="https://cdn1.iconfinder.com/data/icons/hair-salon-5/66/46-512.png" />
            </div>
            <div class="modal_box">
                <div className='modal'>
                    <div class="modal_img">
                        <a onClick={() => setState(true)} class={state ? "signin" : "signup"}>
                            Signin
                        </a>
                        <a onClick={() => setState(false)} class={state ? "signup" : "signin"}>
                            Signup
                        </a>
                    </div>
                    {state ? <Login /> : <Register />}
                </div>
            </div>
        </div >
    )
}

export default LoginTab;