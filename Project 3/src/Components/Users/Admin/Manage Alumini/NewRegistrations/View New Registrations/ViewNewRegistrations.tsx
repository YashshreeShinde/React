
import styles from "./ViewNewRegistrations.module.scss";
import { columns, paginateAttributes} from "../Table/Table/Table attributes";
import { tableStyle } from "../Table/Table/TableStyles";
import { useContext } from "react";
import { PopUpContext } from "../../../../../Common Components/Pop up/PopUpProvider";
import SetTable from "../../../../../Common Components/Set Table Component/SetTable";
import { NewRegistrationsData } from "../../../../Get Contexts and Providers";

const ViewNewRegistrations = () => {

const {setPopUp}=useContext(PopUpContext)
const acceptRegistration=(data:any)=>{
  console.log(data);
  setPopUp("success","ok")
}

const rejectRegistration=(data:any)=>{
  setPopUp("error","ok")
}
    
const actions=[
  {
    type:"icon",
    icon:"GiCheckMark",
    link:"accept",
    size:"2rem",
    fill:"green",
    onClick:acceptRegistration

  },
  {
    type:"icon",
    icon:"ImCross",
    link:"reject",
    size:"2rem",
    fill:"red",
    onClick:rejectRegistration
    
  }
]


const tableAttributes:any={
  columns:columns,
  actions:actions
}
    return (
      
      <SetTable
        contextComponent={NewRegistrationsData.TableContext}
        tableAttributes={tableAttributes}
        paginateAttributes={paginateAttributes}
        tableStyle={tableStyle}
        toPaginate={true}
      />
    )
  }
  export default ViewNewRegistrations