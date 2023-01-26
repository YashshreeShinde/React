import React from 'react'
import SetTable from '../../../../Common Components/Set Table Component/SetTable';
import { AdvertistmentTable } from '../../../Get Contexts and Providers';
import { paginateAttributes, tableAttributes } from './Table/Table attributes';
import { tableStyle } from './Table/TableStyles';

const ViewAdvertistments = () => {
  return (
    <SetTable
    contextComponent={AdvertistmentTable.TableContext}
    tableAttributes={tableAttributes}
    paginateAttributes={paginateAttributes}
    tableStyle={tableStyle}
    toPaginate={true}
  />
  )
}

export default ViewAdvertistments