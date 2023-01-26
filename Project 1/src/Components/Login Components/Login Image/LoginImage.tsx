import React from 'react'
import styles from './LoginImage.module.scss'
import login_image from "./Retirement-Gifts-Ideas-For-2021-1.png"

const LoginImage=()=> {
  return (
    <section className={styles.login_image}>
        <img src={login_image} className={styles.image}/>
    </section>
  )
}

export default LoginImage