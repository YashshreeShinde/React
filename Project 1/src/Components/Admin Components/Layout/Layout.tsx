import React, { useState } from 'react'
import { adminRoutes } from '../../Main/Routes'
import Header from "../Header/Header";
import { modalRoutes } from '../../Main/Routes';
import { Navigate } from '../../../Utils/Utility';
import styles from "./Layout.module.scss"

const Layout = ({displayPopUp}:any) => {

  const[page,setPage]=useState("Admin/Sales")
  const[showModal,setShowModal]=useState(false)
  const[modal,setModal]=useState<string>("")
  const[modalProps,setModalProps]=useState<any>({})

  const Page=adminRoutes[page];
  const Modal=modalRoutes[modal];

  const onNavigate=Navigate(page,setPage);
  const closeModal = () => setShowModal(false);
 
  const displayModal=(modal:string,props={})=>
  {
    setShowModal(true);
    setModal(modal)
    setModalProps(props)
  }

  return (
    <> 
      {
      showModal && 
        <Modal closeModal={closeModal} modalProps={modalProps}/>
      }
   
      <section className={styles["main"]}>
        <header>
          <Header onNavigate={onNavigate}/>
        </header>
        <main className={styles["page-main"]}> 
          <Page displayModal={displayModal} displayPopUp={displayPopUp}/>     
        </main>
       </section>
    
     </>
  )
}


export default Layout;