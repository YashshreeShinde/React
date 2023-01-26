import React, { Component, ReactNode, useContext, useEffect } from "react";
import * as Yup from "yup";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik, Form } from "formik";
import styles from "../../Styles/form-styles.module.scss";
import { PopUpContext } from "../../../Common Components/Pop up/PopUpProvider";
import loginAPI from "../../../../Services/Login.service";
import {
  getStore,
  modifyStore,
  ROLE_PAGE_MAP,
} from "../../../../Utils/Utility";
import { APP_ACTIONS } from "../../../App/Context/App.reducer";
import { Link, Navigate } from "react-router-dom";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import AppContext from "../../../App/Context/AppContext";

class LoginForm extends Component<any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render(): ReactNode {
    const { appDispatch, setPopUp } = this.context;
    const { navigate } = this.props.router;
    const initialValues = {
      username: "",
      password: "",
    };

    const validationSchema = Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    });

    const onSubmit = async (values: any) => {
      console.log("Form data", values);
      let responseData;
      try {
        const data = await loginAPI(values);
        console.log(data)
        responseData = data.data;
        setPopUp("success", responseData.message);
        modifyStore("token", responseData.token);
        modifyStore("role", ROLE_PAGE_MAP[responseData.roles]);

        console.log(getStore("role"));
        appDispatch({
          type: APP_ACTIONS.LOGIN,
          username: values.username,
          role: ROLE_PAGE_MAP[responseData.roles],
          token: responseData.token,
        });

        navigate("/home");
      } catch (error) {
        setPopUp("error", "PLEASE ENTER VALID CREDENTIALS");
      }
    };

    return (
      <>
        <div className={styles["form"]}>
          <header>
            <h1>LOGIN</h1>
          </header>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <FormikControl
                    control="input"
                    type="text"
                    label="Username"
                    name="username"
                    placeholder="Username"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Password"
                  />

                  <button type="submit" disabled={!formik.isValid}>
                    Submit
                  </button>
                  <span className={styles["center"]}>Forgot Password?</span>
                  <span className={styles["center"]}>New User?</span>
                  <Link to="/sign-up">
                    <button type="button" className={styles["sign-up"]}>
                      SIGN UP
                    </button>
                  </Link>
                </Form>
              );
            }}
          </Formik>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
