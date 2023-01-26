import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DeleteComponent from "../../../../../Common Components/Delete Component/DeleteComponent";
import Modal from "../../../../../Common Components/Modal/Modal";
import { PopUpContext } from "../../../../../Common Components/Pop up/PopUpProvider";
import { ExistingAluminTable } from "../../../../Get Contexts and Providers";


const DeleteAlumini = () => {
  const navigate = useNavigate();
  const { setPopUp } = useContext(PopUpContext);
  const { getData } = useContext(ExistingAluminTable.TableContext);

  const onDelete = async () => {
    try {
      // const response = await deleteCustomer(data._id);
      navigate(-1);
      getData();
      // setPopUp("success", response.data.message);
    } catch (error) {
      setPopUp("error", "Please Try Again");
    }
  };
  return (
    <Modal>
      <DeleteComponent text="Alumini" onDelete={onDelete} />
    </Modal>
  );
};
export default DeleteAlumini;
