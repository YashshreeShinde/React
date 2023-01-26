import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { QUERY_OPTIONS_ACTIONS } from "../../../Constants/Constants";
import { CarsTable } from "../Cars Data Layout/Get context";

import { fieldValuesMap, setFilter } from "./FiltersMap";

const Filters = () => {
  const [field, setField] = useState("company");
  const [optionValue, setOptionValue] = useState("");

  const { queryOptionsDispatch } = useContext<any>(CarsTable.TableContext);

  const handleSetField = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setField(value);
  };

  const handleFilter = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    setOptionValue(selectedValue);

    const filterValue = setFilter(field, selectedValue);

    queryOptionsDispatch({
      type: QUERY_OPTIONS_ACTIONS.FILTER,
      filterValue: filterValue,
    });
  };

  const clearFilters = () => {
    queryOptionsDispatch({
      type: QUERY_OPTIONS_ACTIONS.FILTER,
      filterValue: "",
    });
  };

  let valuesArray = fieldValuesMap[field];
  useEffect(() => {
    valuesArray = fieldValuesMap[field];
  }, [optionValue, field]);

  return (
    <>
      <Box sx={{ width: 500, display: "flex"}}>
        <FormControl fullWidth sx={{ margin: "1rem" }}>
          <InputLabel id="category">Category</InputLabel>
          <Select
            defaultValue="brandName"
            labelId="category"
            value={field}
            label="Category"
            onChange={handleSetField}
          >
            <MenuItem value="company">Company</MenuItem>
            <MenuItem value="colour">Color</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ margin: "1rem" }}>
          <InputLabel id="options">Options</InputLabel>
          <Select
            defaultValue="Choose"
            labelId="options"
            id="options"
            value={optionValue}
            label="Options"
            onChange={handleFilter}
          >
            {valuesArray.map(({ text, value }: any) => {
              return (
                <MenuItem key={text} value={value}>
                  {text}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          fullWidth
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </Box>
    </>
  );
};

export default Filters;
