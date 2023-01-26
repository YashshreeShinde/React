
import React, { Component, useContext, useEffect } from "react";
import { ConsumersTable } from "../../../Admin/Get Contexts and Providers";
import Table from "../Table/Table/Table";


class SetTable extends Component<any,any> {
  getProps()
  {
    const { contextComponent}=this.props
    return contextComponent;
  }

  tableContext:any=this.props.contextComponent;
  static contextType = ConsumersTable.TableContext;
  context: React.ContextType<typeof ConsumersTable.TableContext>;
  
  constructor(props: any) {
    super(props);
    this.state = {
      pagination:{}
    };
  }
 
  componentDidMount(): void {
    const{ getData } =this.context;
    getData()
  }
  componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
    const { pagination, getData } =this.context;
    if (prevState.pagination != pagination) {
      getData();
      prevState.pagination=pagination
    }
  }
  
  getValues(){
    const{ pagination, paginateDispatch, tableData, getData } =this.context;
    return {pagination, paginateDispatch, tableData, getData};
  }
  render() {
    const {pagination, paginateDispatch, tableData}=this.getValues()
    const {tableAttributes,paginateAttributes,tableStyle,toPaginate}=this.props
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
}

export default SetTable;
