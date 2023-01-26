import React from 'react'
import image from "../../../Assets/Car.png";
import styles from "../Styles/Image.module.scss"

const AuthImage = () => {
  return (
    <img src={image} className={styles["img"]} alt="image"/>
  )
}

export default AuthImage