import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconsMap } from "../../../Helpers/IconsMap";
import styles from "./IconComponent.module.scss";
class IconComponent extends Component<any> {
  render() {
    const { icon, link, data, ...props } = this.props;
    const Icon = IconsMap[icon];
    return (
      // <Link to={link} state={{data}} className={styles["icon"]}>
      <span>
        <Icon
          // onClick={() => onClick(data)}
          className={styles["icon"]}
          {...props}
        />
      </span>
      // </Link>
    );
  }
}

export default IconComponent;
