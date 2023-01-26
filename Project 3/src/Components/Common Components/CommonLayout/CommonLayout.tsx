import React from 'react'
import { Outlet } from 'react-router-dom';
import styles from "./CommonLayout.module.scss"

const CommonLayout = ({Provider,ViewComponent,title}:any) => {
  return (
    <>
      <Provider>
        <div className={styles["header"]}>
          <h2>{title}</h2>
        </div>
        <div className={styles["layout"]}>
          <Outlet />
          <div className={styles["table"]}>
            <ViewComponent />
          </div>
        </div>
      </Provider>
    </>
  )
}

export default CommonLayout