import React from 'react'
import Button from '../Button/Button';
import styles from "./DeleteComponent.module.scss";
import { useNavigate } from 'react-router-dom';

const DeleteComponent = ({text,onDelete}:any) => {
  const navigate=useNavigate()
  return (
    <div className={styles["delete-modal"]}>
    <span>{`Are you sure you want to delete the ${text} ?`}</span>
        <div>
          <Button type="button" label="DELETE" name="delete" onClick={onDelete} actionStyles={{color:"danger"}}/>
          <Button type="button" label="CANCEL" name="delete" onClick={()=>navigate(-1)} actionStyles={{color:"primary"}}/>
        </div>
  </div>
  )
}

export default DeleteComponent