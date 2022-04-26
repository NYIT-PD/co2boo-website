import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import logo from './logo.png';
import {auth} from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e =>
    {
        e.preventDefault()

        // firebase login
    }

    const register = e =>
    {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }



  return (
    <div className='login'>

        <div className = "login__logo">
             <img src = {logo}/>
        </div>
       
        <div className='login__container'>
            <h1>Sign-in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input type = 'text' value = {email} onChange =
                {e => setEmail(e.target.value)}/>
                
                <h5>Password</h5>
                <input type = 'password' value = {password} onChange =
                {e => setPassword(e.target.value)}/>
                
                <button type = 'submit' onClick = {signIn}
                className='login__signInButton'>Sign In
                </button>

            </form>

            <p>
                By siging-in you agree to the conditions of Use. Please see our Privacy Notice, our Cookies Notice and our Interest based Ads Notice.
            </p>
            <button onClick = {register}
            className='login__registerButton'>Create your co2boo account</button>
        </div>
    </div>
    
  )
}

export default Login