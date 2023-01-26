
import { paginateStyles} from "./TableStyles";

export const actions=[
  {
    type:"button",
    label:"Assign Meter",
    name:"edit",
    link:"assign-meters",
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
  },

]


export const columns=[
   
    {keypath:"consumerName",displayName:"Name"},
    {keypath:"consumerEmail",displayName:"Email"},
    {keypath:"consumerArea",displayName:"Area"},

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