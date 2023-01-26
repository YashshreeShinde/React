import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { workerData } from 'worker_threads';
import styles from  "./Header.module.scss"

const Header = ({title,navLinks}:any) => {
   const location=useLocation()
  const getCaps=(word:string)=>{
    return word.toUpperCase()
  }
  return (
    <header className={styles["header-container"]}>
        <div>
            <span className={styles["title"]}>{getCaps(title)}</span>
        </div>
        <div className={styles["nav-links"]}>
        {
          navLinks.map((navLink:any)=>{
            return (
              <div  key={navLink.text}>
                <Link to={navLink.link} 
                 className={styles["link"]} >
                  <span>{navLink.text}</span>
                </Link>
              </div>
            )
          })
        }
        </div>
        
        
    </header>
  )
}
export default Header;
