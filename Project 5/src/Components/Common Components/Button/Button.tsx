import { Component, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.types";

class Button extends Component<any> {
  render() {
    const { name, label, onClick, data, link, actionStyles } = this.props;
    return (
      <Link to={link} state={{ data }}>
        <button
          type="button"
          name={name}
          // onClick={() => onClick(data)}
          onClick={() => onClick()}
          className={[
            styles.button,
            actionStyles?.color ? styles[actionStyles?.color] : "",
          ].join(" ")}
        >
          {label}
        </button>
      </Link>
    );
  }
}
export default Button;
