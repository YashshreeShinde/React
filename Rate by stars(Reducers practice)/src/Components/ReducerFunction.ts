import { IAction, IShowStatus, IState } from "./Rate.types"

export const showStatus:IShowStatus[]=[
  {face:"😞",comment:"Very Bad"},
  {face:"☹️",comment:"Bad"},
  {face:"🙂",comment:"Good"},
  {face:"😃",comment:"Very Good"},
  {face:"😄",comment:"Excellent"}
 ]

 export const ACTIONS={
  ADD_STAR:'add-star',
  REMOVE_STAR:'remove-star',
  RESET:'reset'
 }
 

 
 export const reducer=(state:IState,action:IAction)=>{
    console.log("IN REDUCER FUNCTION")
    console.log("State:-",state)
    console.log("Action:-",action)

    switch(action.type){
        case ACTIONS.ADD_STAR:
          {        
            if(state.stars<5)
            {
              return {
                stars:state.stars+1,
                showEmoji:showStatus[state.stars]["face"],
                comment:` ${action?.payload?.payload} :- ${showStatus[state.stars]["comment"]}`
              }; 
            }
              return  state;
          }      
        case ACTIONS.REMOVE_STAR:{
          if(state.stars>1)
          {
          return {
            stars:state.stars-1,
            showEmoji:showStatus[state.stars-2]["face"],
            comment:showStatus[state.stars-2]["comment"]
          };
        }
        return state;
        }
        case ACTIONS.RESET:
          return {
            stars:1,
            showEmoji:showStatus[0]["face"],
            comment:showStatus[0]["comment"]
          };
        default:
          return state;

    }
  }

  

  