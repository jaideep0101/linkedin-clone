import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import Feed from "../feed/feed";
import Widgets from "../widgets/widgets";
import { UserContext } from "../../context/context";
// import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


function Main() {
  const [isLoggedIn, setLoggedIn, user] = useContext(UserContext);
  const { displayName, email, photoURL, uid } = user;
    const [posts,setPosts] = useState([]);
  
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("running");
  //   if (!isLoggedIn) {
  //     navigate("/login");
  //     console.log(isLoggedIn);
  //   }else{
  //     console.log("Success");
  //   }
  // }, [isLoggedIn]);

  async function fetchDate() {
    const querySnapshot = await getDocs(collection(db, "post"));
    setPosts([]);
    querySnapshot.forEach((doc) => {
     setPosts(prev => [...prev,doc.data()]);
    })
    
  }

  useEffect(() => {
    fetchDate();
  }, [isLoggedIn]);


console.log(posts);
  return (
    <div className="App">
      <Header photo={photoURL} />
      <div className="App_body">
        <Sidebar userName={displayName} email={email} photo={photoURL} />
        <Feed userName={displayName} email={email} photo={photoURL} uid={uid} posts={posts} fetchData={fetchDate}/>
        <Widgets />
      </div>
    </div>
  );
}

export default Main;
