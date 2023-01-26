import { useEffect,useState } from "react";
import {Details} from "../Components/Main Page Components/Details Components/Details";
import { Menu } from "../Components/Main Page Components/Menu Components/Menu"
import { IUserData } from "../Components/Main Page Components/Menu Components/Menu.types"
import { http2 } from "../Utils/Http";
import styles from "./MainPage.module.scss"


export const Main = () => {
  const [usersData, setUsersData] = useState<IUserData[]>()
  const [userDetails,setUserDetails]=useState<IUserData>()

  const getUsersData=async()=>{
    const data=await http2("get","users");
    setUsersData(data);
    console.log(data)
  }

  const setDetails=(data?:IUserData)=>setUserDetails(data)

  useEffect(()=>{
   getUsersData();
  },[])

  return (
  
      <div className={styles["main-container"]}>
          <div className={styles["menu-container"]}>
              <Menu 
                  data={usersData} 
                  setSelectedUserDetails={setDetails}
                  />
          </div>

          <div className={styles["details-container"]}>
            {userDetails && <Details data={userDetails}/>}
          </div>
      </div>
    
  );
};
