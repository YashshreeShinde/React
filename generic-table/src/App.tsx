import React, { useReducer, useState } from 'react';

import Table from './Table/Table/Table';
import { handlePagination } from './Table/Reducers/PaginateReducer';
import { handleTableReducer, TABLE_ACTIONS } from './Table/Reducers/TableDataReducer';
import { useEffect } from 'react';
import { getTableData } from './services/services';
import { paginateAttributes,tableAttributes} from './Table/Table/Table attributes'
import { Route, Routes } from 'react-router-dom';
import Modal from './Modal';
import { tableStyle } from './Table/Table/TableStyles';

function App() {

  const paginationInitialState={
    pageNumber:0,
    pageSize:2
  }
  const tableInitialState={
    data:{},
    success:false,
    error:false,
    totalRecords:0
  }

  const [pagination,paginateDispatch]=useReducer(handlePagination,paginationInitialState)
  const [tableData,tableDispatch]=useReducer(handleTableReducer,tableInitialState)
  

    const getData=async()=>{
      const data=await getTableData(pagination);
      console.log(data)
      tableDispatch({type:TABLE_ACTIONS.FETCH_TABLE_DATA,payload:data})
    }

    useEffect(()=>{
      getData();    
    },[pagination])

    const tableProps:any={
      tableData:tableData?.data,
      tableAttributes:tableAttributes
      
    }
    const paginationProps:any={
      pageNumber:pagination.pageNumber,
      pageSize:pagination.pageSize,
      totalRecords:tableData?.totalRecords,
      paginateDispatch:paginateDispatch,
      paginateAttributes:paginateAttributes  
    }

    
      
  console.log(tableData?.data)
  return (
    <>
    <Routes>
      <Route path="/edit" element={<Modal modal="edit"/>}/>
      <Route path="/delete" element={<Modal modal="delete"/>}/>
    </Routes>
      {tableData?.success && <Table tableProps={tableProps} tableStyles={tableStyle} paginate={true} paginationProps={paginationProps}/>}
    </>
  );
}

export default App;
