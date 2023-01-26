import React from 'react'
import styles from "./ManagementSettingsLayout.module.scss"
import { manageData } from './Sidebar/SidebarValues';
import { Outlet } from 'react-router-dom';
import SideBar from '../../../../Common Components/Sidebar/SideBar';
import SidebarItem from '../../../../Common Components/Sidebar/Sidebar Item/SidebarItem';
import { getFurnace } from '../../../../../Services/Admin.service';

const ManagementSettings = () => {

  return (
    <>   
    <div className={styles["container"]}>
        <div className={styles["sidebar"]}>
          <SideBar data={manageData} Element={SidebarItem}/>
        </div>
        <div className={styles["content"]}>
          <Outlet/>
        </div>

    </div>
    </>
  )
}

export default ManagementSettings