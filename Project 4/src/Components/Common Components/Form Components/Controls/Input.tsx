import React, { Component } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styles from "./Fields.module.scss";

class Input extends Component<any> {
  render() {
    const { label, name, ...rest } = this.props;
    return (
      <div className={styles["form-control"]}>
        <label htmlFor={name} className={styles["label"]}>
          {label}
        </label>
        <Field id={name} name={name} {...rest} className={styles["input"]} />
        <ErrorMessage component={TextError} name={name} />
      </div>
    );
  }
}

export default Input;
