import React from 'react'
import styles from "./Modal.module.scss"
import Edit from './Edit';
import Delete from './Delete';
import { useLocation } from 'react-router-dom';

const ModalComponent = ({modal}:any) => {
  const location=useLocation();
  const data=location.state.data

  const modalRoutes:any={
    "edit":Edit,
    "delete":Delete
  }
  const Modal=modalRoutes[modal]
  return (
    <div className={styles.background}>
        <div className={styles.content}>
            <Modal data={data}/>
        </div>
    </div>
  )
}

export default ModalComponent