import React, { useContext } from "react";
import Pagination from "../Pagination/Pagination";
import { ActionsMap } from "./ActionsMap";
import { tableStyle } from "./TableStyles";
import { PopUpContext } from './../../../Pop up/PopUpProvider';

const Table = ({tableProps,tableStyles={tableStyle},paginate,paginationProps}: any) => {
  const { tableAttributes:{columns, actions},tableData, }=tableProps
 
  const tstyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns.length+1},1fr)`,
  };

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
     
      <div style={tableStyles}>
        <div>
          <div style={tstyles}>
            {columns?.map((c: any,index:number) => {
              return (
                <span key={index} style={tableStyles["thead"]}>
                  {c.displayName}
                </span>
              );
            })}
          </div>
        {tableData?.map((item: any) => {
          return (
            <div key={item.id} style={tstyles}>
              {columns?.map((c: any,index:number) => {
                if (c.keypath != "actions") {
                  const value = getValue(item, c.keypath);
                  return <span style={tableStyles["tcell"]} key={index}>{value}</span>;
                } else {
                  actionElements = actions.map((action: any,index:number) => {
                    const Field = ActionsMap[action.type];

                    return <Field {...action} data={item} key={index} actionstyles={action.actionstyles} />
                  });
                  return <span style={tableStyles["tcell"]} key={index}>{actionElements}</span>;        
                }               
              })}
              
            </div>

          );
        })}
      </div>
      <div style={tableStyles.paginate}>
          {
            paginate && <Pagination paginationProps={paginationProps}/>
          }
      </div>
      </div>
    </>
  );
};

export default Table;
