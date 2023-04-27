import React, { useState, useContext, useEffect } from "react";
import "./header.css";
import HeaderOptions from "../headeroptions/HeaderOptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";

function Header({ photo }) {
  const [isLoggedIn, setLoggedIn] = useContext(UserContext);

  const [toggle, setToggle] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

//  useEffect(()=>{
//   setLoggedIn(false);
//  },[handleClick])

  function handleClick() {
    signOut(auth).then(() => {
      console.log(auth);

      setLoggedIn(false);
      navigate("/login");
     
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt="icon"
        ></img>
        <div className="header_search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions className="header_opt" Icon={HomeIcon} title="Home" />
        <HeaderOptions
          className="header_opt"
          Icon={SupervisorAccountIcon}
          title="My network"
        />
        <HeaderOptions
          className="header_opt"
          Icon={BusinessCenterIcon}
          title="Jobs"
        />
        <HeaderOptions
          className="header_opt"
          Icon={SupervisorAccountIcon}
          title="My network"
        />
        <HeaderOptions
          className="header_opt"
          Icon={ChatBubbleIcon}
          title="Messaging"
        />
        <HeaderOptions
          className="header_opt"
          Icon={NotificationsIcon}
          title="Notifications"
        />
        <div className="logout_container">
          <button className="logout-btn" onClick={handleClick}>
            <HeaderOptions avatar={photo} title="me" />
          </button>
        </div>
      </div>
      <div className="toggle_container">
        {toggle ? (
          <ClearIcon className="toggleIcon" onClick={() => setToggle(false)} />
        ) : (
          <MenuIcon className="toggleIcon" onClick={() => setToggle(true)} />
        )}
        {toggle && (
          <div className="smallMenu__container">
            <HeaderOptions
              className="header_opt"
              Icon={HomeIcon}
              title="Home"
            />
            <HeaderOptions
              className="header_opt"
              Icon={SupervisorAccountIcon}
              title="My network"
            />
            <HeaderOptions
              className="header_opt"
              Icon={BusinessCenterIcon}
              title="Jobs"
            />
            <HeaderOptions
              className="header_opt"
              Icon={SupervisorAccountIcon}
              title="My network"
            />
            <HeaderOptions
              className="header_opt"
              Icon={ChatBubbleIcon}
              title="Messaging"
            />
            <HeaderOptions
              className="header_opt"
              Icon={NotificationsIcon}
              title="Notifications"
            />
            <div className="logout_container">
              <button className="logout-btn" onClick={handleClick}>
                <HeaderOptions avatar={photo} title="me" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
