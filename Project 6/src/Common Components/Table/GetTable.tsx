import { createContext, useReducer } from "react";
import { handleQueryOptions } from "./Reducers/QueryOptionsReducer";
import { handleTableReducer, TABLE_ACTIONS } from "./Reducers/TableDataReducer";
import { IQueryInitialState } from "./Table.types";

const GetTable = (

  queryOptionsInitialState: IQueryInitialState,
  fetchFuntion:Function,

) => {
  const tableInitialState = {
    data: {},
    success: false,
    error: false,
    totalRecords: 0,
  };

const TableContext=createContext<any>({});

  const TableProvider = ({children}:any) => {
    const [queryOptions, queryOptionsDispatch] = useReducer(
      handleQueryOptions,
      queryOptionsInitialState
    );
    const [tableData, tableDispatch] = useReducer(
      handleTableReducer,
      tableInitialState
    );

    const getData = async () => {
      const { data ,totalRecords} = await fetchFuntion(queryOptions);
      tableDispatch({ type: TABLE_ACTIONS.FETCH_TABLE_DATA, payload: {data,totalRecords}});
    };

    return (
        <TableContext.Provider value={{queryOptions,queryOptionsDispatch,getData,tableData,tableDispatch}}>
            {children}
        </TableContext.Provider>
      )
  };

  return {TableProvider,TableContext};
};

export default GetTable;

