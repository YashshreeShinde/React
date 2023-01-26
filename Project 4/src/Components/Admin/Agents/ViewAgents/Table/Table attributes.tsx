
import { paginateStyles} from "./TableStyles";

export const actions=[
  {
    type:"button",
    label:"Edit",
    name:"edit",
    link:"edit",
    actionstyles:{
      color:"primary"
    }
  },
  {
    type:"button",
    label:"Delete",
    name:"edit",
    link:"delete",
    actionstyles:{
      color:"danger"
    }
  }
]


export const columns=[
   
    {keypath:"name",displayName:"Name"},
    {keypath:"email",displayName:"Suite"},
    {keypath:"address.geo.lat",displayName:"Lat"},
    {keypath:"actions",displayName:"Actions"}

    // {keypath:"name",displayName:"Name"},
    // {keypath:"email",displayName:"Email"},
    // {keypath:"actions",displayName:"Actions"}


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