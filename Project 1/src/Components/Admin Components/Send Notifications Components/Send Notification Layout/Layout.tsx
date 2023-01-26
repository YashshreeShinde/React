import React from 'react'
import SideBar from '../SideBar/SideBar'
import styles from './Layout.module.scss'

const SendNotification = () => {
  return (
    <section className={styles["send-notification-container"]}>
        <section className={styles["sidebar"]}>
        <SideBar/>
        </section>
        <section className={styles["send-message"]}>
        
        </section>
       
    </section>
    


  )
}

export default SendNotification