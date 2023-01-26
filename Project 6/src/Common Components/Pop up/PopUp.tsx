import React, { Component, ReactNode, useContext, useState } from "react";
import AppContext from "../../App/Context/AppProvider";
import styles from "./PopUp.module.scss";

const PopUpComponent = () => {
  const {
    app: { popUpState, type, message },
    showPopUp,
  } = useContext(AppContext);

  setTimeout(() => {
    showPopUp();
  }, 3000);
  return <>{popUpState && <div className={styles[type]}>{message}</div>}</>;
};

export default PopUpComponent;
