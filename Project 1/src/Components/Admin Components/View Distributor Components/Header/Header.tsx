import React from 'react'
import styles from "./Header.module.scss"

const Header = ({displayModal,displayPopUp,getData}:any) => {
  return (
    <section className={styles["distributor-header"]}>
      <div>LIST OF ALL DISTRIBUTORS</div>
      <button className={styles["add-distributor-btn"]}
          onClick={()=>displayModal("AddNewModal",{displayPopUp,getData})}>Add</button>     
    </section>
  )
}

export default Header