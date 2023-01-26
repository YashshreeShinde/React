import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import DistributorList from '../Distributor List/DistributorList';
import { http } from '../../../../Services/Http.service';
import { IDistributor, IDistributorsData } from './Layout.types';


const ViewDistributorsLayout = ({displayModal,displayPopUp}:any) => {

  const [data,setData]=useState<IDistributor[]>()

  const getData=async()=>{
    const data=await http("get","user/");
    setData(data.data.user)
    return data;
  }

  useEffect(()=>{
    getData();
  },[])


  return (
    <>
    <header>
      <Header displayModal={displayModal} displayPopUp={displayPopUp} getData={getData}/>
    </header>

    <main>
      <DistributorList 
                      data={data} 
                      getData={getData} 
                      displayModal={displayModal}
                      displayPopUp={displayPopUp}/>
    </main>
    </>
  )
}

export default ViewDistributorsLayout