import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../Controls/FormikControl";

const FormComponent = ({
  initialValues,
  validationSchema,
  onSubmit,
  title,
  formFields,

}: any) => {
  const initialValuesOfForm: any = {};

  for (let field of formFields) {
    initialValuesOfForm[field.name] = field.initialvalue;
  }

  const values=initialValues?initialValues:initialValuesOfForm

  return (
    <>
   
      <h1>{title}</h1>
      <Formik
        initialValues={values}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {

          return (
            <Form>
              {formFields.map((attributes: any) => {
                return <FormikControl key={attributes.name} {...attributes} />;
              })}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormComponent;
