import { getTableData } from "../../Services/Admin.service";
import GetTable from "../Common Components/Table Factory Component(with Context and Provider)/TableHOC";

export const NewRegistrationsData=GetTable(
    {
        pageNumber:1,
        pageSize:2
      },
      getTableData
)


export const ExistingAluminTable=GetTable(
  {
      pageNumber:1,
      pageSize:2
    },
    getTableData
)

export const AdvertistmentTable=GetTable(
  {
      pageNumber:1,
      pageSize:2
    },
    getTableData
)