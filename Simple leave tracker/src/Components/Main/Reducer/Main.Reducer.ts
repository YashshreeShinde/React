import { ILeaveData } from '../Main.types';
import { IAction } from './Main.Reducer.types';

export const ACTIONS:any={
  ALL:"All",
  PLANNED_LEAVES:"Planned Leaves",
  FLOATER_LEAVES:"Floater Leaves"
}


export const reducer=(state:ILeaveData[],action:IAction)=>{

    const data=action.payload.data;
    const index=state.indexOf(data);
    state.splice(index,1);
    switch(action.type){
        
        case ACTIONS.ALL:{
            console.log(action)
            data.status="All";
            state = [...state, data]
            return  state; 
        }
        case ACTIONS.PLANNED_LEAVES:{
            console.log(action)
            data.status="Planned Leaves";
            state = [...state, data]
            return  state; 
            }
        case ACTIONS.FLOATER_LEAVES:{
            console.log(action)
            data.status="Floater Leaves";
            state = [...state, data]
            return  state; 
        }      
        default:
            return state;
    }

}