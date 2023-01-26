import React from 'react'
import { http } from '../../../../Services/Http.service';
import styles from "./Header.module.scss"
const Header = () => {

  const uploadFile=async(e:any)=>{
    console.warn(e.target.files)
    const formData=new FormData();
    formData.append("img",e.target.files[0])
    const response=await http("put","user/read-csv",formData)
    console.log(response)
  }
  return (

    <section className={styles["header-container"]}>
    <div>SALES DETAILS</div>
    <input type="file" id="files" className={styles["file"]} accept=".csv" onChange={uploadFile}/> 
    </section>
  )
}

export default Header