import axios from 'axios';
import { http } from './Http.service';

// AGENTS
export const addAgent=async(newAgentData:any)=>{
    console.log(newAgentData)
    const data=await http("post","auth/signup",newAgentData);
    return data;
}
export const getAgents=async({pageNumber,pageSize}:any)=>{
    const data=await http("get",`user/allUsers/?limit=${pageSize}&offset=${pageNumber}`);
    return data;
}
export const updateAgentData=async(id:any,updatedData:any)=>{
    console.log(id,updatedData)
    const data=await http("put",`user/${id}`,updatedData);
    return data;
}
export const deleteAgents=async(id:any)=>{
    const data=await http("delete",`user/${id}`);
    console.log(data)
    return data;
}



//CONSUMERS
export const getConsumers=async({pageNumber,pageSize}:any)=>{
    const data=await http("get",`consumer/allConsumers/?limit=${pageSize}&offset=${pageNumber}`);
    console.log(data)
    return data;
}
export const addConsumer=async(newConsumerData:any)=>{
    const data=await http("post","consumer/createConsumer",newConsumerData);
    return data;
}
export const updateConsumerData=async(id:any,updatedData:any)=>{
    const data=await http("put",`consumer/${id}`,updatedData);
    return data;
}
export const deleteConsumer=async(id:any)=>{
    const data=await http("delete",`consumer/delete/${id}`);
    console.log(data)
    return data;
}


//METERS 
export const createMeter=async(newMeterData:any)=>{
    const data=await http("post","meter/createMeter",newMeterData);
    return data;
}
export const updateMeter=async(id:any,updatedData:any)=>{
    const data=await http("put",`meter/${id}`,updatedData);
    return data;
}
export const getMeters=async({pageNumber,pageSize}:any)=>{
    const data=await http("get",`meter/?limit=${pageSize}&offset=${pageNumber}`);
    console.log(data)
    return data;
}
export const deleteMeters=async(id:any)=>{
    console.log(id);
    const data=await http("delete",`meter/delete/${id}`);
    console.log(data)
    return data;
}

export const getTableData=async({pageNumber,pageSize}:any)=>{
    const data=await axios.get(`http://localhost:5000/data?_page=${pageNumber}&_limit=${pageSize}`)
    return data;
}
