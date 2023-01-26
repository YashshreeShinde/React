import React, { Component } from "react";
import Button from "../Button/Button";
import styles from "./DeleteComponent.module.scss";
import { useNavigate } from "react-router-dom";
import { withRouter } from "../Routes Component/RoutesComponent";

class DeleteComponent extends Component<any> {
  render() {
    const { text, onDelete,router:{navigate} } = this.props;
    
    return (
      <div className={styles["delete-modal"]}>
        <span>{`Are you sure you want to delete the ${text} ?`}</span>
        <div>
          <Button
            type="button"
            label="DELETE"
            name="delete"
            onClick={onDelete}
            actionStyles={{ color: "danger" }}
          />
          <Button
            type="button"
            label="CANCEL"
            name="delete"
            onClick={() => navigate(-1)}
            actionStyles={{ color: "primary" }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(DeleteComponent);
