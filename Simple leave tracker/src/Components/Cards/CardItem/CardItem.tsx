import React from 'react'
import styles from "./CardItem.module.scss"
import { ICardItemProps } from './CardItem.types';
import { IStatus } from './../Card.type';

const CardItem = ({data,statusData}:ICardItemProps) => {

  return (
    <div className={styles["card-item-container"]}>
        <span>{data?.date}</span>
        <div>
        {
         statusData?.map((item:IStatus,i:number)=>{
          return <button key={i} onClick={()=>item.onClick(data)}>{item.status}</button>
          })
       
        }
        </div>
    </div>
  )
}

export default CardItem