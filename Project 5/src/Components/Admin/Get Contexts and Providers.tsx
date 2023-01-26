import { getAgents, getConsumers, getMeters } from "../../Services/Admin.service";
import GetTable from "../Common Components/Table Factory Component(with Context and Provider)/TableHOC";

export const ConsumersTable=GetTable(
    {
        pageNumber:1,
        pageSize:2
      },
      getConsumers
)

export const AgentsTable=GetTable(
    {
        pageNumber:1,
        pageSize:2
      },
      getAgents
)

export const MetersTable=GetTable(
  {
      pageNumber:1,
      pageSize:2
  },
    getMeters
)