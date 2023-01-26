import DeleteAlumini from "../../Components/Users/Admin/Manage Alumini/Existing Alumini/DeleteAlumini/DeleteAlumini";
import EditAlumini from "../../Components/Users/Admin/Manage Alumini/Existing Alumini/EditAlumini/EditAlumini";
import CreateAdvertistment from './../../Components/Users/Admin/Advertistments/Create Advertistment/CreateAdvertistment';

export const ManageAluminiRoutes=[
    {path:"edit",element:<EditAlumini/>},
    {path:"delete",element:<DeleteAlumini/>}
]

export const AdvertistmentRoutes=[
    {path:"add",element:<CreateAdvertistment/>},
    {path:"delete",element:<DeleteAlumini/>}
]
