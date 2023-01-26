import React, { Component } from 'react'
import AddButtonComponent from '../../../Common Components/Add Button Component/AddButtonComponent';
import CommonLayout from '../../../Common Components/CommonLayout/CommonLayout';
import { MetersTable } from './../../Get Contexts and Providers';
import styles from "./MeterLayout.module.scss"
import ViewMeters from './../View Meters/ViewMeters';
import SubPageHeader from '../../../Common Components/SubPage Header/SubPageHeader';

class MeterLayout extends Component{
  render()
  {
  return (
    <>
    <SubPageHeader title={"METERS"}/>
    <CommonLayout Provider={MetersTable.TableProvider} title="Meters" ViewComponent={ViewMeters}/>
    </>
  )
}
}

export default MeterLayout