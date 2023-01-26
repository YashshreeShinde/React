import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AuthContext from "../Components/Auth/Context/AuthProvider";
import LoginLayout from "../Components/Auth/Login Components/Login Layout/LoginLayout";
import { ROLE_PAGE_MAP } from "./RoutesCongig";
import SignUpLayout from './../Components/Auth/Sign Up Components/Sign Up Layout/SignUpLayout';

export const MainRoutes = () => {

  const {auth:{role}}=useContext(AuthContext);
  console.log(role);
  const {element,children}=ROLE_PAGE_MAP[role]
  const Element=element;

  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate replace to="login" />,
    },
    {
      path: "/login",
      element: <LoginLayout />,
    },
    {
      path: "/sign-up",
      element: <SignUpLayout />,
    },
    {
      path:"/home",
      element:<Element/>,
      children:children
    }
  ]);

  return routes;
};
