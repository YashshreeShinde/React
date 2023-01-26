import axios from "axios";
import AuthContext from "../Components/Auth/Context/AuthProvider";
import React, { useContext } from "react";
import { methods } from "./Http.service.types";
// import { getStore, modifyStore } from "../Utils/Utility";

const BASE_URL = "http://192.168.2.116:3000";

function setOptions(method: string, url: string, data: object = {}) {
  
  let options = {
    method: method,
    url: `${BASE_URL}/${url}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      // Authorization: getStore("token"),
    },
    data: data,
  };
  return options;
}
export const http = async (
  method: methods,
  url: string,
  postData = {},
  headers = {}
) => {
  // console.log(getStore("token"))
  try {
    const { data } = await axios(setOptions(method, url, postData));
    return data;
  } catch (error) {
    throw error;
  }
};

export default axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})

export const GetHeaders=()=>{
  const {
    auth: { accessToken },
  } = useContext(AuthContext);
  const headers={
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization:accessToken 
  }
  return headers;
}

// 1st method
// export const http1 = async (
//     method: methods,
//     URL: string,
//     postData = {},
//     headers = {}
//   ) => {
//     try {
//       const { data } = await axios[method](`${BASE_URL}/${URL}`, postData, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json;charset=UTF-8",
//           // Authorization: accessToken,
//         },
//       });
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };
