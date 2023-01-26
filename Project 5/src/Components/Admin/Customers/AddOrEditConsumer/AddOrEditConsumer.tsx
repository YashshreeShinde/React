import React, { Component, ReactNode, useContext, useEffect } from "react";
import * as Yup from "yup";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik, Form } from "formik";
import Modal from "../../../Common Components/Modal/Modal";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import { ConsumersTable } from "../../Get Contexts and Providers";
import AppContext from "../../../App/Context/AppContext";
import { addConsumer, updateConsumerData } from "../../../../Services/Admin.service";

class AddOrEditConsumer extends Component<any, any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render(): ReactNode {
    const { setPopUp } = this.context;
    const { navigate, location } = this.props.router;

    const data = location.state?.data;
    const initialValues = {
      consumerName: data ? data.consumerName:"",
      consumerEmail: data ? data.consumerEmail:"",
      consumerArea:data ? data.consumerArea:"",
    };

    const validationSchema = Yup.object({
      consumerName: Yup.string().required("Required"),
      consumerEmail: Yup.string().required("Required"),
      consumerArea:Yup.string().required("Required"),
    });

    const onSubmit = async (values: any, getData: any) => {
      let responseData: any;
      try {
        data
          ? responseData = await updateConsumerData (data.id, values)
          : responseData = await addConsumer(values) ;
         
        setPopUp("success", responseData?.data.message);
        navigate(-1);
        getData();
      } catch (error) {
        navigate(-1);
        setPopUp("error", "OPERATION FAILED !");
      }
    };

    return (
      <ConsumersTable.TableConsumer>
        {(props: any) => {
          return (
            <>
              <Modal>
              
                  <header>
                    <h1>{data ? "UPDATE CONSUMER" : "ADD CONSUMER"}</h1>
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
                            label="Name"
                            name="consumerName"
                            placeholder="Name"
                          />
                          <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="consumerEmail"
                            placeholder="Email"
                          />
                          <FormikControl
                            control="input"
                            type="text"
                            label="Area"
                            name="consumerArea"
                            placeholder="Area"
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
      </ConsumersTable.TableConsumer>
    );
  }
}

export default withRouter(AddOrEditConsumer);


