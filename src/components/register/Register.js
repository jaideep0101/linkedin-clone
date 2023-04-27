import React, { useState, useContext } from "react";
import "./register.css";
import {
  updateProfile,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/context";

function Register() {
  const [isLoggedIn, setLoggedIn] = useContext(UserContext);
  // console.log(isLoggedIn);
  const [error, setError] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

//   console.log(isLoggedIn);
// console.log(auth.currentUser);

  async function handleFormdata(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const userName = data.get("username");
    const photoURL = data.get("photoUrl");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
       
        updateCurrentUser(userName, photoURL);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // console.log(errorCode)
        // console.log(errorMessage);
      });
  }

  async function updateCurrentUser(username, photoUrl) {
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoUrl,
    })
      .then(() => {
        // console.log("successfullly updatad userProfile");
       
        setLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        setError(error);
        // console.log(`Error in updating user profile ${error}`);
      });
  }

  return (
    <div className="register">
      {error && <p className="error_message">{error}</p>}
      <div className="register_container">
        <div className="register_form_container">
          <img
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            alt="linkedIn"
          />
          <form onSubmit={handleFormdata}>
            <input
              name="username"
              type="text"
              placeholder="username"
              autoComplete="off"
              required
            ></input>
            <input
              name="photoUrl"
              type="text"
              placeholder="photoUrl (optional)"
              autoComplete="off"
            ></input>
            <input
              name="email"
              type="email"
              placeholder="email"
              autoComplete="off"
              required
            ></input>
            <input
              name="password"
              type="password"
              placeholder="password"
              required
              autoComplete="off"
            ></input>
            <button>Sign in</button>
          </form>
          <p>
            Already have an account{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
