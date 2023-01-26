import { Formik, Form } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import FormikControl from "../../../../../Common Components/Form Components/Controls/FormikControl";
import Modal from "../../../../../Common Components/Modal/Modal";
import styles from "./EditAlumini.module.scss";
import * as Yup from "yup";
import { useContext } from "react";
import { PopUpContext } from "../../../../../Common Components/Pop up/PopUpProvider";
import IconComponent from "../../../../../Common Components/Icon Component/IconComponent";

const EditAlumini = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  const navigate = useNavigate();
  const { setPopUp } = useContext(PopUpContext);

  const initialValues = {
    name: "",
    year: "",
    track: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    year: Yup.string().required("Required"),
    track: Yup.string().required("Required"),
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
                  <h1>EDIT</h1>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Name"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Year"
                    name="year"
                    placeholder="Year"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    label="Track"
                    name="track"
                    placeholder="Track"
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
export default EditAlumini;
