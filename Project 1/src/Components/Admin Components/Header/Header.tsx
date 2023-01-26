import React from 'react'
import styles from  "./Header.module.scss"

const Header = ({onNavigate}:any) => {

  const navigateTo=(page:string)=>{
    onNavigate(`Admin/${page}`)
  }

  return (
    <header className={styles.header_container}>
        <div>
            <span>ADMIN DASHBOARD</span>
        </div>

        <div>
            <span onClick={()=>navigateTo("Sales")}>Sales</span>
            <span onClick={()=>navigateTo("Distributor")}>Distributor</span>
            <span onClick={()=>navigateTo("Send-Notifications")}>Send Notification</span>
            <span>Logout</span>
        </div>
    </header>
  )
}
export default Header;
