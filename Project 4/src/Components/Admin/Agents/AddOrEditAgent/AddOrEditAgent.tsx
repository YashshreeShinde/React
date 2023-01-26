import React, { Component, ReactNode, useContext, useEffect } from "react";
import * as Yup from "yup";
import FormikControl from "../../../Common Components/Form Components/Controls/FormikControl";
import { Formik, Form } from "formik";
import Modal from "../../../Common Components/Modal/Modal";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import { AgentsTable, MetersTable } from "../../Get Contexts and Providers";
import AppContext from "../../../App/Context/AppContext";
import {
  createMeter,
  updateAgentData,
} from "../../../../Services/Admin.service";

class AddOrEditAgent extends Component<any, any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render(): ReactNode {
    const { setPopUp } = this.context;
    const { navigate, location } = this.props.router;
    console.log(location);
    const data = location.state?.data;
    const initialValues = {
      name: data === undefined ? "" : data.name,
      email: data === undefined ? "" : data.email,
    };

    const validationSchema = Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
    });

    const onSubmit = async (values: any, getData: any) => {
      let responseData: any;
      try {
        data
          ? (responseData = await createMeter(values))
          : (responseData = await updateAgentData(data.id, values));
        setPopUp("success", responseData?.data.message);
        navigate(-1);
        getData();
      } catch (error) {
        navigate(-1);
        setPopUp("error", "OPERATION FAILED !");
      }
    };

    return (
      <AgentsTable.TableConsumer>
        {(props: any) => {
          return (
            <>
              <Modal>
              
                  <header>
                    <h1>{data ? "UPDATE AGENT" : "ADD AGENT"}</h1>
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
                            name="name"
                            placeholder="Name"
                          />
                          <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"
                            placeholder="Email"
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
      </AgentsTable.TableConsumer>
    );
  }
}

export default withRouter(AddOrEditAgent);
