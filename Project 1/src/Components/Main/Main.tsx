import React from 'react';
import { useState } from 'react';
import { Navigate } from '../../Utils/Utility';
import PopUp from '../Pop up/PopUp';
import { routes } from './Routes';
import styles from "./Main.module.scss"


const Main = () => {
  const [page,setPage]=useState("Login");
  const [showPopUp,setShowPopUp]=useState(false);
  const [props,setProps]=useState<any>()

  const onNavigate=Navigate(page,setPage);
  const Page=routes[page];

  const closePopUp=()=>{
    setShowPopUp(false)
  }

  const displayPopUp=(type:string,text:string)=>
  {
    setShowPopUp(true);
    setProps({type,text});  
  }

  return (
    <main>
     {showPopUp && 
     <div className={styles[props?.type]}>
        <PopUp closePopUp={closePopUp} props={props}/>
     </div>
     
      }
    <Page onNavigate={onNavigate} displayPopUp={displayPopUp}/>
    </main>
  )
}

export default Main