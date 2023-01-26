import React, { Component, ReactNode, useContext, useEffect } from "react";
import * as Yup from "yup";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik, Form } from "formik";
import styles from "./UpdateMeter.module.scss";
import Modal from "../../../Common Components/Modal/Modal";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import { MetersTable } from "../../Get Contexts and Providers";
import AppContext from "../../../App/Context/AppContext";
import { createMeter, updateMeter } from "../../../../Services/Admin.service";

class UpdateMeter extends Component<any, any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render(): ReactNode {

    const {  setPopUp  } = this.context;
    const { navigate,location } = this.props.router;
    const data=location.state?.data;
    
    const initialValues = {
      meterType:data.meterType,
      readingsToBeTaken:data.readingsToBeTaken,
      faultTolerance: data.faultTolerance,
    };

    const validationSchema = Yup.object({
      meterType: Yup.string().required("Required"),
      readingsToBeTaken: Yup.string().required("Required"),
      faultTolerance: Yup.string().required("Required"),
    });

    const onSubmit = async (values: any,getData:any) => {
      navigate(-1);
      setPopUp("success","ok")
      let responseData:any;
      try {
        const response = await updateMeter(data.id,values);
        console.log(response);
        responseData=response;
        setPopUp("success", responseData?.data.message);
        navigate(-1);
        getData();
      } catch (error) {
        navigate(-1);
        setPopUp("error", "UPDATION ON METER FAILED !");
      }
    };

    return (
      <MetersTable.TableConsumer>
        {(props: any) => {
          return (
            <>
              <Modal>
                <div className={styles["form"]}>
                  <header>
                    <h1>ADD METER</h1>
                  </header>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>onSubmit(values,props.getData)}
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

                          <button
                            type="submit"
                            disabled={!formik.isValid}    
                          >
                            Submit
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </Modal>
            </>
          );
        }}
      </MetersTable.TableConsumer>
    );
  }
}

export default withRouter(UpdateMeter);
