import React, { Component } from "react";
import { deleteAgents } from "../../../../Services/Admin.service";
import DeleteComponent from "../../../Common Components/Delete Component/DeleteComponent";
import { AgentsTable } from "../../Get Contexts and Providers";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import Modal from "../../../Common Components/Modal/Modal";

class DeleteAgent extends Component<any> {
  static contextType = AgentsTable.TableContext;
  context: React.ContextType<typeof AgentsTable.TableContext>;

  render() {
    const { navigate, location } = this.props.router;
    const data = location.state?.data;
    const { setPopUp } = this.context;
    return (
      <AgentsTable.TableConsumer>
        {(props: any) => {
          const onDelete = async () => {
            try {
              const response = await deleteAgents(data.id);
              navigate(-1);
              this.props.getData();
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
