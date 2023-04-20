import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext("");

function MyContext({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user,setCurrentUser] = useState({
    displayName :"",
    email:"",
    photoURL:""
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setCurrentUser({
          displayName:user.displayName,
          email:user.email,
          photoURL:user.photoURL,
          uid
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[isLoggedIn, setLoggedIn,user]}>
      {children}
    </UserContext.Provider>
  );
}

export default MyContext;
