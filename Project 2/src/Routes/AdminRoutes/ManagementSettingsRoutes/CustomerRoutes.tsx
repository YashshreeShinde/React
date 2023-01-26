import ModalComponent from "../../../Components/Common Components/Modal/Modal";

export const CustomerRoutes=[
    {
        path:"edit",
        element:<ModalComponent modal="customer-edit" backButton={true}/>
    },
    {
        path:"delete",
        element:<ModalComponent modal="customer-delete"/>
    },
    {
        path:"add",
        element:<ModalComponent modal="customer-add" backButton={true}/>
    },
    
]