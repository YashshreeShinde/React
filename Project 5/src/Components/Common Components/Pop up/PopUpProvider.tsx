import React, { createContext, useState } from 'react'
import { IPopUpContext } from './PopUp.types';

export const PopUpContext=createContext<any>({setPopUp:null,PopUp:null,type:null,message:null,showPopUp:null})
const PopUpProvider = ({children}:IPopUpContext ) => {

  const[PopUp,showPopUp]=useState(false);
  const[type,setType]=useState("")
  const [message,setMessage]=useState("")

  const setPopUp=(type:string,message:string)=>{
    showPopUp(true)
    setType(type);
    setMessage(message)
  }
  return (
    <PopUpContext.Provider value={{setPopUp,PopUp,type,message,showPopUp}}>
      {children}
    </PopUpContext.Provider>
  )
}

export default PopUpProvider