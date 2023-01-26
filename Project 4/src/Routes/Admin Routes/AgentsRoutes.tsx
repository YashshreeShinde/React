
import AddOrEditAgent from '../../Components/Admin/Agents/AddOrEditAgent/AddOrEditAgent';
import DeleteAgent from '../../Components/Admin/Agents/DeleteAgent/DeleteAgent';

export const AgentsRoutes = [
    {
      path: "add",
      Element: AddOrEditAgent,
    },
    {
        path: "delete",
        Element: DeleteAgent,
    },
    {
        path: "edit",
        Element: AddOrEditAgent,
    },
]