import React from 'react'
import { Outlet } from 'react-router-dom';
import AddButtonComponent from '../Add Button Component/AddButtonComponent';
import styles from "./CommonLayout.module.scss"

const CommonLayout = ({Provider,ViewComponent}:any) => {
  return (
    <>
      <Provider>
        <div className={styles["add-button"]}>
          <AddButtonComponent />
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