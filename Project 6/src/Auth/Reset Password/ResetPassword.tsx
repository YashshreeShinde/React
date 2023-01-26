import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "../AuthLayout/Styles/form-styles.module.scss";
import {
  Button,
  Grid,
  TextField,
} from "@mui/material";
import TextError from "../../Common Components/Form Components/Controls/TextError";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../App/Context/AppProvider";
import { resetPasswordAPI } from "../../Services/Auth.service";

const ResetPassword = () => {
  const { token } = useParams();
  console.log(token);

  const { setPopUp } = useContext(AppContext);
  const navigate = useNavigate();

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const onSubmit = async(data: any) => {
    console.log(data.password);
    try{
      const response=await resetPasswordAPI(data.password,token);
      console.log(response);
      navigate("/login");
      setPopUp("success",response.data.message)
    }catch(error){
      setPopUp("error","OPERATION FAILED !")
    }
  };

  return (
    <>
      <Grid className={styles["form"]}>
        <header>
          <h1>RESET PASSWORD</h1>
        </header>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                className={styles["input"]}
                as={TextField}
                type="password"
                label="Password"
                name="password"
                placeholder="Enter Password"
                fullWidth
                required
              />
              <ErrorMessage component={TextError} name="password" />
              <Field
                as={TextField}
                className={styles["input"]}
                label="ConfirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                fullWidth
                required
              />
              <ErrorMessage component={TextError} name="confirmPassword" />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={styles["button"]}
                fullWidth
              >
                SUBMIT
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};

export default ResetPassword;
