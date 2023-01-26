import React from 'react'
import styles from './LoginImage.module.scss'
import login_image from "./manufacturing-a-product-illustration.jpg"

const LoginImage=()=> {
  return (

        <img src={login_image} className={styles.image}/>

  )
}

export default LoginImage