import { Navigate, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

export const renderRoutesRecursive = (routes: any) => {

  return (
    <>
      {routes.map((route: any, index: number) => {
        const { path, Element, children } = route;
        return (
          <Route key={index} path={path} element={<Element />}>
            {children && renderRoutesRecursive(route.children)}
          </Route>
        );
      })}
    </>
  );
};

