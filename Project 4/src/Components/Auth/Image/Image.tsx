import React, { Component, ReactNode } from 'react'
import styles from '../Styles/Image.module.scss'
import image from "../../../Assets/image.jpg"

class Image extends Component {
  render():ReactNode{
  return (
        <img src={image} className={styles.image}/>
  )
  }
}

export default Image