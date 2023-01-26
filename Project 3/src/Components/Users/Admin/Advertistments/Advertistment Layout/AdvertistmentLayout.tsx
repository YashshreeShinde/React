import React from 'react'
import AddButtonComponent from '../../../../Common Components/Add Button Component/AddButtonComponent';
import CommonLayout from '../../../../Common Components/CommonLayout/CommonLayout';
import { AdvertistmentTable } from './../../../Get Contexts and Providers';
import ViewAdvertistments from './../View Advertistments/ViewAdvertistments';
import styles from "./AdvertistmentLayout.module.scss"

const AdvertistmentLayout = () => {
  return (
    <>
    <div className={styles["add"]}>
        <AddButtonComponent/>
    </div>
    <CommonLayout Provider={AdvertistmentTable.TableProvider} title="Advertistments" ViewComponent={ViewAdvertistments}/>
    </>
  )
}

export default AdvertistmentLayout