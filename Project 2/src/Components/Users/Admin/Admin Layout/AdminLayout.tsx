import React from 'react'
import styles from "./AdminLayout.module.scss"
import { AdminHeaderArray } from './HeaderArrays';
import { Outlet } from 'react-router-dom';
import Header from '../../../Common Components/Header/Header';

const AdminLayout = () => {
  return (
    <>  
    <Header title="Admin" navLinks={AdminHeaderArray}/>
      <div className={styles["content"]}>
        <Outlet/>
     </div>
     
    </>
  )
}

export default AdminLayout