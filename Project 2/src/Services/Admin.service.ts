
import { http } from './Http.service';

export const getFurnace=async()=>{
    const data=await http("get","user/getFurnaces");
    console.log(data)
    return data;
}

export const getCustomersData=async({pageNumber,pageSize}:any)=>{
    const data=await http("get",`customer/?limit=${pageSize}&page=${pageNumber}`)
    console.log(data);
    return data;
}
export const createCustomer=async(customerData:any)=>{
    const data=await http("post","customer/createCustomer",customerData)
    console.log(data);
    return data;
}
export const updateCustomer=async(id:number,customerData:any)=>{
    const data=await http("put",`customer/${id}`,customerData)
    console.log(data);
    return data;
}
export const deleteCustomer=async(id:number)=>{
    const data=await http("delete",`customer/${id}`)
    console.log(data);
    return data;
}