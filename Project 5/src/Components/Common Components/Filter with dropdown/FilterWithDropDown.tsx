import { Component, useState } from "react";
import styles from "./FilterWithDropDown.module.scss"
import { data } from "./mockdata";

class FilterWithDropDown extends Component<any,any>{
  constructor(props: any) {
    super(props);
    this.state = {
      value:""
    };
  }
  render(){
  const onChange = (event:any) => {
    this.setState({...this.state,value:event.target.value})
  };

  const onSearch = (searchTerm:any) => {
    this.setState({...this.state,value:searchTerm})
  };

  return (
    <div className={styles["filter"]}>

      <div className={styles["search-container"]}>
        <div className={styles["search-box"]}>
          <input type="text" value={this.state.value} onChange={onChange} />
         
        </div>
        <div className={styles["dropdown"]}>
          {data.filter((item:any) => {
              const searchTerm = this.state.value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item:any) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className={styles["item"]}
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
            }
}
export default FilterWithDropDown;