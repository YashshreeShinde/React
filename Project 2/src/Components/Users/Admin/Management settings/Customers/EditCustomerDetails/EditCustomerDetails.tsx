import { updateCustomer } from "../../../../../../Services/Admin.service";
import FormComponent from "../../../../../Common Components/Form Components/FormComponent/FormComponent";
import { EditCustomerFields } from "./EditCustomerFields";
import { useContext } from "react";
import { PopUpContext } from "./../../../../../Common Components/Pop up/PopUpProvider";
import { useNavigate } from "react-router-dom";
import { AddCustomerTable } from "../../Get contexts and providers";

const EditCustomerDetails = ({ data }: any) => {
  const navigate = useNavigate();
  const { setPopUp } = useContext(PopUpContext);
  const { getData } = useContext(AddCustomerTable.Context);

  const initialValues = {
    name: data?.name,
    email: data?.email,
    address: data?.address,
    state: data?.state,
  };

  const onSubmit = async (values: any) => {
    try {
      const response = await updateCustomer(data._id, values);
      console.log(response);
      navigate(-1);
      setPopUp("success", response.data.message);
      getData();
    } catch (error) {
      setPopUp("error", "");
      navigate(-1);
    }
  };
  return (
    <>
      <FormComponent
        initialValues={initialValues}
        onSubmit={onSubmit}
        formFields={EditCustomerFields}
        title="EDIT CUSTOMER"
      />
    </>
  );
};
export default EditCustomerDetails;
