
import { useNavigate } from "react-router-dom";
import DeleteComponent from "../../../../../Common Components/Delete Component/DeleteComponent";
import { PopUpContext } from "../../../../../Common Components/Pop up/PopUpProvider";
import styles from "./DeleteFurnace.module.scss";
import {IDeleteFurnaceProps} from "./DeleteFurnace.types";
import { useContext } from "react";

const DeleteFurnace = () => {
  const navigate=useNavigate()
  const {setPopUp}=useContext(PopUpContext)
  const ad=2;
  const onDelete=()=>{
    console.log(ad)
    navigate(-1)
    setPopUp("success","Deleted")
  
  }
    return (
      <DeleteComponent text="furnace" onDelete={onDelete}/>
    )
  }
  export default DeleteFurnace