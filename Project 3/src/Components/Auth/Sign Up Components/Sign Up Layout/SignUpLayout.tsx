import React from 'react'
import SignUpImage from '../../Image/Image'
import styles from "../../Styles/Layout.module.scss"
import SignUp from './../Sign Up Form/SignUp';


const SignUpLayout = () => {

  return (
    <section className={styles["login-page"]}>
    <div className={styles["layout"]}>
    <SignUpImage/>
    <SignUp/> 
    </div>
    </section>
  )
}

export default SignUpLayout