import React from 'react'
import styles from '../Styles/Image.module.scss'
import image from "../../../Assets/social media.jpg"

const Image=()=> {
  return (
        <img src={image} className={styles.image}/>
  )
}

export default Image