import React from 'react'
import { filteredData, withoutFilter } from '../service';
import GetHeaderWithFilter from './HeaderWithFilter';

const Test = ({data}:any) => {
  return (
    <>
    {
        data?.map((item:any)=>{
            return <>{item.name}</>
        })
    }
    </>
  )
}

export const Search=GetHeaderWithFilter(Test,{
    label:"Search",
    title:"Header",
    options: [
        { label: "email", value: "email" },
        { label: "lat", value: "lat" },
    ],
    fetchData:filteredData,
    withoutFilter:withoutFilter
    
})

export default Test