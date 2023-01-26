import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import { ConsumersHeader } from "../../../../Helpers/ConsumersHeader";
import SubPageHeader from "../../../Common Components/SubPage Header/SubPageHeader";

export default class ConsumersLayout extends Component {
  render() {
    return (
      <>
        <SubPageHeader title={"CONSUMERS"} navLinks={ConsumersHeader} />
        <Outlet />
      </>
    );
  }
}
