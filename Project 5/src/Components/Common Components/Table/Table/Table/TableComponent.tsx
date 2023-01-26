import { Button, TableBody, TableCell } from "@mui/material";
import { TableContainer, TableHead, TableRow, Table } from "@mui/material";
import { Component, ReactNode } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { tableStyle } from "./TableStyles";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import styles from "./Table.module.scss"

class TableComponent extends Component<any> {
  render(): ReactNode {
    const {
      tableProps,
      tableStyles = { tableStyle },
      paginate,
      paginationProps,
    } = this.props;
    const {
      tableAttributes: { columns, actions },
      tableData,
    } = tableProps;

    const getValue: any = (item: any, keypath: string) => {
    
      const keypathArray = keypath.split(".");
      const value = keypathArray.reduce((acc: any, curr: any) => {
        acc = acc[curr];
        return acc;
      }, item);
      return `${value}`;
    };
   
    return (
      <>
            <TableContainer className={styles["container"]}>
              <Table>
                <TableHead>
                  <TableRow className={styles["header"]}>
                    {columns.map((header: any, index: any) => {
                      return (
                        <TableCell sx={{fontSize:'1rem',margin:0,borderBottom:"1px solid"}} key={index}>{header.displayName}</TableCell>
                      );
                    })}
                    {actions.length > 0 && <TableCell  sx={{fontSize:'1rem',margin:0,borderBottom:"1px solid"}}>Actions</TableCell>}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {tableData?.map((data: any) => {
                    return (
                      <TableRow key={data.id}>
                        {columns.map((header: any) => {
                          return (
                            <TableCell sx={{fontSize:'1rem',margin:0}} key={header.keypath}>
                              {getValue(data, header.keypath)}
                            </TableCell>
                          );
                        })}
                        <TableCell>
                        {actions.length > 0 && (
                          <div>
                            {actions.map((action: any, index: any) => {
                              
                              return (
                                <Link to={action.link} state={{data}}>
                                  <Button
                                    key={index}
                                    size="small"
                                    style={{ margin: "1rem" }}
                                    variant="contained"
                                    color={
                                      action.label === "Edit"
                                        ? "success"
                                        : "error"
                                    }
                                  >
                                    {action.label}
                                  </Button>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={tableStyles.paginate}>
              {paginate && <Pagination paginationProps={paginationProps} />}
            </div>
         
   
      </>
    );
  }
}
export default TableComponent;
