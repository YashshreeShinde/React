import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { LoginFieldsData } from "./LoginFieldsData";
import styles from "./LoginForm.module.scss";
import AuthContext from "../../Context/AuthProvider";
import { LOGIN_ACTIONS } from "./../../Context/Auth.reducer";
import { useNavigate } from "react-router-dom";
import { PopUpContext } from "./../../../Common Components/Pop up/PopUpProvider";
import FormComponent from "../../../Common Components/Form Components/FormComponent/FormComponent";
import { modifyStore, ROLE_PAGE_MAP } from "../../../../Utils/Utility";
import loginAPI from "../../../../Services/Login.service";

const LoginForm = () => {
  const { authDispatch } = useContext(AuthContext);
  const { setPopUp } = useContext(PopUpContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required("Required !"),
    password: Yup.string().required("Required !"),
  });

  const onSubmit: any = async (values: any) => {
    let responseData;
    try {
      const data = await loginAPI(values);
      responseData = data.data;
      setPopUp("success", responseData.message);
      const route = ROLE_PAGE_MAP[responseData.roles];

      modifyStore("token", responseData.token);
      modifyStore("role", responseData.role);
      navigate(route);
      authDispatch({
        type: LOGIN_ACTIONS.LOGIN,
        credentials: values,
        role: responseData.roles,
        token: responseData.token,
      });
    } catch (error) {
      setPopUp("error", "PLEASE ENTER VALID CREDENTIALS");
    }
  };
  return (
    <>
      <div className={styles["form"]}>
        <FormComponent
          title="LOGIN FORM"
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          formFields={LoginFieldsData}
          backButton={false}
        />

        <span className={styles["forgot-password"]}>Forgot Password?</span>
      </div>
    </>
  );
};

export default LoginForm;
