import React from "react";
import SetTable from "../../../Common Components/Table/SetTable";
import { CarsTable } from "./Get context";
import { paginateAttributes, tableAttributes } from "./TableAttributes";

const GridLayout = () => {

  return (
    <>
    <h1 style={{textAlign:"center",color:"purple"}}>CARS DATA</h1>
    <CarsTable.TableProvider>
        <SetTable
        contextComponent={CarsTable.TableContext}
        tableAttributes={tableAttributes}
        paginateAttributes={paginateAttributes}
      />  
      </CarsTable.TableProvider>
      </>
  );
};

export default GridLayout;
