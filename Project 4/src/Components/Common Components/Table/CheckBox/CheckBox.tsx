import { ChangeEvent, useEffect, useState } from "react";
import styles from "./CheckBox.module.scss";
import { ICheckBoxProps } from "./CheckBox.types";

const CheckBox = ({
    label,
    name,
    checked,
    required,
    reset,
}: ICheckBoxProps) => {
    const [isChecked, setIsChecked] = useState(Boolean(checked));

    useEffect(() => {
        setIsChecked(Boolean(checked));
    }, [reset]);

    const handelCheckedChange = (e: any) => {
        setIsChecked(!isChecked);
        e.currentTarget.value = !isChecked ? "yes" : "no";
    };

    return (
        <div className={styles.checkbox}>
            <label htmlFor={name + label}>{label}</label>
            <input
                required={required}
                id={name + label}
                name={name}
                type="checkbox"
                checked={isChecked}
                value={isChecked ? "yes" : "no"}
                // defaultChecked={checked ? checked : false}
                onChange={handelCheckedChange}
            />
        </div>
    );
};
export default CheckBox;
