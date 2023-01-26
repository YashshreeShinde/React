
import SetTable from "../../../../../Common Components/Set Table Component/SetTable";
import { ExistingAluminTable } from "../../../../Get Contexts and Providers";
import {  paginateAttributes, tableAttributes } from "./Table/Table attributes";
import { tableStyle } from "./Table/TableStyles";

const ViewExistingAlumini = () => {
    return (
      <SetTable
      contextComponent={ExistingAluminTable.TableContext}
      tableAttributes={tableAttributes}
      paginateAttributes={paginateAttributes}
      tableStyle={tableStyle}
      toPaginate={true}
    />
    )
  }
  export default ViewExistingAlumini