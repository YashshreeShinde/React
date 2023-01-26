import ModalComponent from "../../../Components/Common Components/Modal/Modal";

export const StorageRoutes=[
    {
        path:"edit",
        element:<ModalComponent modal="storage-edit"/>
    },
    {
        path:"delete",
        element:<ModalComponent modal="storage-delete"/>
    },
    {
        path:"add",
        element:<ModalComponent modal="storage-add"/>
    },
]
    
