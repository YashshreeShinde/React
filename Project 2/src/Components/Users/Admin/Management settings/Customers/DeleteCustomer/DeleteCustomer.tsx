import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DeleteComponent from "../../../../../Common Components/Delete Component/DeleteComponent";
import { PopUpContext } from "../../../../../Common Components/Pop up/PopUpProvider";
import { deleteCustomer } from "../../../../../../Services/Admin.service";
import { AddCustomerTable } from "../../Get contexts and providers";

const DeleteCustomer = ({ data }: any) => {
  const navigate = useNavigate();
  const { setPopUp } = useContext(PopUpContext);
  const { getData } = useContext(AddCustomerTable.Context);

  const onDelete = async () => {
    try {
      const response = await deleteCustomer(data._id);
      navigate(-1);
      getData();
      setPopUp("success", response.data.message);
    } catch (error) {
      setPopUp("error", "Please Try Again");
    }
  };
  return <DeleteComponent text="Customer" onDelete={onDelete} />;
};
export default DeleteCustomer;
