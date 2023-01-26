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
    track:'',
    passout_year:'',
  }

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Required'),
    password: Yup.string().required('Required')
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
              type='username'
              label='Username'
              name='username'
              placeholder="Username"
            />
            <FormikControl
              control='input'
              type='email'
              label='Email'
              name='email'
              placeholder="Email"
            />
            <FormikControl
              control='input'
              type='text'
              label='Passout Year'
              name='passout_year'
              placeholder="Passout Year"
            />
            <FormikControl
              // control='select'
              control="input"
              type='select'
              label='Track'
              name='track'
            
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
          </Form>       
        )
      }}    
    </Formik>
    
    </div>
    </>
  )
};

export default SignUp;
