import React, { Component } from 'react';
import SetTable from '../../../Common Components/Set Table Component/SetTable';
import Table from '../../../Common Components/Table/Table/Table/Table';
import { ConsumersTable, MetersTable } from '../../Get Contexts and Providers';
import { paginateAttributes, tableAttributes } from './Table/Table attributes';
import { tableStyle } from './Table/TableStyles';

class ViewMeters extends Component <any,any>{
  static contextType = MetersTable.TableContext;
  context: React.ContextType<typeof MetersTable.TableContext>;
  
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
          paginate={true}
          paginationProps={paginationProps}
        />
      )}
      
    </>
    );

  }
}

export default ViewMeters;