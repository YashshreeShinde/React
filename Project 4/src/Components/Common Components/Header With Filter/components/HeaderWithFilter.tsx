import React from 'react'
import { useState } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { keyMapping } from '../service';
import styles from './Filter.module.scss'
import { useEffect } from 'react';
import Button from '../../Button/Button';
// import Button from '../Button/Button';

const GetHeaderWithFilter = (WrappedComponent:any,entity:any) => {
   

    const FilterHeader=()=>{
        const [data,setData]=useState([]);
        const [term,setTerm]=useState("");
       
        const {label,options,fetchData,title,withoutFilter}=entity;
        const [option,setOption]=useState(options[0].value);
        const fetchD=async()=>{
            const data=await withoutFilter();
            setData(data)
        }
        useEffect(()=>{
            fetchD()
        },[])
        const onSelectChange=(value:any)=>{
            const selectedValue=keyMapping[value]
            setOption(selectedValue)
        }
        const getData=async()=>{
            if(term!="")
            {
            const data=await fetchData(option,term);
            setData(data)
            }
            else
            {
                const data=await withoutFilter();
                setData(data)
            }
        }
        const onInputChange=(value:any)=>{
            console.log(value)
            setTerm(value);
            if(value==="")
            {
                fetchD()
            }
        }
        
       return(
        <>
        
        <div className={styles["header"]}>
        <div>
            {title}
        </div>
        <div className={styles["search"]}>
            <Select options={options} onChange={onSelectChange}/>
            <Input type="text" name="search" placeholder='search' onChange={onInputChange} value={term}/>
            <Button label='Search' name="search" type="button" onClick={getData}/>
        </div>
        </div>
        <div>
            <WrappedComponent data={data}/>
        </div>
        </>
       )

    }

    return FilterHeader;
  
}

export default GetHeaderWithFilter