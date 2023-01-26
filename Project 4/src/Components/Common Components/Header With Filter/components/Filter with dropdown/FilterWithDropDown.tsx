import { useState } from "react";
import "../../App.css";
import { data } from "./mockdata";

export default function FilterWithDropDown() {
  const [value, setValue] = useState("");

  const onChange = (event:any) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm:any) => {
    setValue(searchTerm);
    // our api to fetch the search result   
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
         
        </div>
        <div className="dropdown">
          {data.filter((item:any) => {
              const searchTerm = value.toLowerCase();
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
                className="dropdown-row"
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
