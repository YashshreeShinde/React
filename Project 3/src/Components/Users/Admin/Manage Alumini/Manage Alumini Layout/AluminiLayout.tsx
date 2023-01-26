import React, { useState } from 'react'
import CommonLayout from '../../../../Common Components/CommonLayout/CommonLayout';
import Select from '../../../../Common Components/Table/Select/Select';
import styles from "./AluminiLayout.module.scss"
import { elementMap } from './ElementMap';

const ManageAluminiLayout = () => {
  const[selectOption,setOption]=useState<string>("New Registrations")

  const options=[
    {label:"New Registrations",value:"New Registrations"},
    {label:"Existing Alumini",value:"Existing Alumini"},

  ]
  const {Provider,title,ViewComponent}=elementMap[selectOption];
  const onChange=(value:any)=>{
    setOption(value);
  }
  
  return (
    <>
    <div className={styles["select-option"]}>
    <Select options={options} default={options[0]} onChange={onChange} />
    </div>
    <CommonLayout Provider={Provider} title={title} ViewComponent={ViewComponent}/>
    </>
  )
}

export default ManageAluminiLayout