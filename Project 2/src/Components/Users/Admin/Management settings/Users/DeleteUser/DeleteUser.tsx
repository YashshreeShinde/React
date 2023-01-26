

import DeleteComponent from "../../../../../Common Components/Delete Component/DeleteComponent";
import styles from "./DeleteUser.module.scss";
import {IDeleteUserProps} from "./DeleteUser.types";
import { useContext } from 'react';
import { PopUpContext } from './../../../../../Common Components/Pop up/PopUpProvider';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {
  const navigate=useNavigate()
  const {setPopUp}=useContext(PopUpContext)
 
  const onDelete=()=>{

    navigate(-1)
    setPopUp("success","Deleted")
  
  }
    return (
      <DeleteComponent text="user" onDelete={onDelete}/>
    )
  }
  export default DeleteUser