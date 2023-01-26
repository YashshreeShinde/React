import { Form, Formik } from "formik";
import React, { Component } from "react";
import FormikControl from "../Controls/FormikControl";

class FormComponent extends Component<any> {
  render(): React.ReactNode {
    const { initialValues, validationSchema, onSubmit, title, formFields } =
      this.props;
    const initialValuesOfForm: any = {};

    for (let field of formFields) {
      initialValuesOfForm[field.name] = field.initialvalue;
    }

    const values = initialValues ? initialValues : initialValuesOfForm;

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
                  return (
                    <FormikControl key={attributes.name} {...attributes} />
                  );
                })}
                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      </>
    );
  }
}

export default FormComponent;
