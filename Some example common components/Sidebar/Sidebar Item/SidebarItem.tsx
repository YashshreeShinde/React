import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./SidebarItem.module.scss"

const SidebarItem = ({item}:any) => {

  return (  
    <div className={styles["sidebar-item"]}>
      <Link to={item.link} className={styles["link"]}>
        {item.title}
      </Link>       
    </div>
  )
}

export default SidebarItem