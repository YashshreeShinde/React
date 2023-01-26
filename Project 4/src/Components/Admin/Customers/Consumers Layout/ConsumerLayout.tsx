import React, { Component } from 'react'
import { ConsumersHeader } from '../../../../Helpers/ConsumersHeader';
import AddButtonComponent from '../../../Common Components/Add Button Component/AddButtonComponent';
import CommonLayout from '../../../Common Components/CommonLayout/CommonLayout';
import SubPageHeader from '../../../Common Components/SubPage Header/SubPageHeader';
import { ConsumersTable } from '../../Get Contexts and Providers';
import ViewConsumer from '../ViewConsumer/ViewConsumer';
import styles from "./ConsumersLayout.module.scss"

export default class ConsumersLayout extends Component {
  render() {
    return (
      <>
    <SubPageHeader title={"CONSUMERS"} navLinks={ConsumersHeader}/>
    <CommonLayout Provider={ConsumersTable.TableProvider} title="Consumers" ViewComponent={ViewConsumer}/>
    </>
    )
  }
}
