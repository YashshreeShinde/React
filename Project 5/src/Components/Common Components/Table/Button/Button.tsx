import { Component, ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.types";

class Button extends Component<any>{
render():ReactNode{
  const { name, label, onClick, data, link ,actionstyles }=this.props
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
}
export default Button;
