import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import AddButtonComponent from '../../../../../Common Components/Add Button Component/AddButtonComponent';
import ViewUsers from '../ViewUsers/ViewUsers';


const UsersLayout = () => {
  return (
    // <div>
    //     <Outlet/>
    //     <ViewUsers/>
    // </div>
    <>
        {/* <div className={styles["add-button"]}>
          <AddButtonComponent />
        </div>
        <div className={styles["layout"]}>
           <Outlet />
          <div className={styles["table"]}>
            <ViewUsers />
          </div>
        </div> */}
    </>
      
  )
}

export default UsersLayout