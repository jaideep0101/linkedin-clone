import React, {useContext,useEffect} from "react";
import "./App.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/feed";
import Widgets from "../widgets/widgets";
import { UserContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function Main() {
  const [isLoggedIn, setLoggedIn] = useContext(UserContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log("running");
    if (!isLoggedIn) {
      navigate("/login");
      console.log(isLoggedIn);
    }else{
      console.log("Success");
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <Header />
      <div className="App_body">
        <Sidebar  />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default Main;
