import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "../AuthLayout/Styles/form-styles.module.scss";
import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TextError from "../../Common Components/Form Components/Controls/TextError";
import { forgotPassword } from './../../Services/Auth.service';
import AppContext from "../../App/Context/AppProvider";

const ForgotPassword = () => {
  const { setPopUp } = useContext(AppContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });

  const onSubmit = async(data: any) => {
    try{
    const response=await forgotPassword(data)
    console.log(response);
    navigate("/login");
    setPopUp("success","SIGN UP SUCCESSFUL!")
    }
    catch(error){
      setPopUp("error","SIGN UP OPERATION FAILED !")
    }
  };

  return (
    <>
      <Grid className={styles["form"]}>
        <header>
          <h1>FORGOT PASSWORD</h1>
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
                label="Email"
                name="email"
                placeholder="Enter Email"
                fullWidth
              />
              <ErrorMessage component={TextError} name="email" />
              
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={styles["button"]}
                fullWidth
              >
                SUBMIT
              </Button>
              <Button
                type="button"
                color="secondary"
                variant="contained"
                className={styles["button"]}
                fullWidth
                onClick={()=>navigate("/login")}
              >
                BACK TO LOGIN
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </>
  );
};

export default ForgotPassword;
