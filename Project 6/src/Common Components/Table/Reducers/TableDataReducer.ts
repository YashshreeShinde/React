export const TABLE_ACTIONS={
    FETCH_TABLE_DATA:"FETCH TABLE DATA"
}

export const handleTableReducer=(state:any,action:any)=>{
    console.log(action.payload)
    switch(action.type){
       
        case TABLE_ACTIONS.FETCH_TABLE_DATA:{
            console.log(action.payload)
            return {
                data:action.payload.data,
                success:true,
                error:false,
                totalRecords:action.payload.totalRecords
            }
        }
        default:{
            return state;
        }
    }
    
}