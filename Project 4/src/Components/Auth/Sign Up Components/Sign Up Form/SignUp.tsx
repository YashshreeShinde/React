import React, { useContext, useEffect } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik,Form } from "formik";
import styles from "../../Styles/form-styles.module.scss"

const SignUp = () => {
  const initialValues = {
    name: '',
    email:'',
    
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required'),
    email: Yup.string().required('Required')
  })

  const onSubmit = (values:any) => {
    console.log('Form data', values)
  }

  return (
    <>
    
    <div className={styles["form"]}>
    <header>
      <h1>SIGN UP</h1>
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
              type='input'
              label='Name'
              name='name'
              placeholder="Name"
            />
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
              placeholder="Email"
            />
            
            <button type='submit' disabled={!formik.isValid}>Submit</button>
            <Link to="/login">
            <span className={styles["center"]}>Back to Login</span>
            </Link>
          </Form>       
        )
      }}    
    </Formik>
    
    </div>
    </>
  )
};

export default SignUp;
