import { createContext, useReducer } from "react";
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
const TableConsumer=TableContext.Consumer;

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
      tableDispatch({ type: TABLE_ACTIONS.FETCH_TABLE_DATA, payload: data });
    };

    return (
        <TableContext.Provider value={{pagination,paginateDispatch,getData,tableData,tableDispatch}}>
            {children}
        </TableContext.Provider>
      )
  };

  return {TableProvider,TableContext,TableConsumer};
};

export default GetTable;

