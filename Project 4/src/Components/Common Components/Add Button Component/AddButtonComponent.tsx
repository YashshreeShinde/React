import React, { Component } from "react";
import Button from "../Button/Button";

class AddButtonComponent extends Component {
  render() {
    const actionStyles = {
      color: "secondary",
    };
    return (
      <Button
        name="add"
        type="button"
        label="ADD"
        link="add"
        actionStyles={actionStyles}
      />
    );
  }
}

export default AddButtonComponent;
