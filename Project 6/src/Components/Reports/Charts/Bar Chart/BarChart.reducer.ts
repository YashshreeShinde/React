import { DATES } from "../../../../Constants/Constants";

export const reducer=(state:any,action:any)=>{

    switch(action.type){
        case DATES.START_DATE:{      
            return {
                ...state,
                startDate:action.payload.startDate.format('YYYY/MM/DD')
            }
        }
        case DATES.END_DATE:{
            return {
                ...state,
                endDate:action.payload.endDate.format('YYYY/MM/DD')
            }
        }
    }
    return state;
}