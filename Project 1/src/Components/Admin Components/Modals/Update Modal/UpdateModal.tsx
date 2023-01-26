import { useEffect, useState } from "react";
import { http } from "../../../../Services/Http.service";
import { setFormDataFn } from "../../../../Utils/Utility";
import styles from "../Modal.module.scss"

const UpdateModal = ({ closeModal, modalProps }: any) => {
  const { data, getData,displayPopUp } = modalProps;
  const {_id,name,email} = data;
  const [formData, setFormData] = useState({
    name:name,
    email: email,
  })

  const handleChange = setFormDataFn(formData, setFormData)

  const submitForm = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let message;
    try{
    const response=await http("put",`user/${_id}`,formData)
    console.log(response)
    message=response.data.message;

    getData();
    closeModal();
    displayPopUp("success",message)
    }
    catch(error)
    {
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
          <h1>Edit Distributor</h1>
        </div>
        <form>
          <div className="body">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name of the Distributor"
                // defaultValue={userName}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email of the Distributor"
                // defaultValue={userName}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={styles["footer"]}>
            <button type="button" onClick={submitForm}>EDIT</button>
          </div>

        </form>

      </div>
    </section>
    </div>
  );
};

export default UpdateModal;
