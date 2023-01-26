import React from 'react'
import styles from "./Modal.module.scss"
import { useLocation, useNavigate } from 'react-router-dom';
// import { modalMap } from './ModalMap/ModalMap';
import IconComponent from '../Icon Component/IconComponent';

const ModalComponent = ({children}:any) => {

  return (
    <div className={styles.background}>
        <div className={styles.content}>
          {children}
        </div>
    </div>
  )
}

export default ModalComponent