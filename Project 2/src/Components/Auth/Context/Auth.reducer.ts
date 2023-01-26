

import loginAPI from "../../../Services/Login.service";
import {ROLE_PAGE_MAP } from "../../../Utils/Utility";
import { useEffect } from 'react';

export const LOGIN_ACTIONS={
    LOGIN:"LOGIN"
}

export const setAuth=(state:any,action:any)=>{
    switch(action.type){
        case LOGIN_ACTIONS.LOGIN:{
            
            const {username,password}=action.credentials;
            return {
                username:username,
                password:password,
                accessToken:action.token,
                role:action.role
            }
        }
    }
    return state;
}