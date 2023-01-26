export interface ITableAttributesProps {
  tableData: any;
  tableAttributes: any;
}
export interface IPaginationProps {
  pageNumber: number;
  pageSize: number;
  totalRecords: number;
  paginateAttributes: {
    options: number[];
  };
}

export interface IQueryInitialState {
  pagination: {
    pageNumber: number;
    pageSize: number;
    nextPage: boolean;
    prevPage: boolean;
  };

  searchTerm: string;

  sortModel: [];

  filterModel: string;
}
export interface ITableProps {
  tableProps: ITableAttributesProps;
  paginationProps: IPaginationProps;
  queryOptionsDispatch: Function;
}
export interface ISetTableProps {
  contextComponent: any;
  tableAttributes: ITableAttributesProps;
  paginateAttributes: {
    options: number[];
  };
}
