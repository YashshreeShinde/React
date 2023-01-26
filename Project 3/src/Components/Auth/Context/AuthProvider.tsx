import React from 'react'
import {createContext,useReducer} from 'react'
import { setAuth } from './Auth.reducer';

const AuthContext=createContext<any>({});

export const AuthProvider = ({children}:any) => {
  const [auth,authDispatch]=useReducer<any>(setAuth,{
    username:"",
    password:"",
    role:"alumini",
    accessToken:""
  });
  
  return (
    <AuthContext.Provider value={{auth,authDispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;