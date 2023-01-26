export const TABLE_ACTIONS={
    FETCH_TABLE_DATA:"FETCH TABLE DATA"
}

export const handleTableReducer=(state:any,action:any)=>{
    switch(action.type){
        
        case TABLE_ACTIONS.FETCH_TABLE_DATA:{
            console.log(action.payload)
            return {
                data:action.payload,
                success:true,
                error:false,
                totalRecords:action.payload.length
            }
        }
        default:{
            return state;
        }
    }
    
}