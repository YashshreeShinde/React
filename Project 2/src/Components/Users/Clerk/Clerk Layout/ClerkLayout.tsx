import React from 'react'
import Header from '../../../Common Components/Header/Header';
import styles from "./ClerkLayout.module.scss"
import { Outlet } from 'react-router-dom';
import { clerkHeaderValues } from './ClerkHeaderValues';

const ClerkLayout = () => {
  return (
    <>
    <Header title="Clerk" navLinks={clerkHeaderValues}/>
    <div className={styles["content"]}>
      <Outlet/>
   </div>
   
  </>
  )
}

export default ClerkLayout