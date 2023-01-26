import React from 'react'
import LoginForm from '../Login Form/LoginForm'
import Image from '../../Image/Image'
import styles from "../../Styles/Layout.module.scss"
import { useLocation } from 'react-router-dom';


const LoginLayout = () => {

  const location=useLocation();
  console.log(location)
  return (
    <section className={styles["login-page"]}>
    <div className={styles["layout"]}>
    <Image/>
    <LoginForm/> 
    </div>
    </section>
  )
}

export default LoginLayout