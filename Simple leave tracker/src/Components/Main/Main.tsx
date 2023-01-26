import React, { useEffect, useReducer } from 'react'
import Header from '../Header/Header';
import { reducer, ACTIONS } from './Reducer/Main.Reducer';
import Card from '../Cards/Card';
import styles from "./Main.module.scss"
import { data} from './../../Backend/Leaves.data';
import { ILeaveData } from './Main.types';

const Main = () => {

  const [state,dispatch]=useReducer(reducer,data);

  const addToPlannedLeaves=(item:ILeaveData)=>{
    dispatch({type:ACTIONS.PLANNED_LEAVES, payload:{data:item}})
  }
  const addToFloaterLeaves=(item:ILeaveData)=>{
    dispatch({type:ACTIONS.FLOATER_LEAVES, payload:{data:item}})
  }
  const addToAllLeaves=(item:ILeaveData)=>{
    dispatch({type:ACTIONS.ALL, payload:{data:item}})
  }

  const statusData=[
    {
      status:"All",
      onClick:addToAllLeaves
    },
    {
      status:"Planned Leaves",
      onClick:addToPlannedLeaves
    },
    {
      status:"Floater Leaves",
      onClick:addToFloaterLeaves
    }
  ]

  return (
    <>
    <header>
        <Header/>
    </header>
    <main className={styles["main"]}>
        <Card type="All" data={state} statusData={statusData}/>
        <Card type="Planned Leaves" data={state} statusData={statusData}/>
        <Card type="Floater Leaves" data={state} statusData={statusData}/>     
    </main>
    </>

  )
}

export default Main