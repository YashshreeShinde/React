import React from 'react'
// import styles from './PopUp.module.scss'
const PopUp = ({closePopUp,props}:any) => {
  const {type,text}=props;

 setTimeout(()=>{
    closePopUp()
 },3000)
  
  return (
    <div>
        {text}
    </div>
  )
}

export default PopUp