import React from 'react'
import LoginForm from '../Login Form/LoginForm'
import LoginImage from '../Login Image/LoginImage'
import styles from "./Layout.module.scss"


const LoginLayout = ({onNavigate,displayPopUp}:any) => {
  return (
    <section className={styles["login-page"]}>
    <div className={styles["layout"]}>
    <LoginImage/>
    <LoginForm/> 
    </div>
    </section>
  )
}

export default LoginLayout