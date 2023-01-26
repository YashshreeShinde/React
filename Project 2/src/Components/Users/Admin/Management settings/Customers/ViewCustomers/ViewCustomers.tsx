import React, { useContext, useEffect, useReducer } from "react";
import TableDetails from "../../../../../Common Components/Table Details/TableDetails";
import { AddCustomerTable } from "../../Get contexts and providers";

import {
  paginateAttributes,
  tableAttributes,
} from "./Table/Table/Table attributes";
import { tableStyle } from "./Table/Table/TableStyles";

const ViewCustomers = () => {
  return (
    <>
      <TableDetails
        contextComponent={AddCustomerTable.Context}
        tableAttributes={tableAttributes}
        paginateAttributes={paginateAttributes}
        tableStyle={tableStyle}
        toPaginate={true}
      />
    </>
  );
};

export default ViewCustomers;
