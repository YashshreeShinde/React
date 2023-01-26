
import FormComponent from "../../../../../Common Components/Form Components/FormComponent/FormComponent";
import styles from "./AddMaterial.module.scss";
import {AddMaterialFields} from "./AddMaterialFields";

const AddMaterial = () => {
   const onSubmit=()=>{}
    return (
      <FormComponent onSubmit={onSubmit} formFields={AddMaterialFields} title="ADD MATERIAL" backButton={true}/>
    )
  }
  export default AddMaterial