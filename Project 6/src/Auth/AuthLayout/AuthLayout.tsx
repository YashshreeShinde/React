import React from "react";
import styles from "./Styles/Layout.module.scss"
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import AuthImage from "./Image/AuthImage"

const AuthLayout = ({Component}:any) => {
  return (
    <>
    <Grid className={styles["login-page"]}>
      <Paper className={styles["layout"]}>
        <AuthImage/>
        <Component/>
      </Paper>
    </Grid>
    </>
  );
};

export default AuthLayout;
