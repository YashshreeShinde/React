import axios from "axios";
import { methods } from "./Http.types";

const BASE_URL = "https://jsonplaceholder.typicode.com";


// 1st method
export const http1 = async (method:methods,URL:string,postData={},headers={}) => {
    try {
        const { data } = await axios[method](`${BASE_URL}/${URL}`,postData,headers)
        return data;
    }
    catch (error) {
        throw error;
    }
}


// 2nd method
function setOptions(method:string,url:string,data:object={})
{
let options = {
    method: method,
    url: `${BASE_URL}/${url}`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    data:data
};
    
    return options
}
export const http2 = async (method:methods,url:string,postData={},headers={}) => {
    try {
        const { data } = await axios(setOptions(method,url,postData))
        return data;
    }
    catch (error) {
        throw error;
    }
}
