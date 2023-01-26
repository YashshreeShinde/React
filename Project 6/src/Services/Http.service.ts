import axios from "axios";
import React, { useContext } from "react";
import { methods } from "./Http.service.types";
import { getStore } from "./Utility";

const BASE_URL = "http://192.168.15.215:4000";

function setOptions(method: string, url: string, data: object = {}) {
  
  let options = {
    method: method,
    url: `${BASE_URL}/${url}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
      Authorization: getStore("token"),
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
  console.log(getStore("token"))
  try {
    const { data } = await axios(setOptions(method, url, postData));
    return data;
  } catch (error) {
    throw error;
  }
};
