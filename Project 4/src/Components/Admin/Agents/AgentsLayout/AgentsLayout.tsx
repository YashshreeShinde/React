import React, { Component } from "react";
import AddButtonComponent from "../../../Common Components/Add Button Component/AddButtonComponent";
import CommonLayout from "../../../Common Components/CommonLayout/CommonLayout";
import { AgentsTable } from "../../Get Contexts and Providers";
import styles from "./AgentsLayout.module.scss";
import ViewAgents from "./../ViewAgents/ViewAgents";
import SubPageHeader from "../../../Common Components/SubPage Header/SubPageHeader";

class AgentsLayout extends Component {
  render() {
    return (
      <>
        <SubPageHeader title={"AGENTS"} />
        <CommonLayout
          Provider={AgentsTable.TableProvider}
          title="Agent"
          ViewComponent={ViewAgents}
        />
      </>
    );
  }
}

export default AgentsLayout;
