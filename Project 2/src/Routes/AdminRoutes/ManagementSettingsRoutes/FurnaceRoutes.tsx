import ModalComponent from "../../../Components/Common Components/Modal/Modal";

export const FurnaceRoutes=[
    {
        path:"edit",
        element:<ModalComponent modal="furnace-edit" backButton={true}/>
    },
    {
        path:"delete",
        element:<ModalComponent modal="furnace-delete"/>
    },
    {
        path:"add",
        element:<ModalComponent modal="furnace-add" backButton={true}/>
    },
]