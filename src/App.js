import React,{useEffect, useState} from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/register/Register"
import Login from "./components/register/Login";
import Main from "./components/main/main";
import AuthContext from "./authContext"

export default function App() {
  const [authState,setAuthState] = useState(null);
  const router = createBrowserRouter([{
    path:"/home",
    element:<Main />
},
{ 
path:"/register",
element:<Register/>
  },
  { 
      path:"/",
      element:<Login/>
          }
])
return(
<AuthContext.Provider value={[authState,setAuthState]}>
 <RouterProvider router={router}></RouterProvider>
</AuthContext.Provider>
)
} 

