import { http } from "./Http.service";

export const getDateWiseData=async({startDate,endDate}:any)=>{
    const {data}=await http("get",`cars/barChart?fromDate=${startDate}&toDate=${endDate}&filter=company`);
    console.log(data)
    return data
}