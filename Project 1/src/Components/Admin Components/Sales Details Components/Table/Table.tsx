import React from 'react'
import styles from "./Table.module.scss"

const Table = ({data}:any) => {

  const theads=Object.keys(data[0]);
  const getCaps=(word:string)=>word.toUpperCase()
  
  return (
    <section className={styles["table-container"]}>
    <div className={styles["table-headings"]}>
        <table>
        <thead>
            {
            theads.map((thead)=>{
                return <th>{getCaps(thead)}</th>
            })
            }
        </thead>
        <tbody>
          {data &&
            data.map((row:any) => (
              <tr>
                {theads.map((col) => (
                  <td>{row[col]}</td>
                ))}
              </tr>
            ))}
        </tbody>
       </table> 
    </div>
    </section>
  )
}

export default Table