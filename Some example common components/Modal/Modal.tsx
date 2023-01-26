import React from 'react'
import styles from "./Modal.module.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { modalMap } from './ModalMap/ModalMap';
import IconComponent from '../Icon Component/IconComponent';

const ModalComponent = ({modal,backButton}:any) => {
  const location=useLocation();
  const data=location.state?.data
  const navigate = useNavigate();
  const Modal=modalMap[modal]

  return (
    <div className={styles.background}>
        <div className={styles.content}>
            {backButton && <IconComponent icon="AiFillCloseSquare" onClick={()=>navigate(-1)} size="2.5rem" fill="yellow"/>}
            <Modal data={data}/>
        </div>
    </div>
  )
}

export default ModalComponent