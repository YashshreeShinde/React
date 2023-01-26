import { getAgents, getConsumers, getMeters } from "../../Services/Admin.service";
import GetTable from "../Common Components/Table Factory Component(with Context and Provider)/TableHOC";
import { getTableData } from './../../Services/Admin.service';

export const ConsumersTable=GetTable(
    {
        pageNumber:1,
        pageSize:2
      },
      getTableData
)

export const AgentsTable=GetTable(
    {
        pageNumber:1,
        pageSize:2
      },
      getTableData
)

export const MetersTable=GetTable(
  {
      pageNumber:1,
      pageSize:2
    },
    getMeters
)