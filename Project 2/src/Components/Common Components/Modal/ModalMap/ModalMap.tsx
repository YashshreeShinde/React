import AddUser from './../../../Users/Admin/Management settings/Users/AddUser/AddUser';
import AddCustomer from './../../../Users/Admin/Management settings/Customers/AddCustomer/AddCustomer';
import DeleteUser from './../../../Users/Admin/Management settings/Users/DeleteUser/DeleteUser';
import EditFurnaceDetails from './../../../Users/Admin/Management settings/Furnances/EditFurnaceDetails/EditFurnaceDetails';
import AddFurnace from './../../../Users/Admin/Management settings/Furnances/AddFurnace/AddFurnace';
import EditUserDetails from './../../../Users/Admin/Management settings/Users/EditUserDetails/EditUserDetails';
import EditCustomerDetails from './../../../Users/Admin/Management settings/Customers/EditCustomerDetails/EditCustomerDetails';
import DeleteCustomer from './../../../Users/Admin/Management settings/Customers/DeleteCustomer/DeleteCustomer';
import AddMaterial from './../../../Users/Admin/Management settings/Materials/AddMaterial/AddMaterial';
import EditMaterial from './../../../Users/Admin/Management settings/Materials/EditMaterial/EditMaterial';
import DeleteMaterial from './../../../Users/Admin/Management settings/Materials/DeleteMaterial/DeleteMaterial';
import AddStorage from './../../../Users/Admin/Management settings/Storage/AddStorage/AddStorage';
import EditStorageDetails from './../../../Users/Admin/Management settings/Storage/EditStorageDetails/EditStorageDetails';
import DeleteStorage from './../../../Users/Admin/Management settings/Storage/DeleteStorage/DeleteStorage';
import AddHSN from './../../../Users/Admin/Management settings/HSN/AddHSN/AddHSN';
import EditHSNDetails from './../../../Users/Admin/Management settings/HSN/EditHSNDetails/EditHSNDetails';
import DeleteHSN from './../../../Users/Admin/Management settings/HSN/DeleteHSN/DeleteHSN';
import AddUnit from './../../../Users/Admin/Management settings/Units/AddUnit/AddUnit';
import EditUnitDetails from './../../../Users/Admin/Management settings/Units/EditUnitDetails/EditUnitDetails';
import DeleteUnit from './../../../Users/Admin/Management settings/Units/DeleteUnit/DeleteUnit';

export const modalMap:{[key: string]: (data:any) => JSX.Element }={
    "user-add":AddUser,
    "user-delete":DeleteUser,
    "user-edit":EditUserDetails,

    "customer-add":AddCustomer,
    "customer-edit":EditCustomerDetails,
    "customer-delete":DeleteCustomer,

    "furnace-add":AddFurnace,
    "furnace-edit":EditFurnaceDetails,
    "furnace-delete":DeleteUser,

    "material-add":AddMaterial,
    "material-edit":EditMaterial,
    "material-delete":DeleteMaterial,

    "storage-add":AddStorage,
    "storage-edit":EditStorageDetails,
    "storage-delete":DeleteStorage,

    "HSN-add":AddHSN,
    "HSN-edit":EditHSNDetails,
    "HSN-delete":DeleteHSN,

    "unit-add":AddUnit,
    "unit-edit":EditUnitDetails,
    "unit-delete":DeleteUnit

}