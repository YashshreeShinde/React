import React, { Component } from 'react'
import styles from "./Fields.module.scss"

class TextError extends Component<any> {
  render(){
  return <span className={styles["error"]}>{this.props.children}</span>
  }
}

export default TextError
