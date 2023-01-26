import React from 'react'
import styles from "./DistributorItem.module.scss"
import { IDistributorItemProps } from './DistributorItem.types';

const DistributorItem = ({name,displayModal,getData,data,displayPopUp}:IDistributorItemProps) => {

  const handleEdit=()=>{
    displayModal("UpdateModal",{data,getData,displayPopUp});
  }

  const handleDelete=()=>{
    console.log(data)
    displayModal("DeleteModal",{data,getData,displayPopUp})   
  }
  return (
    <div className={styles["item-container"]}>
    <div className={styles["name"]}>{name}</div>
    <div className="actions">
        <button className={styles["actions-btn"]} id={styles["edit-btn"]} onClick={handleEdit}>Edit</button>
        <button className={styles["actions-btn"]} id={styles["delete-btn"]} onClick={handleDelete}>Delete</button>
    </div> 
  </div>
  )
  
}
export default DistributorItem;
