import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect, useReducer, useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { reducer } from "./BarChart.reducer";
import { DATES } from "../../../../Constants/Constants";
import { getDateWiseData } from "./../../../../Services/Reports";
import styles from "./BarChart.module.scss"

const BarChartComponent = () => {
  const initialState = {
    startDate: "2008-01-01",
    endDate: "2013-01-01",
  };

  const [chartData, setChartData] = useState();
  const [dates, datesDispatch] = useReducer(reducer, initialState);

  const getChartData = async () => {
    const data = await getDateWiseData(dates);
    setChartData(data);
  };

  useEffect(() => {
    getChartData();
  }, [dates]);
  return (
    <>
      <h1 className={styles["heading"]}>Cars Data</h1>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart
          width={500}
          height={900}
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: 200,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="carCount" fill="purple" />
        </BarChart>
      </ResponsiveContainer>
      <LocalizationProvider dateAdapter={AdapterMoment} className={styles["date"]}>
        <DatePicker
          label="Start Date"
          value={dates.startDate}
          inputFormat="YYYY/MM/DD"
          className={styles["date"]}
          onChange={(newValue) => {
            datesDispatch({
              type: DATES.START_DATE,
              payload: { startDate: newValue },
            });
          }}
          
          renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
          label="End Date"
          value={dates.endDate}
          className={styles["date"]}
          onChange={(newValue) => {
            datesDispatch({
              type: DATES.END_DATE,
              payload: { endDate: newValue },
            });
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default BarChartComponent;
