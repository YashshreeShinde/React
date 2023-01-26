import React, { useState } from 'react'
import {createContext,useReducer} from 'react'
import { APP_ACTIONS, setApp } from './App.reducer';
import { IAppContextProps } from './App.types';

const AppContext=createContext<any>({auth:null,authDispatch:null,setPopUp:null,popUp:null});

export const AppProvider= ({children}:IAppContextProps) => {

  const [app,appDispatch]=useReducer(setApp,{
    username:"",
    role:"",
    accessToken:"",
    popUpState:false,
    type:"",
    message:""
  });
  

  const setPopUp=(type:string,message:string):any=>{
   appDispatch({type:APP_ACTIONS.SET_POPUP,payload:{type,message} })
  }
  const showPopUp=()=>{
    appDispatch({type:APP_ACTIONS.SHOW_POPUP})
  }
  return (
    <AppContext.Provider value={{app,appDispatch,setPopUp,showPopUp}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext;