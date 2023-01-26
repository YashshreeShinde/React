import { getCustomersData } from "../../../../Services/Admin.service";
import GetTable from "../../../Common Components/TableHOC/TableHOC";

export const AddCustomerTable=GetTable(
    {
        pageNumber:1,
        pageSize:2
      },
      getCustomersData
)