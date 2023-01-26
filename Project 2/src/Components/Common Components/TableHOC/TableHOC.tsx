import { createContext, useReducer } from "react";
import { getCustomersData } from "../../../Services/Admin.service";
import { handlePagination } from "../Table/Table/Reducers/PaginateReducer";
import { handleTableReducer, TABLE_ACTIONS } from "./Reducers/TableDataReducer";

const GetTable = (

  paginationInitialState: any,
  fetchFuntion: any,

) => {
  const tableInitialState = {
    data: {},
    success: false,
    error: false,
    totalRecords: 0,
  };

const Context=createContext<any>({});

  const TableComponent = ({children}:any) => {
    const [pagination, paginateDispatch] = useReducer(
      handlePagination,
      paginationInitialState
    );
    const [tableData, tableDispatch] = useReducer(
      handleTableReducer,
      tableInitialState
    );

    const getData = async () => {
      const { data } = await fetchFuntion(pagination);
      console.log(data);
      tableDispatch({ type: TABLE_ACTIONS.FETCH_TABLE_DATA, payload: data });
    };

    return (
        <Context.Provider value={{pagination,paginateDispatch,getData,tableData,tableDispatch}}>
            {children}
        </Context.Provider>
      )
  };

  return {TableComponent,Context};
};

export default GetTable;

