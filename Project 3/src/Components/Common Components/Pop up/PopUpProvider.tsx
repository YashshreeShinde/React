import React, { createContext, useState } from 'react'

export const PopUpContext=createContext<any>({})
const PopUpProvider = ({children}:any) => {

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