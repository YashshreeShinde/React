
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DeleteComponent from "../../../../../Common Components/Delete Component/DeleteComponent";
import { PopUpContext } from "../../../../../Common Components/Pop up/PopUpProvider";
import styles from "./DeleteMaterial.module.scss";
import {IDeleteMaterialProps} from "./DeleteMaterial.types";

const DeleteMaterial = () => {
  const navigate=useNavigate()
  const {setPopUp}=useContext(PopUpContext)
  const ad=2;
  const onDelete=()=>{
    console.log(ad)
    navigate(-1)
    setPopUp("success","Deleted")
  
  }
    return (
      <DeleteComponent text="material" onDelete={onDelete}/>
    )
  }
  export default DeleteMaterial