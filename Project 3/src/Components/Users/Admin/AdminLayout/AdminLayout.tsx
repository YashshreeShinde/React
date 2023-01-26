
import { Outlet } from "react-router-dom";
import Header from "../../../Common Components/Header/Header";
import { AdminHeaderArray } from "../../../Helphers/AdminHeader";
import styles from "./AdminLayout.module.scss";
import {IAdminLayoutProps} from "./AdminLayout.types";

const AdminLayout = () => {
    return (
      <>
      <Header title="admin" navLinks={AdminHeaderArray}/>
      <div className={styles["content"]}>
        <Outlet/>
     </div>
     </>
    )
  }
  export default AdminLayout