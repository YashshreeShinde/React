import React, { Component } from "react";
import { deleteMeters } from "../../../../Services/Admin.service";
import DeleteComponent from "../../../Common Components/Delete Component/DeleteComponent";
import { MetersTable } from "../../Get Contexts and Providers";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import Modal from "../../../Common Components/Modal/Modal";
import AppContext from "../../../App/Context/AppContext";

class DeleteMeter extends Component<any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render() {
    const { navigate, location } = this.props.router;
    const data = location.state?.data;
    const { setPopUp } = this.context;
    return (
      <MetersTable.TableConsumer>
        {(props: any) => {
          const{getData}=props;
          const onDelete :any= async () => {
            try {
              const response = await deleteMeters(data.id);
              navigate(-1);
              setPopUp("success", response.data.message);
              getData();
            } catch (error) {
              setPopUp("error", "Please Try Again");
            }
          };
          return (
            <Modal>
              <DeleteComponent text="Meter" onDelete={onDelete} />
            </Modal>
          );
        }}
      </MetersTable.TableConsumer>
    );
  }
}
export default withRouter(DeleteMeter);
