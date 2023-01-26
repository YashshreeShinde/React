
import { Outlet } from "react-router-dom";
import Header from "../../../Common Components/Header/Header";
import styles from "./AluminiLayout.module.scss";
import {IAluminiLayoutProps} from "./AluminiLayout.types";
import { AluminiHeaderArray } from './../../../Helphers/AluminiHeader';

const AluminiLayout = () => {
    return (
     <>
      <Header title="admin" navLinks={AluminiHeaderArray}/>
      <div className={styles["content"]}>
        <Outlet/>
     </div>
     </>
    )
  }
  export default AluminiLayout