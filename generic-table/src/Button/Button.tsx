import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.types";

const Button = ({ name, label, onClick, data, link ,actionstyles }: IButtonProps) => {

  return (
    <Link to={link} state={{ data }}>
      <button
        type="button"
        name={name}
        onClick={() => onClick(data)}
        className={[styles.button, actionstyles.color ? styles[actionstyles.color] : ''].join(' ')}>
        {label}
      </button>
    </Link>
  );
};
export default Button;
