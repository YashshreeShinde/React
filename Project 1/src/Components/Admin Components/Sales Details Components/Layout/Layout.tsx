import React, { useState } from 'react'
import Header from '../Header/Header'
import { data1 } from "../Table/data"
import Table from '../Table/Table';
const SalesDetailsLayout = () => {

  const [data,setData]=useState<any>(data1);
  return (
    <>
    <header>
      <Header/>
    </header>

    <main>
      <Table data={data}/>
    </main>
    </>
  )
}

export default SalesDetailsLayout