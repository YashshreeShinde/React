import { Navigate } from "react-router-dom";
import AdvertistmentLayout from "../../Components/Users/Admin/Advertistments/Advertistment Layout/AdvertistmentLayout";
import ManageAluminiLayout from "../../Components/Users/Admin/Manage Alumini/Manage Alumini Layout/AluminiLayout"
import { AdvertistmentRoutes, ManageAluminiRoutes } from "./Child Routes";

export const AdminRoutes=[
    {
        path: "",
        element: <Navigate replace to='manage-alumini' />
      },
      {
        path: "manage-alumini",
        element: <ManageAluminiLayout />,
        children:ManageAluminiRoutes
      },
      {
        path: "advertistments",
        element: <AdvertistmentLayout />,
        children:AdvertistmentRoutes
      },
      
]