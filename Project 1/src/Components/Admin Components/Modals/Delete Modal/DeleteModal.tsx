import React from 'react'
import { http } from '../../../../Services/Http.service';
import styles from "../Modal.module.scss"


const DeleteModal = ({ closeModal, modalProps }: any) => {

  const { data, getData,displayPopUp } = modalProps;
  const handleDelete = async() => {
    let response;
    try{
      const id = data._id;
      response=await http("delete",`user/${id}`)
      closeModal();
      displayPopUp("success",response.data.message);
      getData();
    }
    catch(error)
    {
      displayPopUp("error",response.error)
    }
   
  }

  return (
    <div className={styles["modal-background"]}>
    <div className={styles["modal-container"]}>
      <div className={styles["modal-delete"]}>
        <h4>Are you sure you want to delete?</h4>
        <div>
          <button type="button" onClick={handleDelete}>YES</button>
          <button type="button" onClick={closeModal}>NO</button>
        </div>
      </div>
    </div>
    </div>

  )
}

export default DeleteModal