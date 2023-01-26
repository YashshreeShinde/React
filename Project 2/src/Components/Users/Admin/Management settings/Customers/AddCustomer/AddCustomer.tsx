import React, { useContext } from "react";
import { createCustomer } from "../../../../../../Services/Admin.service";
import FormComponent from "../../../../../Common Components/Form Components/FormComponent/FormComponent";
import { AddCustomerFields } from "./AddCustomerFields";
import { PopUpContext } from "./../../../../../Common Components/Pop up/PopUpProvider";
import { useNavigate } from "react-router-dom";
import { AddCustomerTable } from "../../Get contexts and providers";

const AddCustomer = () => {
  const navigate = useNavigate();
  const { setPopUp } = useContext(PopUpContext);
  const { getData } = useContext(AddCustomerTable.Context);

  const onSubmit = async (values: any) => {
    try {
      const response = await createCustomer(values);
      console.log(response);
      setPopUp("success", response.data.message);
      navigate(-1);
      getData();
    } catch (error) {
      setPopUp("error", "CREATION FAILED");
      navigate(-1);
    }
  };
  return (
    <>
      <FormComponent
        onSubmit={onSubmit}
        formFields={AddCustomerFields}
        title="ADD CUSTOMER"
        backButton={true}
      />
    </>
  );
};

export default AddCustomer;
