import React, { Component } from "react";
import { deleteAgents } from "../../../../Services/Admin.service";
import DeleteComponent from "../../../Common Components/Delete Component/DeleteComponent";
import { MetersTable } from "../../Get Contexts and Providers";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import Modal from "../../../Common Components/Modal/Modal";

class DeleteMeter extends Component<any> {
  static contextType = MetersTable.TableContext;
  context: React.ContextType<typeof MetersTable.TableContext>;

  render() {
    const { navigate, location } = this.props.router;
    const data = location.state?.data;
    const { setPopUp } = this.context;
    return (
      <MetersTable.TableConsumer>
        {(props: any) => {
          const onDelete :any= async () => {
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
      </MetersTable.TableConsumer>
    );
  }
}
export default withRouter(DeleteMeter);
