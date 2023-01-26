import React from 'react'
import {createContext,useReducer} from 'react'
import { APP_ACTIONS } from '../../Constants/Constants';
import { setApp } from './App.reducer';
import { IAppContext } from './App.types';

const AppContext=createContext<any>({});

export const AppProvider= ({children}:any) => {

  const [app,appDispatch]=useReducer(setApp,{
    email:"",
    accessToken:"",
    popUpState:false,
    type:"",
    message:""
  });
  

  const setPopUp=(type:string,message:string):void=>{
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