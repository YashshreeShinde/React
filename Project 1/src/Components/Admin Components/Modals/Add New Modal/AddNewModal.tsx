import { useState } from "react";
import { http} from "../../../../Services/Http.service";
import { setFormDataFn } from "../../../../Utils/Utility";
import styles from "../Modal.module.scss"

const AddNewModal = ({ closeModal,modalProps}: any) => {
  const {displayPopUp,getData}=modalProps;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const handleChange = setFormDataFn(formData, setFormData)

  const submitForm=async(event: React.MouseEvent<HTMLButtonElement>)=>{
    let message;
    event.preventDefault();
    try{
      const response=await http("post","auth/addDistributor",formData)
      message=response.data.message;
      closeModal();
      getData();
      displayPopUp("success",message)
    }
    catch(error)
    {
      console.log(error)
      displayPopUp("error",message)
    }
  }

  return (
    <div className={styles["modal-background"]}>
    <section className={styles["modal-container"]}>
      <div className={styles["modal"]}>
        <div>
          <button onClick={closeModal}>X</button>
        </div>
        <div>
          <h1>ADD DISTRIBUTOR</h1>
        </div>
        <form>
          <div className="body">

            <div>
              <input
                type="text"
                name="name"
                placeholder="Name of the Distributor"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email of the Distributor"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles["footer"]}>
            <button onClick={submitForm}>ADD</button>
          </div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default AddNewModal;
