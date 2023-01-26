import React, { Component } from "react";
import Button from "../../Button/Button";
import Select from "../../Select/Select";
import { PAGINATE_ACTIONS } from "../Reducers/PaginateReducer";
import styles from "./Pagination.module.scss";

class Pagination extends Component<any> {
  render(): React.ReactNode {
    const { paginationProps } = this.props;
    const {
      pageNumber,
      pageSize,
      totalRecords,
      paginateDispatch,
      paginateAttributes,
    } = paginationProps;
    const { options, label, paginateStyles } = paginateAttributes;
    const actionstyles = {
      color: "primary",
    };
    const onChange = (value: any) => {
      paginateDispatch({
        type: PAGINATE_ACTIONS.CHANGE_PAGE_SIZE,
        selectedValue: value,
      });
    };

    const incrementPageNumber = () => {
      paginateDispatch({ type: PAGINATE_ACTIONS.INCREMENT_PAGE_NUMBER });
    };
    const decrementPageNumber = () => {
      paginateDispatch({ type: PAGINATE_ACTIONS.DECREMENT_PAGE_NUMBER });
    };

    return (
      <>
        <div>
          <Button
            type="button"
            onClick={decrementPageNumber}
            label="Prev"
            actionstyles={actionstyles}
          />
          <span style={paginateStyles}>{pageNumber}</span>
          <Button
            type="button"
            onClick={incrementPageNumber}
            label="Next"
            actionstyles={actionstyles}
          />
          <span className={styles["select"]}>
            <Select options={options} onChange={onChange} />
          </span>
        </div>

        <div className={styles["records"]}>
          Showing records: {pageNumber * pageSize + 1} to{" "}
          {pageNumber * pageSize + pageSize} / {totalRecords}
        </div>
      </>
    );
  }
}

export default Pagination;
