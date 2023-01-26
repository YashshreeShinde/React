
import FormComponent from "../../../../../Common Components/Form Components/FormComponent/FormComponent";
import styles from "./AddStorage.module.scss";
import {IAddStorageProps} from "./AddStorage.types";
import { AddStorageFields } from "./AddStorageFields";

const AddStorage = () => {
  const onSubmit=()=>{}
    return(
    <FormComponent title="ADD STORAGE" 
    // validationSchema={validationSchema} 
    onSubmit={onSubmit} formFields={AddStorageFields} backButton={true}/>
      
    )
  }
  export default AddStorage