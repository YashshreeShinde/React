import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import styles from "./Fields.module.scss"

function Textarea (props:any) {
  const { label, name, ...rest } = props
  return (
    <div className={styles["form-control"]}>
      <label htmlFor={name} className={styles["label"]}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} className={styles["textarea"]}/>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea
