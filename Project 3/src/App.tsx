import React from 'react'
import { MainRoutes } from './Routes/MainRoutes';
import { useContext } from 'react';
import { PopUpContext } from './Components/Common Components/Pop up/PopUpProvider';
import PopUpComponent from './Components/Common Components/Pop up/PopUp';

const App = () => {

  const {PopUp}=useContext(PopUpContext)
  return (
    <>
     {PopUp && <PopUpComponent />}
    <MainRoutes/>
    </>
  )
}

export default App