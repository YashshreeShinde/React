import React, { useContext, useState } from 'react'
import styles from './PopUp.module.scss'
import { PopUpContext } from './PopUpProvider';

const PopUpComponent = () => {

  const {PopUp,type,message,showPopUp}=useContext(PopUpContext)

 setTimeout(()=>{
  showPopUp(false)
 },3000)

  return (
    <>
    {PopUp && <div className={styles[type]}>
        {message}
    </div>
    }
    </>
    
  )
}

export default PopUpComponent