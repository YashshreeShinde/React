import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik,Form } from "formik";
import styles from "../../Styles/form-styles.module.scss"
import { PopUpContext } from "../../../Common Components/Pop up/PopUpProvider";

const LoginForm = () => {

  const {setPopUp}=useContext(PopUpContext)
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = (values:any) => {
    console.log('Form data', values);
    setPopUp("success","ok")
  }

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
      {formik => {
        return (
          <Form>
            
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
              placeholder="Email"
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
              placeholder="Password"
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
            <span className={styles["center"]}>Forgot Password?</span>
            <span className={styles["center"]}>New User?</span>
            <Link to="/sign-up">
            <button type='button' className={styles["sign-up"]}>SIGN UP</button>
            </Link>
            
          </Form>       
        )
      }}    
    </Formik>
    
    </div>
    </>
  )
};

export default LoginForm;
