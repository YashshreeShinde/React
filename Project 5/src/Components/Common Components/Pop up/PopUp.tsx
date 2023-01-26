import React, { Component, ReactNode, useContext, useState } from "react";
import styles from "./PopUp.module.scss";

import { IPopUpContext } from "./PopUp.types";
import  AppContext  from '../../App/Context/AppContext';

class PopUpComponent extends Component<any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render(): ReactNode {
    const { app:{popUpState, type, message} ,showPopUp} = this.context;

    setTimeout(() => {
      showPopUp();
    }, 3000);
    return <>{popUpState && <div className={styles[type]}>{message}</div>}</>;
  }
}

export default PopUpComponent;
