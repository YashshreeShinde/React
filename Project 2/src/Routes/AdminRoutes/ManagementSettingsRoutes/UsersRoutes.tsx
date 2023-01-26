import ModalComponent from "../../../Components/Common Components/Modal/Modal";

export const UserRoutes=[
    {
        path:"edit",
        element:<ModalComponent modal="user-edit" backButton={true}/>
    },
    {
        path:"delete",
        element:<ModalComponent modal="user-delete"/>
    },
    {
        path:"add",
        element:<ModalComponent modal="user-add" backButton={true}/>
    },
]