import React, { Component, ReactNode, useContext, useEffect } from "react";
import * as Yup from "yup";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik, Form } from "formik";
import styles from "./AddMeter.module.scss";
import Modal from "../../../Common Components/Modal/Modal";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import { MetersTable } from "../../Get Contexts and Providers";
import AppContext from "../../../App/Context/AppContext";
import { createMeter, updateMeter } from "../../../../Services/Admin.service";

class AddAndEditMeter extends Component<any, any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render(): ReactNode {
    const { setPopUp } = this.context;
    const { navigate, location } = this.props.router;
    const data = location.state?.data;
    const initialValues = {
      meterType: data ? data.meterType : "",
      readingsToBeTaken: data ? data.readingsToBeTaken : 0,
      faultTolerance: data ? data.faultTolerance : 0,
    };

    const validationSchema = Yup.object({
      meterType: Yup.string().required("Required"),
      readingsToBeTaken: Yup.string().required("Required"),
      faultTolerance: Yup.string().required("Required"),
    });

    const onSubmit = async (values: any, getData: any) => {
      let responseData: any;
      try {
        data
          ? (responseData = await createMeter(values))
          : (responseData = await updateMeter(data.id, values));
        setPopUp("success", responseData?.data.message);
        navigate(-1);
        getData();
      } catch (error) {
        navigate(-1);
        setPopUp("error", "OPERATION FAILED !");
      }
    };

    return (
      <MetersTable.TableConsumer>
        {(props: any) => {
          return (
            <>
              <Modal>
                <header>
                  <h1>{data ? "UPDATE METER" : "ADD METER"}</h1>
                </header>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => onSubmit(values, props.getData)}
                >
                  {(formik) => {
                    return (
                      <Form>
                        <FormikControl
                          control="input"
                          type="text"
                          label="Meter Type"
                          name="meterType"
                          placeholder="Meter Type"
                        />
                        <FormikControl
                          control="input"
                          type="number"
                          label="Readings To Be Taken"
                          name="readingsToBeTaken"
                          placeholder="Readings To Be Taken"
                        />
                        <FormikControl
                          control="input"
                          type="number"
                          label="Fault Tolerance"
                          name="faultTolerance"
                          placeholder="Fault Tolerance"
                        />

                        <button type="submit" disabled={!formik.isValid}>
                          Submit
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </Modal>
            </>
          );
        }}
      </MetersTable.TableConsumer>
    );
  }
}

export default withRouter(AddAndEditMeter);
