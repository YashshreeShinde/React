import React from 'react'
import styles from "./Fields.module.scss"

function TextError (props:any) {
  return <span className={styles["error"]}>{props.children}</span>
}

export default TextError
