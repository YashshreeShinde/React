import axios from "axios";

export const filteredData=async(key:any,value:any)=>{
    const {data}=await axios.get(`http://localhost:5000/data?${key}=${value}`)
    return data;
}
export const withoutFilter=async(key:any,value:any)=>{
    const {data}=await axios.get(`http://localhost:5000/data`)
    return data;
}

export const keyMapping:any={
    "email":"email",
    "lat":"address.geo.lat"
}