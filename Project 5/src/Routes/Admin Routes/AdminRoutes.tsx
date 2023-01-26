import MeterLayout from "../../Components/Admin/Meter/Meter Layout/MeterLayout";
import ReportsLayout from "../../Components/Admin/Reports/ReportsLayout/ReportsLayout";
import AgentsLayout from "./../../Components/Admin/Agents/AgentsLayout/AgentsLayout";

import { MeterRoutes } from './MeterRoutes';
import ConsumersLayout from "../../Components/Admin/Customers/Consumers Layout/ConsumerLayout";
import { AgentsRoutes } from './AgentsRoutes';
import { ConsumersRoutes } from "./ConsumersRoutes";

export const AdminRoutes = [
  {
    path: "",
    Element: AgentsLayout,
    children:AgentsRoutes
  },
  {
    path: "manage-agents",
    Element: AgentsLayout,
    children:AgentsRoutes
  },
  {
    path: "reports",
    Element: ReportsLayout
  },
  {
    path: "manage-consumers",
    Element: ConsumersLayout,
    children:ConsumersRoutes
  },
  {
    path: "meters",
    Element: MeterLayout,
    children:MeterRoutes
  },
  {
    path: "bills",
    Element: MeterLayout
  },
];
