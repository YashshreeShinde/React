import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import styles from "./SideBar.module.scss"
const SideBar = () => {
  return (
    <section className={styles["sidebar-container"]}>
        <SearchBar/>
        <section className={styles["users-container"]}>
            
        </section>

    </section>
  )
}

export default SideBar