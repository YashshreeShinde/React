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

const TableContext=createContext<any>({});

  const TableProvider = ({children}:any) => {
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
        <TableContext.Provider value={{pagination,paginateDispatch,getData,tableData,tableDispatch}}>
            {children}
        </TableContext.Provider>
      )
  };

  return {TableProvider,TableContext};
};

export default GetTable;

