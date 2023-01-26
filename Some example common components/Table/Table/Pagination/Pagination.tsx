import React from 'react'
import Select from '../../Select/Select';
import { PAGINATE_ACTIONS } from '../Reducers/PaginateReducer';
import styles from "./Pagination.module.scss"

const Pagination = ({paginationProps}:any) => {
    const {pageNumber,pageSize,totalRecords,paginateDispatch,paginateAttributes}=paginationProps
    const {options,label,paginateStyles}=paginateAttributes

    const onChange=(value:any)=>{
      paginateDispatch({type:PAGINATE_ACTIONS.CHANGE_PAGE_SIZE,selectedValue:value}) 
    }

    const incrementPageNumber=()=>{
      paginateDispatch({type:PAGINATE_ACTIONS.INCREMENT_PAGE_NUMBER})
    }
    const decrementPageNumber=()=>{
      paginateDispatch({type:PAGINATE_ACTIONS.DECREMENT_PAGE_NUMBER})
    }

  return (
    <>
    <div>
      <button type="button" onClick={decrementPageNumber}>Prev</button>
      <span style={paginateStyles}>{pageNumber+1}</span>
      <button type="button" onClick={incrementPageNumber}>Next</button>
    </div>
    <div className={styles["select"]}>
    <Select label={label} options={options} onChange={onChange}/>
    </div>
    <div className={styles["records"]}>Showing records: {(pageNumber * pageSize)+1} to {pageNumber * pageSize + pageSize} / {totalRecords}</div>

    
    </>
  )
}

export default Pagination