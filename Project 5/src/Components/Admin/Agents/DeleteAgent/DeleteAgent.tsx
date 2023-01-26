import React, { Component } from "react";
import { deleteAgents } from "../../../../Services/Admin.service";
import DeleteComponent from "../../../Common Components/Delete Component/DeleteComponent";
import { AgentsTable } from "../../Get Contexts and Providers";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import Modal from "../../../Common Components/Modal/Modal";
import AppContext from "../../../App/Context/AppContext";

class DeleteAgent extends Component<any,any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render() {
    const { setPopUp } = this.context;

    const { navigate, location } = this.props.router;
    const data = location.state?.data;

    return (
      <AgentsTable.TableConsumer>
        {(props: any) => {
          const {getData}=props;
          const onDelete = async () => {
            try {
              const response = await deleteAgents(data.userId);
              navigate(-1);
              getData();
              setPopUp("success", response.data.message);
            } catch (error) {
              setPopUp("error", "Please Try Again");
            }
          };
          return (
            <Modal>
              <DeleteComponent text="Agent" onDelete={onDelete} />
            </Modal>
          );
        }}
      </AgentsTable.TableConsumer>
    );
  }
}
export default withRouter(DeleteAgent);
