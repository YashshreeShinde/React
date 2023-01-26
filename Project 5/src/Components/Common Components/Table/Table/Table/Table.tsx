import React, { Component, useContext } from "react";
import Pagination from "../Pagination/Pagination";
import { ActionsMap } from "./ActionsMap";
import { tableStyle } from "./TableStyles";
import { PopUpContext } from './../../../Pop up/PopUpProvider';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

class Table extends Component<any> {
  render(){
  const {tableProps,tableStyles={tableStyle},paginate,paginationProps}=this.props
  const { tableAttributes:{columns, actions},tableData, }=tableProps
 console.log(tableProps);
  // const tstyles = {
  //   display: "grid",
  //   gridTemplateColumns: `repeat(${columns.length+1},1fr)`,
  // };

  let actionElements: any;

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
     
      <TableContainer style={tableStyles}>
        <Table>
          <TableHead>
          <TableRow >
            {columns?.map((c: any,index:number) => {
              return (
                <span key={index} style={tableStyles["thead"]}>
                  {c.displayName}
                </span>
              );
            })}
         </TableRow>
          </TableHead>
          <TableBody>
        {tableData?.map((item: any) => {
          return (
            <TableRow>
              {columns?.map((c: any,index:number) => {
                if (c.keypath != "actions") {
                  const value = getValue(item, c.keypath);
                  return <TableCell style={tableStyles["tcell"]} key={index}>{value}</TableCell>;
                } else {
                  actionElements = actions.map((action: any,index:number) => {
                    const Field = ActionsMap[action.type];

                    return <Field {...action} data={item} key={index} actionstyles={action.actionstyles} />
                  });
                  return <TableCell style={tableStyles["tcell"]} key={index}>{actionElements}</TableCell>;        
                }               
              })}
              </TableRow>
          )})}
              
              </TableBody>
  
      </Table>
      <div style={tableStyles.paginate}>
          {
            paginate && <Pagination paginationProps={paginationProps}/>
          }
        </div>
     
      </TableContainer>
    </>
  );
};
}

export default Table;
