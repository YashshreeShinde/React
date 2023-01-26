export const PAGINATE_ACTIONS={
    DECREMENT_PAGE_NUMBER:"DECREMENT_PAGE_NUMBER",
    INCREMENT_PAGE_NUMBER:"INCREMENT_PAGE_NUMBER",
    CHANGE_PAGE_SIZE:"CHANGE_PAGE_SIZE"
}

export const handlePagination=(state:any,action:any)=>{
    switch(action.type){
        case PAGINATE_ACTIONS.DECREMENT_PAGE_NUMBER:{
            return {
                ...state,
                pageNumber:state.pageNumber-1
            }
        }
        case PAGINATE_ACTIONS.INCREMENT_PAGE_NUMBER:{
            return {
                ...state,
                pageNumber:state.pageNumber+1
            }
        }
        case PAGINATE_ACTIONS.CHANGE_PAGE_SIZE:{
            console.log(action.selectedValue)
            return{
                ...state,
                pageSize:action.selectedValue
            }
        }
        default:{
            return state;
        }
    }

}