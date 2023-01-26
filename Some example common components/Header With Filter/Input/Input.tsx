import { InputHTMLAttributes, useEffect, useState } from "react";

import styles from "./Input.module.scss";
import { IInputProps } from "./Input.types";

const Input = ({
    type,
    defaultValue,
    // label,
    placeholder,
    name,
    attribute,
    required,
    reset,
    onChange,
    value
}: IInputProps) => {

    return (
        <div className={styles.input}>
            {/* <label htmlFor={label + type}>{label}</label> */}
            <input
                {...attribute}
                name={name}
                onChange={(e) => onChange(e.currentTarget.value)}
                // id={label + type}
                type={type}
                placeholder={placeholder}
                value={value}
                required={required}
            />
        </div>
    );
};
export default Input;
