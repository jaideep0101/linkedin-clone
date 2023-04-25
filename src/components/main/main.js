import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/feed";
import Widgets from "../widgets/widgets";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";

function Main() {
  const [isLoggedIn, setLoggedIn, user] = useContext(UserContext);
  const { displayName, email, photoURL, uid } = user;
  const [photo,setPhoto] = useState("");
  const navigate = useNavigate();
  console.log(isLoggedIn);
console.log(user);
  useEffect(
    () => {
      if (displayName !== "") {
        setLoggedIn(true);
        setPhoto(photoURL);
        console.log(photoURL);
        console.log(displayName);
      } else {
        navigate("/login");
      }
    },
    [],
    [user]
  );
console.log(photo);
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Loader />
      ) : (
        <>
          <Header photo={photoURL} />
          <div className="App_body">
            <Sidebar userName={displayName} email={email} photo={photoURL} />
            <Feed
              userName={displayName}
              email={email}
              photo={photoURL}
              uid={uid}
            />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
