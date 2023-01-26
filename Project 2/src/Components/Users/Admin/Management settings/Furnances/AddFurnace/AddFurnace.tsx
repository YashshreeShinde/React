
import FormComponent from "../../../../../Common Components/Form Components/FormComponent/FormComponent";
import styles from "./AddFurnace.module.scss";
import {IAddFurnaceProps} from "./AddFurnace.types";
import { AddFurnanceFields } from "./AddFurnanceFields";

const AddFurnace = () => {
  const onSubmit=()=>{}
  return(
  <FormComponent title="ADD FURNANCE" 
  onSubmit={onSubmit} formFields={AddFurnanceFields} backButton={true}/>
    
  )
  }
  export default AddFurnace