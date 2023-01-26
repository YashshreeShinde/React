import { Box, Paper } from "@mui/material";
import React from "react";
import BarChartComponent from "../Charts/Bar Chart/BarChart";

const ReportsLayout = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>REPORTS</h1>
      <Box
        sx={{
          width: "100",
          height: "80vh",
          margin:"4rem"
        }}
      >
        <Paper sx={{ margin: "1rem" }}>
          <BarChartComponent />
        </Paper>
        {/* <Paper sx={{ margin: "1rem" }}>
          <BarChartComponent />
        </Paper> */}
      </Box>
    </>
  );
};

export default ReportsLayout;
