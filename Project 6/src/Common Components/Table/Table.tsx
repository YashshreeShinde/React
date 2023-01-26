import {
  DataGrid,
  GridSearchIcon,
  GridSortModel,
} from "@mui/x-data-grid";
import React from "react";
import { InputBase, Paper } from "@mui/material";
import styles from "./Table.module.scss";
import { debounce } from "./DebounceFunction";

import { QUERY_OPTIONS_ACTIONS } from "../../Constants/Constants";
import { ITableProps } from "./Table.types";
import Filters from "../../Components/Cars Data/Filters/Filters";

const Table = ({ paginationProps, tableProps, queryOptionsDispatch }: ITableProps) => {
  const {
    tableAttributes: { columns },
    tableData,
  } = tableProps;
  const {
    pageNumber,
    pageSize,
    totalRecords,
    paginateAttributes,
  } = paginationProps;
  const { options } = paginateAttributes;

  const handleChangePage = (newPage: number) => {
    queryOptionsDispatch({
      type: QUERY_OPTIONS_ACTIONS.NEW_PAGE,
      payload: { newPage: newPage },
    });
  };

  const handleChangeRowsPerPage = (pageSize: number) => {
    queryOptionsDispatch({
      type: QUERY_OPTIONS_ACTIONS.CHANGE_PAGE_SIZE,
      selectedValue: pageSize,
    });
  };

  const updateSearchTerm = debounce((term: string) => {
    queryOptionsDispatch({
      type: QUERY_OPTIONS_ACTIONS.SEARCH,
      searchTerm: term,
    });
  }, 250);

  const handleSortModelChange = (sortModel: GridSortModel) => {
    queryOptionsDispatch({
      type: QUERY_OPTIONS_ACTIONS.SORT,
      sortModel: sortModel,
    });
  };


  return (
    <Paper sx={{ height: "60vh", margin: "auto",width:"90%",fontSize:"1rem"}}>
      <Filters/>
      <InputBase
        placeholder="Search"
        sx={{ padding: "1rem",width:"100%",border:"2px solid" }}
        onChange={(e) => updateSearchTerm(e.target.value)}
        startAdornment={<GridSearchIcon />}
      />
      <DataGrid
        className={styles["grid"]}
        rowsPerPageOptions={options}
        getRowId={(row: any) => row._id}
        rowCount={totalRecords}
        {...tableData}
        columns={columns}
        rows={tableData}

        
        pageSize={pageSize}
        page={pageNumber}
        paginationMode="server"
        onPageChange={handleChangePage}
        onPageSizeChange={handleChangeRowsPerPage}

        sx={{
          backgroundColor:"lightgray",
          color:"black",
          border:2,
          fontSize:"1.2rem"
        }}

        sortingMode="server"
        onSortModelChange={handleSortModelChange}
      />
    </Paper>
  );
};

export default Table;
