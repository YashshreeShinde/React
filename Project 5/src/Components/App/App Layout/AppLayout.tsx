import React, { Component, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROLE_PAGE_MAP } from "../../../Routes/RoutesConfig";
import { getStore } from "../../../Utils/Utility";
import LoginLayout from "../../Auth/Login Components/Login Layout/LoginLayout";
import SignUpLayout from "../../Auth/Sign Up Components/Sign Up Layout/SignUpLayout";
import PopUpComponent from "../../Common Components/Pop up/PopUp";
import AppContext from "../Context/AppContext";
import  { renderRoutesRecursive } from './../../../Routes/AppRoutes';

export default class AppLayout extends Component <any,any>{
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render() {
    const {
      app: { popUpState ,role},
    } = this.context;
    const route = role ? ROLE_PAGE_MAP[role] : null;
    return (
      <>
        {popUpState && <PopUpComponent />}
        <Routes>
        <Route path="/" element={<Navigate replace to="login" />} />
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/sign-up" element={<SignUpLayout />} />
        {route?.map((route: any, index: number) => {
          const { path, Element, children } = route;
          return (
            <Route key={index} path={path} element={
              <React.Suspense fallback="Loading...">
                    <Element />
                  </React.Suspense>
            }>
              {children && renderRoutesRecursive(route.children)}
            </Route>
          );
        })}
      </Routes>
      </>
    );
  }
}

