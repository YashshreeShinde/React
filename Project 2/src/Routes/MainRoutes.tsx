import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import LoginLayout from "../Components/Auth/Login Components/Login Layout/LoginLayout";
import AdminLayout from "../Components/Users/Admin/Admin Layout/AdminLayout";
import ClerkLayout from "../Components/Users/Clerk/Clerk Layout/ClerkLayout";
import { AdminRoutes } from "./AdminRoutes/AdminRoutes";
import AccountLayout from "./../Components/Users/Accountant/Accountant Layout/AccountLayout";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const MainRoutes = () => {
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
      element: <PrivateRoutes />,
      children: [
        {
          path: "/admin",
          element: <AdminLayout />,
          children: AdminRoutes,
        },
        {
          path: "/clerk",
          element: <ClerkLayout />,
        },
        {
          path: "/accountant",
          element: <AccountLayout />,
        },
      ],
    }
  ]);

  return routes;
};
