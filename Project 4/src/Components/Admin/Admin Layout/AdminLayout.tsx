import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Common Components/Header/Header';
import MeterLayout from '../Meter/Meter Layout/MeterLayout';
import { AdminHeaderArray } from './../../../Helpers/AdminHeader';
import styles from "./AdminLayout.module.scss"

const AdminLayout = () => {
  return (
    <>
    <Header title="admin" navLinks={AdminHeaderArray}/>
    <div className={styles["content"]}>
        <Outlet/>
     </div>
    </>
  )
}

export default AdminLayout