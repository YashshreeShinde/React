
import FormComponent from "../../../../../Common Components/Form Components/FormComponent/FormComponent";

import { AddUserFields } from './AddUserFields';

const AddUser = () => {

  const onSubmit=async(values:any)=>{
    console.log(values)
   
    //api call
    //if not successful do not close if successful close form
  }
    return (
      <>
      
      <FormComponent onSubmit={onSubmit} formFields={AddUserFields} title="ADD USER"  backButton={true}/>
      </>
    )
  }
  export default AddUser