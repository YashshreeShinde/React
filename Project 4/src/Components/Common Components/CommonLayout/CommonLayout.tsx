import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import AddButtonComponent from "../Add Button Component/AddButtonComponent";
import SideBar from "../Sidebar/SideBar";
import styles from "./CommonLayout.module.scss";

class CommonLayout extends Component<any> {
  render() {
    const { Provider, ViewComponent, title } = this.props;
    return (
      <>
        <Provider>
          <div className={styles["header"]}>
            <div>
            <AddButtonComponent/>
            </div>
          </div>
          <div className={styles["layout"]}>
            <Outlet />
            <div className={styles["table"]}>
              <ViewComponent />
            </div>
          </div>
        </Provider>
      </>
    );
  }
}

export default CommonLayout;
