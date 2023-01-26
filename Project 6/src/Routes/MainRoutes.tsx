import React from "react"
import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "../Auth/AuthLayout/AuthLayout";
import ResetPassword from "../Auth/Reset Password/ResetPassword";
import LoginForm from "../Auth/Login/LoginForm";
import SignUp from "../Auth/Sign Up/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import ForgotPassword from "../Auth/ForgotPassword/ForgotPassword";

const LazyAuthLayout=React.lazy(()=>import('../Auth/AuthLayout/AuthLayout'))
const AppLayout=React.lazy(()=>import('../App/Layout/Layout'))
const LazyCarsDataPage=React.lazy(()=>import('../Components/Cars Data/Cars Data Layout/CarsDataLayout'))
const LazyReportsPage=React.lazy(()=>import('../Components/Reports/Reports Layout/ReportsLayout'))

export const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate replace to="login" />,
    },
    {
      path: "/login",
      element: <LazyAuthLayout Component={LoginForm} />,
    },
    {
      path: "/reset-password/:token",
      element: <LazyAuthLayout Component={ResetPassword} />,
    },
    {
      path: "/sign-up",
      element: <LazyAuthLayout Component={SignUp} />,
    },
    {
      path: "/forgot-password",
      element: <AuthLayout Component={ForgotPassword} />,
    },
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/home",
          element: <AppLayout />,
          children: [
            {
              path:"",
              element:<Navigate replace to="cars-data"/>
            },
            {
              path: "cars-data",
              element: <LazyCarsDataPage />,
            },
            {
              path: "reports",
              element: <LazyReportsPage />,
            },
          ],
        },
      ],
    },
  ]);

  return routes;
};
