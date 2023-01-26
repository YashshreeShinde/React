import AddOrEditConsumer from "../../Components/Admin/Customers/AddOrEditConsumer/AddOrEditConsumer";
import AgentsDataLayout from "../../Components/Admin/Customers/Agents/Agents Layout/AgentsDataLayout";
import ConsumersDataLayout from "../../Components/Admin/Customers/ConsumersData/Consumers Layout/ConsumersDataLayout";
import MetersLayout from "../../Components/Admin/Customers/Meters/Meters Layout/MetersLayout";
import DeleteConsumer from './../../Components/Admin/Customers/DeleteConsumer/DeleteConsumer';


export const ConsumerDataRoutes=[
   {
    path:"add",
    Element:AddOrEditConsumer
   },
   {
    path:"edit",
    Element:AddOrEditConsumer
   },
   {
    path:"delete",
    Element:DeleteConsumer
   },

]
export const ConsumersRoutes=[
    {
        path:"meters",
        Element:MetersLayout

    },
    {
        path:"consumers-data",
        Element:ConsumersDataLayout,
        children:ConsumerDataRoutes

    },
    {
        path:"agents",
        Element:AgentsDataLayout
    }
   
]