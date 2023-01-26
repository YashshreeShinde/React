import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MainRoutes } from "../Routes/MainRoutes";
import { useContext } from "react";
import AppContext from "../App/Context/AppProvider";
import PopUpComponent from "../Common Components/Pop up/PopUp";

const Main = () => {
  const {
    app: { popUpState },
  } = useContext(AppContext);
  return (
  <>
  {popUpState && <PopUpComponent />}
  <React.Suspense fallback="Loading...">
  <MainRoutes />
  </React.Suspense>
  </>
  )
  ;
};

export default Main;
