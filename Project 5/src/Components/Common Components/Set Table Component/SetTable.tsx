
import React, { useContext, useEffect } from "react";
import Table from "../Table/Table/Table/Table";


const SetTable = ({ contextComponent,tableAttributes,paginateAttributes,tableStyle,toPaginate}: any) => {
  const { pagination, paginateDispatch, tableData, getData } =
    useContext<any>(contextComponent);

    useEffect(() => {
        getData();
      }, [pagination]);
    
      const tableProps: any = {
        tableData: tableData?.data,
        tableAttributes: tableAttributes,
      };
      const paginationProps: any = {
        pageNumber: pagination.pageNumber,
        pageSize: pagination.pageSize,
        totalRecords: tableData?.totalRecords,
        paginateDispatch: paginateDispatch,
        paginateAttributes: paginateAttributes,
      };
      console.log(tableData?.data);
      return (
        <>
          {tableData?.success && (
            <Table
              tableProps={tableProps}
              tableStyles={tableStyle}
              paginate={toPaginate}
              paginationProps={paginationProps}
            />
          )}
        </>
      );
};

export default SetTable;
