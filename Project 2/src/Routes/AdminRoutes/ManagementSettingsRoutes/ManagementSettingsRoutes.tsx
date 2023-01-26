
import { Navigate } from "react-router-dom";
import CutomerLayout from "../../../Components/Users/Admin/Management settings/Customers/CustomerLayout/CutomerLayout";
import UsersLayout from "../../../Components/Users/Admin/Management settings/Users/UsersLayout/UsersLayout";
import { CustomerRoutes } from "./CustomerRoutes";
import { FurnaceRoutes } from "./FurnaceRoutes";
import { HSNRoutes } from "./HSNRoutes";
import { MaterialRoutes } from "./MaterialRoutes";
import { StorageRoutes } from "./StorageRoutes";
import { UnitRoutes } from "./UnitRoutes";
import { UserRoutes } from './UsersRoutes';
import HSNLayout from './../../../Components/Users/Admin/Management settings/HSN/HSNLayout/HSNLayout';
import MaterialLayout from './../../../Components/Users/Admin/Management settings/Materials/MaterialLayout/MaterialLayout';
import StorageLayout from './../../../Components/Users/Admin/Management settings/Storage/StorageLayout/StorageLayout';
import UnitsLayout from './../../../Components/Users/Admin/Management settings/Units/UnitsLayout/UnitsLayout';
import FurnaceLayout from './../../../Components/Users/Admin/Management settings/Furnances/FurnanceLayout/FurnaceLayout';

export const ManagementSettingsRoutes=[
    {
        path:"",
        element: <Navigate replace to='customer' />
    },
    {
        path:"customer",
        element:<CutomerLayout/>,
        children:CustomerRoutes
    },
    {
        path:"HSN",
        element:<HSNLayout/>,
        children:HSNRoutes
    },
    {
        path:"material",
        element:<MaterialLayout/>,
        children:MaterialRoutes
    },
    {
        path:"storage",
        element:<StorageLayout/>,
        children:StorageRoutes
    },
    {
        path:"unit",
        element:<UnitsLayout/>,
        children:UnitRoutes
    },
    {
        path:"users",
        element:<UsersLayout/>,
        children:UserRoutes
    },
    {
        path:"furnace",
        element:<FurnaceLayout/>,
        children:FurnaceRoutes
    },
]

