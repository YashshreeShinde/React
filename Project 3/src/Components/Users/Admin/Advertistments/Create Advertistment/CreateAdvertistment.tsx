import { Formik, Form } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./CreateAdvertistment.module.scss";
import * as Yup from "yup";
import { useContext } from "react";
import { PopUpContext } from "../../../../Common Components/Pop up/PopUpProvider";
import Modal from "../../../../Common Components/Modal/Modal";
import FormikControl from "../../../../Common Components/Form Components/Controls/FormikControl";
import IconComponent from "../../../../Common Components/Icon Component/IconComponent";
import Image from './../../../../Auth/Image/Image';

const CreateAdvertistment = () => {

  const navigate = useNavigate();
  const { setPopUp } = useContext(PopUpContext);

  const initialValues = {
    title: "",
    description: "",
    valid_till_date: null,
    file:null
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    valid_till_date: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values: any) => {
    console.log("Form data", values);
    setPopUp("success", "ok");
  };

  return (
    <>
      <Modal>
        <div className={styles["form"]}>
          <div className={styles["icon"]}>
            <IconComponent
              icon="AiFillCloseSquare"
              cursor="pointer"
              size="2rem"
              fill="yellow"
              onClick={() => navigate(-1)}
            />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik: any) => {
              return (
                <Form>
                  <h1>CREATE ADD</h1>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Title"
                    name="title"
                    placeholder="Title"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Description"
                    name="description"
                    placeholder="Description"
                  />

                  <label htmlFor="file" className={styles["label"]}>
                    Upload Image
                    <div>
                    <input type="file" onChange={(event:any)=>{
                      formik.setFieldValue("file",event.target.files[0])
                    }} className={styles["file"]}/>
                    </div>
                  </label>


                  <FormikControl
                    className={styles["file"]}
                    control="date"
                    label="Valid till date"
                    name="valid_till_date"
                    placeholder="Valid till date"
                  />
                  <button type="submit" disabled={!formik.isValid}>
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Modal>
    </>
  );
};
export default CreateAdvertistment;
