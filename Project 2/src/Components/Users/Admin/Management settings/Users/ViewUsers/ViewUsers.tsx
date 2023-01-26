import React, { useEffect, useReducer } from 'react'
import { getTableData } from '../../../../../Common Components/Table/services/services';
import { handlePagination } from '../../../../../Common Components/Table/Table/Reducers/PaginateReducer';
import Table from '../../../../../Common Components/Table/Table/Table/Table';
import { handleTableReducer, TABLE_ACTIONS } from './Table/Reducers/TableDataReducer';
import { paginateAttributes, tableAttributes } from './Table/Table/Table attributes';
import { tableStyle } from './Table/Table/TableStyles';


const ViewCustomers = () => {
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
          {tableData?.success && <Table tableProps={tableProps} tableStyles={tableStyle} paginate={true} paginationProps={paginationProps}/>}
        </>
      );
}

export default ViewCustomers