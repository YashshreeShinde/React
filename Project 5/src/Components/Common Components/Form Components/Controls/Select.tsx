import React, { Component } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import styles from "./Fields.module.scss"

class Select extends Component<any> {
  
  render(): React.ReactNode {
    const { label, name, options, ...rest } = this.props;
    return (
      <div className={styles["form-control"]}>
        <label htmlFor={name} className={styles["label"]}>{label}</label>
        <Field as='select' id={name} name={name} className={styles["select"]} {...rest}>
          {options.map((option:any) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
          })}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
  }
 
}

export default Select
