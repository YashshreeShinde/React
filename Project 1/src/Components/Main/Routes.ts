
import { LoginPage, 
         AdminPage, 
         DistributorPage, 
         ViewDistributorsPage, 
         SalesDetailsPage, 
         AddNewModal, 
         UpdateModal, 
         DeleteModal,
         SendNotificationsPage } from "./Exports"


export const routes: { [key: string]: any } = {
    "Login": LoginPage,
    "Admin": AdminPage,
    "Distributor": DistributorPage
}

export const adminRoutes: { [key: string]: any } = {
    "Admin/Distributor": ViewDistributorsPage,
    "Admin/Sales": SalesDetailsPage,
    "Admin/Send-Notifications":SendNotificationsPage
}

export const modalRoutes: { [key: string]: any } = {
    "AddNewModal": AddNewModal,
    "UpdateModal": UpdateModal,
    "DeleteModal": DeleteModal
}

