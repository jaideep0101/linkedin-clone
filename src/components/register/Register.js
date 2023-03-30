import React,{useContext, useEffect, useState} from 'react'
import  "./register.css";
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from "../../firebase";
import authContext from '../../authContext';

function Register() {
  const [authState,setAuth] = useContext(authContext);
  const navigate = useNavigate();
  const [error,setError] = useState("")
 
  useEffect(()=>{
    if(authState)
    {
      navigate("/home");
    }
  },[authState,navigate]);
  function handleFormdata(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const photoUrl = data.get("photoUrl");
    const email = data.get("email");
    const password = data.get("password");

    
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => { 
        const user = userCredential.user;
       updateProfile(user,{
          displayName:username,
          photoURL:photoUrl
        }).then(()=>{
          setAuth(auth);
        })
      
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
     <input name="username" type="text" placeholder='username' required></input>
     <input name='photoUrl' type="text" placeholder='photoUrl (optional)'></input>
     <input name="email" type="email" placeholder="email" required></input>
     <input name="password"  type="password" placeholder='password' required></input>
     <button>Submit</button>
     </form>
     <p>Already have an account <span><a href='/'>Login</a></span></p>
     </div>
     </div>
     </div>

  )
}

export default Register