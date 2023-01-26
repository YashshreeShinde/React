import React from 'react'
import { ILeaveData } from '../Main/Main.types';
import CardItem from './CardItem/CardItem';
import styles from "./Cards.module.scss"
import { ICardProps, IStatus } from './Card.type';

const Card = ({type,data,statusData}:ICardProps) => {

  const leaveData=data?.filter((item:ILeaveData)=>item.status===type);
  const statuses=statusData?.filter((item:IStatus)=>item.status!==type);

  return (
    <div className={styles["cards-container"]}>
    <h3>{type}</h3>
    {
        leaveData?.map((item:ILeaveData)=>{
          return <CardItem data={item} key={item.id} statusData={statuses}/>
        })
    }
    </div>
  )
}

export default Card