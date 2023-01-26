import React from 'react'
import { Link } from 'react-router-dom';
import { IconsMap } from '../../Helphers/IconsMap';
import styles from "./IconComponent.module.scss"
const IconComponent = ({icon,link,data,onClick,...props}:any) => {

 const Icon=IconsMap[icon];
  return (
    // <Link to={link} state={{data}} className={styles["icon"]}>
       <span> <Icon onClick={ ()=>onClick(data)} className={styles["icon"]}{...props} /></span>
    // </Link>
  )
}

export default IconComponent