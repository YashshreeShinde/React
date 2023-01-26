import axios from "axios";
import { http } from "./Http.service";

export const loginAPI=async (data:any)=>await http("post","auth/login",data);

export const resetPasswordAPI=async(password:string,token:string|undefined)=>await http("post",`auth/resetPassword/${token}`,{"password":password})

export const signUpAPI=async(data:any)=>await http("post","auth/signup",data);
  
export const forgotPassword=async(data:any)=>await http("post","auth/",data);
