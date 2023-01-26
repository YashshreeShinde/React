import AddAndEditMeter from "../../Components/Admin/Meter/AddAndEditMeter/AddAndEditMeter";
import DeleteMeter from "../../Components/Admin/Meter/DeleteMeter/DeleteMeter";

export const MeterRoutes = [
  {
    path: "add",
    Element: AddAndEditMeter,
  },
  {
    path: "delete",
    Element: DeleteMeter,
  },
  {
    path: "edit",
    Element: AddAndEditMeter,
  },
];
