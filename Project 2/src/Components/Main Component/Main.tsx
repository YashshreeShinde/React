import React, { useContext } from "react";
import { MainRoutes } from "../../Routes/MainRoutes";
import PopUpComponent from "../Common Components/Pop up/PopUp";
import { PopUpContext } from "../Common Components/Pop up/PopUpProvider";

const Main = () => {
  const { PopUp } = useContext(PopUpContext);
  return (
    <>
      {PopUp && <PopUpComponent />}
      <MainRoutes />
    </>
  );
};

export default Main;
