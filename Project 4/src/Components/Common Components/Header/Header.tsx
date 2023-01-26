import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { workerData } from 'worker_threads';
import styles from  "./Header.module.scss"

class Header extends Component<any> {
 
   getCaps=(word:string)=>{
    return word.toUpperCase()
  }

  render(): React.ReactNode {
    const {title,navLinks}=this.props;
    return (
      <header className={styles["header-container"]}>
          <div>
              <span className={styles["title"]}>{this.getCaps(title)}</span>
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
   
}
export default Header;
