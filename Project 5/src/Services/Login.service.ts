import axios from "axios";
import { http } from "./Http.service";

const loginAPI=async(values:any)=>{
    const data=await http("post","auth/login",values);
    console.log(data)
    return data;
}

export default loginAPI