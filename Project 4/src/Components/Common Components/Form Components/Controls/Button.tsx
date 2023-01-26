import React, { Component } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import styles from "./Fields.module.scss";

class Button extends Component<any> {
  render() {
    const { label, name, onSubmit, type, ...rest } = this.props;
    return (
      <div className={styles["form-control"]}>
        <Field
          as="button"
          type={type}
          id={name}
          name={name}
          {...rest}
          onSubmit={onSubmit}
        >
          {label}
        </Field>
      </div>
    );
  }
}

export default Button;
