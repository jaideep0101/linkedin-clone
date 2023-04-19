import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext("");

function MyContext({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
      }
    });
 


  return (
    <UserContext.Provider value={[isLoggedIn, setLoggedIn]}>
      {children}
    </UserContext.Provider>
  );
}

export default MyContext;
