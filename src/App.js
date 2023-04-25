import React from "react";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Main from "./components/main/main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MyContext from "./context/context";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return (
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  );
}
