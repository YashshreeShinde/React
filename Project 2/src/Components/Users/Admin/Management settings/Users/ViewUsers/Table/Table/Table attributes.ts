
import { paginateStyles} from "./TableStyles";
import { ActionsMap } from "../../../../../../../Common Components/Table/Table/Table/ActionsMap";
export const actions=[
    {
      type:"button",
      label:"Edit",
      name:"edit",
      link:"edit",
      actionStyles:{
        color:"primary"
      }
    },
    {
      type:"button",
      label:"Delete",
      name:"edit",
      link:"delete",
      actionStyles:{
        color:"danger"
      }
    }
]


export const columns=[
   
    // {keypath:"furnaceNumber",displayName:"Furnace Number"},
    // {keypath:"isOccupied",displayName:"Is Occupied"}
    {keypath:"name",displayName:"Name"},
    {keypath:"address.suite",displayName:"Suite"},
    {keypath:"address.geo.lat",displayName:"Lat"},
    {keypath:"actions",displayName:"Actions"}


]

export const tableAttributes:any={
    columns:columns,
    actions:actions
  }

export const paginateAttributes:any={
    label:"Select Page Size",
    options:[
        {label:"2",value:"2"},
        {label:"4",value:"4"},
        {label:"6",value:"6"},
    ],
    paginateStyles:paginateStyles
}