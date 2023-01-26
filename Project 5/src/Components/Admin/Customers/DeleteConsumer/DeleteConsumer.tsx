import React, { Component } from "react";
import { deleteConsumer } from "../../../../Services/Admin.service";
import DeleteComponent from "../../../Common Components/Delete Component/DeleteComponent";
import { ConsumersTable } from "../../Get Contexts and Providers";
import { withRouter } from "../../../Common Components/Routes Component/RoutesComponent";
import Modal from "../../../Common Components/Modal/Modal";
import AppContext from "../../../App/Context/AppContext";

class DeleteConsumer extends Component<any, any> {
  static contextType = AppContext;
  context: React.ContextType<typeof AppContext>;

  render() {
    const { setPopUp } = this.context;

    const { navigate, location } = this.props.router;
    const data = location.state?.rowData;

    return (
      <ConsumersTable.TableConsumer>
        {(props: any) => {
          const { getData } = props;
          const onDelete = async () => {
            try {
              const response = await deleteConsumer(data.id);
              getData();
              setPopUp("success", response.data.message);
              navigate(-1);
            } catch (error) {
              setPopUp("error", "Please Try Again");
            }
          };
          return (
            <Modal>
              <DeleteComponent text="Consumer" onDelete={onDelete} />
            </Modal>
          );
        }}
      </ConsumersTable.TableConsumer>
    );
  }
}
export default withRouter(DeleteConsumer);
