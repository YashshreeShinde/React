import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import styles from "../AuthLayout/Styles/form-styles.module.scss";
import { Button, Grid, TextField } from "@mui/material";
import GoogleLogin from "react-google-login";
import AppContext from "../../App/Context/AppProvider";
import { APP_ACTIONS, AUTH, clientID } from "../../Constants/Constants";
import { Link, useNavigate } from "react-router-dom";
import TextError from "../../Common Components/Form Components/Controls/TextError";
import Typography from "@mui/material/Typography";
import { gapi } from "gapi-script";
import { loginAPI } from "../../Services/Auth.service";
import { modifyStore } from "../../Services/Utility";

const LoginForm = () => {
  const { app,appDispatch, setPopUp } = useContext(AppContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values: any) => {
    console.log("Form data", values);
    let responseData;
    try {
      const data = await loginAPI(values);
      console.log(data);
      responseData = data.data;
      setPopUp("success", responseData.message);
      modifyStore("token", responseData.token);

      appDispatch({
        type: APP_ACTIONS.LOGIN,
        username: values.username,
        token: responseData.token,
      });

      navigate("/home");
    } catch (error) {
      setPopUp("error", "PLEASE ENTER VALID CREDENTIALS");
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);
  
  const onSuccess = (response: any) => {
    console.log(response.accessToken);
    try{
    appDispatch({
      type: AUTH.LOGIN,
      token: response.accessToken,
    });
    navigate("/home");
    setPopUp("success","LOGIN SUCCESSFUL !")
  }
  catch(error)
  { 
    setPopUp("error","OPERATION FAILED !")
  }
    
   
  };

  const onFailure = (res: any) => {
    console.log(res);
    setPopUp("error","OPERATION FAILED !")
  };

  return (
    <>
      <Grid className={styles["form"]}>
        <header>
          <h1>LOGIN</h1>
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
                Login
              </Button>
              <Link to="/sign-up">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  fullWidth
                >
                  SIGN-UP
                </Button>
              </Link>
            </Form>
          )}
        </Formik>
        <div className={styles["google-login-btn"]}>
          <GoogleLogin
            clientId={clientID}
            buttonText="Login using Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            className={styles["google-login-btn"]}
          />
        </div>
        <Typography
          align="center"
          sx={{ padding: "0.20rem", cursor: "pointer" }}
          onClick={()=>navigate("/forgot-password")}
        >
          Forgot Password?
        </Typography>
      </Grid>
    </>
  );
};

export default LoginForm;
