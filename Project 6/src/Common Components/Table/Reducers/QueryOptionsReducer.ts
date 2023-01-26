import { QUERY_OPTIONS_ACTIONS } from "../../../Constants/Constants";

export const handleQueryOptions=(state:any,action:any)=>{
    switch(action.type){
        
        case QUERY_OPTIONS_ACTIONS.FILTER:{
            console.log(action.filterValue)
            return {
                ...state,
                pagination:{
                   ...state.pagination,
                   pageNumber:1
                },
                filterModel : action.filterValue
            }
        }
        case QUERY_OPTIONS_ACTIONS.NEW_PAGE:{
            const page=action.payload.newPage;
            return {
                ...state,
                pagination:{
                    ...state.pagination,
                pageNumber:page
                }
            }
        }
        case QUERY_OPTIONS_ACTIONS.CHANGE_PAGE_SIZE:{
            console.log(action.selectedValue)
            return{
                ...state,
                pagination:{
                ...state.pagination,
                pageSize:action.selectedValue
                }
                
            }
        }

        case QUERY_OPTIONS_ACTIONS.SORT:{
            return{
                ...state,
                sortModel:action.sortModel
            }
        }

        case QUERY_OPTIONS_ACTIONS.SEARCH:{
            return {
                ...state,
                searchTerm:action.searchTerm
            }
        }

        default:{
            return state;
        }
    }

}