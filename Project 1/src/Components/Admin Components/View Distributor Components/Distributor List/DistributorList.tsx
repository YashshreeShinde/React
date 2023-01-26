import React from "react";
import styles from "./DistributorList.module.scss"
import DistributorItem from "../Distributor Item/DistributorItem";
import { IDistributorsListProps } from "./DistributorList.types";
import { IDistributor } from "../Layout/Layout.types";

const DistributorList = ({ data, getData, displayModal,displayPopUp }:IDistributorsListProps) => {
  return (
    <>
      {
        data?.map((item:IDistributor) => {
          return <DistributorItem name={item.name} 
                                  displayModal={displayModal}
                                  getData={getData} 
                                  data={item} 
                                  displayPopUp={displayPopUp}/>
        })
      }
    </>
  )
}

export default DistributorList;





