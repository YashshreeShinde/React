import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../../Common Components/Header/Header';
import styles from "./AccountantLayout.module.scss"
import { AccountantHeaderValues } from './AccountantHeaderValues';

const AccountLayout = () => {
  return (
    <>
    <Header title="Accountant" navLinks={AccountantHeaderValues}/>
    <div className={styles["content"]}>
      <Outlet/>
   </div>
   
  </>
  )
}

export default AccountLayout