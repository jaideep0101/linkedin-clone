import React, { useState, useContext } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../context/context";

function Login() {
  const [isLoggedIn, setLoggedIn] = useContext(UserContext);
  const [error, setError] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  function handleFormdata(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setLoggedIn(true);
        console.log(isLoggedIn);
        navigate("/");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError("Correct Email and Password required !");
      });
  }

  return (
    <div className="register">
      <p className="error_message">{error}</p>
      <div className="register_container">
        <div className="register_form_container">
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
            <button>Submit</button>
          </form>
          <p>
            Create a new account{" "}
            <span>
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
