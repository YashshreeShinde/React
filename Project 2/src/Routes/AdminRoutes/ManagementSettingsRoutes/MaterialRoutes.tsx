import ModalComponent from "../../../Components/Common Components/Modal/Modal";

export const MaterialRoutes=[
    {
        path:"edit",
        element:<ModalComponent modal="material-edit"/>
    },
    {
        path:"delete",
        element:<ModalComponent modal="material-delete"/>
    },
    {
        path:"add",
        element:<ModalComponent modal="material-add"/>
    },
]