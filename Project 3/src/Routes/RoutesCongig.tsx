import AdminLayout from "../Components/Users/Admin/AdminLayout/AdminLayout";
import AluminiLayout from "../Components/Users/Alumini/AluminiLayout/AluminiLayout";
import { AdminRoutes } from "./AdminRoutes/AdminRoutes";
import { AluminiRoutes } from './AluminiRoutes/AluminiRoutes';

export const ROLE_PAGE_MAP:any={
    "admin":{
        element:AdminLayout,
        children:AdminRoutes

    },
    "alumini":{
        element:AluminiLayout,
        children:AluminiRoutes
    }
}


