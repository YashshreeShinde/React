import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../Common Components/Header/Header';
import { AdminHeaderArray } from './../../../Helpers/AdminHeader';


const AdminLayout = () => {
  return (
    <>
    <Header title="admin" navLinks={AdminHeaderArray}/>
    <div>
        <Outlet/>
     </div>
    </>
  )
}

export default AdminLayout