import React from 'react'
import styles from "./Sidebar.module.scss"

const SideBar = ({data,Element}:any) => {
  
  return (
    <div className={styles["sidebar-container"]}>
        {       
            data.map((item:any)=>{
                return <Element key={item.title} item={item}/>
            })
        }
    </div>
  )
}

export default SideBar