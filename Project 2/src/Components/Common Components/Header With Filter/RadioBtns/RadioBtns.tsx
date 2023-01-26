import { useEffect, useState } from "react";
import styles from "./RadioBtns.module.scss";
import { IRadioBtnsProps } from "./RadioBtns.types";

const RadioBtns = ({
    label,
    name,
    options,
    attribute,
    required,
    defaultValue,
    reset,
}: IRadioBtnsProps) => {
    const [checked, setChecked] = useState(defaultValue);

    useEffect(() => {
        setChecked(defaultValue ? defaultValue : "");
    }, [reset]);
    return (
        <div className={styles.radio}>
            <h4>{label}</h4>
            {options.map((option, index) => (
                <div key={index + option.label + option.value}>
                    <label htmlFor={option.label + name + option.value}>
                        {option.label}
                    </label>
                    <input
                        required={required}
                        {...attribute}
                        name={name}
                        id={option.label + name + option.value}
                        type="radio"
                        value={option.value}
                        defaultChecked={checked == option.value}
                        onClick={(e) => setChecked(e.currentTarget.value)}
                    />
                </div>
            ))}
        </div>
    );
};
export default RadioBtns;
