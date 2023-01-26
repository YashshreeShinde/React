
import { Navigate } from "react-router-dom";
import ApproveOffersLayout from "../../Components/Users/Admin/Approve Offers/ApproveOffersLayout/ApproveOffersLayout";
import ManagementSettingsLayout from "../../Components/Users/Admin/Management settings/Management settings Layout/ManagementSettingsLayout";
import ReportsLayout from "../../Components/Users/Admin/Reports/ReportsLayout/ReportsLayout";
import ViewInvoicesLayout from "../../Components/Users/Admin/View Invoices/View Invoices Layout/ViewInvoicesLayout";
import ViewPO from "../../Components/Users/Admin/View PO/View PO/ViewPO";
import { ManagementSettingsRoutes } from "./ManagementSettingsRoutes/ManagementSettingsRoutes";

export const AdminRoutes:any = [
  {
    path: "",
    element: <Navigate replace to='reports' />
  },
 
  {
    path: "approve-offers",
    element: <ApproveOffersLayout />,
  },
  {
    path: "reports",
    element: <ReportsLayout />,
  },
  {
    path: "manage",
    element: <ManagementSettingsLayout />,
    children:ManagementSettingsRoutes
  },
  {
    path: "view-po",
    element: <ViewPO />,
  },
  {
    path: "view-invoices",
    element: <ViewInvoicesLayout />,
  },
 
];