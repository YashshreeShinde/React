import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "../AuthLayout/Styles/form-styles.module.scss";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextError from "../../Common Components/Form Components/Controls/TextError";
import { signUpAPI } from './../../Services/Auth.service';
import AppContext from "../../App/Context/AppProvider";

const SignUp = () => {
  const { setPopUp } = useContext(AppContext);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async(data: any) => {
    try{
    console.log(data)
    const response=await signUpAPI(data)
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
          <h1>SIGN UP</h1>
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
                label="Name"
                name="name"
                placeholder="Enter Name"
                fullWidth
              />
              <ErrorMessage component={TextError} name="name" />
              <Field
                className={styles["input"]}
                as={TextField}
                label="Email"
                name="email"
                placeholder="Enter Email"
                fullWidth
              />
              <ErrorMessage component={TextError} name="email" />
              <Field
                as={TextField}
                className={styles["input"]}
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
              />
              <ErrorMessage component={TextError} name="password" />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={styles["button"]}
                fullWidth
              >
                SIGN UP
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

export default SignUp;
