import React, { useContext, useEffect } from "react";
import Table from "./Table";
import { IPaginationProps, ISetTableProps, ITableAttributesProps } from "./Table.types";

const SetTable = ({
  contextComponent,
  tableAttributes,
  paginateAttributes,
}: ISetTableProps) => {

  const { queryOptions, queryOptionsDispatch, tableData, getData } =
    useContext<any>(contextComponent);

  const { pageNumber, pageSize } = queryOptions.pagination;

  useEffect(() => {
    getData();
  }, [queryOptions]);

  const tableProps: ITableAttributesProps = {
    tableData: tableData?.data,
    tableAttributes: tableAttributes,
  };
  const paginationProps: IPaginationProps = {
    pageNumber: pageNumber,
    pageSize: pageSize,
    totalRecords: tableData?.totalRecords,
    paginateAttributes: paginateAttributes,
  };
  return (
    <>
      {tableData?.success && (
        <Table
          tableProps={tableProps}
          paginationProps={paginationProps}
          queryOptionsDispatch={queryOptionsDispatch}
        />
      )}
    </>
  );
};

export default SetTable;
