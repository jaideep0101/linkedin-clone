import React, { useState, useContext, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../context/context";
import hero from "../../assets/hero.jpg";

function Login() {
  const [isLoggedIn, setLoggedIn,user] = useContext(UserContext);
  const [error, setError] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  console.log(isLoggedIn)
console.log(user);

  // if(isLoggedIn===true) navigate("/")
  

console.log(auth.currentUser);
  function handleFormdata(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        setLoggedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError("Correct Email and Password required !");
      });
  }

  return (
    <div className="login">
      <div className="login_container">
        {error && <p className="error_message">{error}</p>}
        <div className="login_form_container">
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="linkedIn"
          />
          <form onSubmit={handleFormdata}>
            <input
              name="email"
              type="email"
              placeholder="email"
              autoComplete="off"
            ></input>
            <input
              name="password"
              type="password"
              placeholder="password"
              autoComplete="off"
            ></input>
            <button>Login</button>
          </form>
        </div>
        <p className="register_link">
          Create a new account
          <span>
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
      <div className="login_hero_container">
        <div className="login_hero_img">
          <img src={hero} alt="hero"></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
