import React, { Component } from "react";
import LoginForm from "../Login Form/LoginForm";
import Image from "../../Image/Image";
import styles from "../../Styles/Layout.module.scss";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

class LoginLayout extends Component {
  render(): ReactNode {
    return (
      <section className={styles["login-page"]}>
        <div className={styles["layout"]}>
          <Image />
          <LoginForm />
        </div>
      </section>
     
    );
  }
}

export default LoginLayout;
