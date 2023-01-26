import axios from "axios";

export const getTableData=async({pageNumber,pageSize}:any)=>{
    const {data}=await axios.get(`http://localhost:5000/data?_page=${pageNumber}&_limit=${pageSize}`)
    return data;
}