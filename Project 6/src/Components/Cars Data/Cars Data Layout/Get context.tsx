import GetTable from "../../../Common Components/Table/GetTable";
import { getCarsData } from "../../../Services/CarsTableData.service";

export const CarsTable: any = GetTable(
  {
    pagination: { pageNumber: 0, pageSize: 2, nextPage: false, prevPage: false },

    searchTerm: "",

    sortModel: [],

    filterModel: "",
  },
  getCarsData
);
