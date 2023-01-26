import styles from "../../../Pages/MainPage.module.scss"
import { IMenuItemProps } from "./Menu.types"

export const MenuItem = ({data,setSelectedUserDetails}:IMenuItemProps) => {

  return (
    <div className={styles.menuItem} 
         onClick={()=>setSelectedUserDetails(data)}>
      {data?.name} 
    </div>
    
  )
}
