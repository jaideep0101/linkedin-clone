import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/feed";
import Widgets from "../widgets/widgets";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function Main() {
  const [isLoggedIn, setLoggedIn, user] = useContext(UserContext);
  const { displayName, email, photoURL, uid } = user;

  const navigate = useNavigate();

  useEffect(() => {
      if (displayName !== "") {
       
         console.log("welcome");
         setLoggedIn(true);
      } else {
        navigate("/login");
      }
    },[],[user]);

  return (
    <div className="App">
      <Header photo={photoURL} />
      <div className="App_body">
        <Sidebar userName={displayName} email={email} photo={photoURL} />
        <Feed userName={displayName} email={email} photo={photoURL} uid={uid} />
        <Widgets />
      </div>
    </div>
  );
}

export default Main;
