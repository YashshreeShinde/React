import { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import { ISelectProps } from "./Select.types";

const Select = ({
    label,
    name,
    options,
    required,
    attribute,
    defaultValue,
    onChange
}: any) => {
    return (
        <>
            {/* {label && <label className={styles["label"]} htmlFor={label + name}>{label}</label>} */}
            <select  className={styles["select"]}
                id={label + name}
                name={name}
                {...attribute}
                onChange={(e) => onChange(e.target.value)}
                required={required}
            >
                {options?.map(({ label, value }:any) => (
                    <option key={label + value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </>
    );
};
export default Select;
