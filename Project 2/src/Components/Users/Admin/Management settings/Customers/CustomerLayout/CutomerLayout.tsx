import React, { createContext, useReducer } from "react";
import CommonLayout from "../../../../../Common Components/CommonLayout-Management/CommonLayout";
import { AddCustomerTable } from "../../Get contexts and providers";
import ViewCustomers from "../ViewCustomers/ViewCustomers";

const CutomerLayout = () => {
  return (
    <>
    <CommonLayout Provider={AddCustomerTable.TableComponent} ViewComponent={ViewCustomers}/>
    </>
  );
};

export default CutomerLayout;
