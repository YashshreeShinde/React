import React from 'react'
import LoginForm from '../Login Form/LoginForm'
import LoginImage from '../Login Image/LoginImage'
import styles from "./Layout.module.scss"


const Layout = ({onNavigate,displayPopUp}:any) => {
  return (
    <section className={styles["login-page"]}>
    
    <LoginImage/>
    <LoginForm onNavigate={onNavigate} displayPopUp={displayPopUp}/>
    
    
    </section>
  )
}

export default Layout