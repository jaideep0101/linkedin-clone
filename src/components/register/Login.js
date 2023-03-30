import React,{useContext, useState} from 'react'
import  "./register.css";
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import {getAuth,signInWithEmailAndPassword } from "firebase/auth";
import authContext from '../../authContext';

function Login() {
  const [authState,setAuth] = useContext(authContext);
    const navigate = useNavigate();
const [error,setError] = useState("");
const auth = getAuth();

async function handleFormdata(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password= data.get("password");
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem("isLoggedIn",JSON.stringify(auth));
    navigate("/home");
    setAuth(auth);
    console.log(user)
    console.log(authState)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
    console.log(errorCode);
    
  });
}

  return (
    <div className="register">
     <Header/>
     <div className='register_container'>
     <p className='error_message'>{error}</p>
    <div className='register_form_container'>
     <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="linkedIn"/>
     <form  onSubmit={handleFormdata}>
     <input name="email" type="email" placeholder="email" autoComplete='off'></input>
     <input name="password"  type="password" placeholder='password' autoComplete='off'></input>
     <button>Submit</button>
     </form>
     <p>Create a new account <span><a href='/register'>Register</a></span></p>
     </div>
     </div>
     </div>

  )
}

export default Login