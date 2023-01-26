import styles from "../../../Pages/MainPage.module.scss"
import { IDetailsProps } from './Details.types';

export const Details = ({data}:IDetailsProps) => {
  const {name,username,email,phone,website}=data;

  return (

    <>
        <div className={styles["details-header"]}>
          <h1>User Details</h1>
        </div>
    
        <div className={styles["details"]}>
          <span>Name:-{name}</span><br/>
          <span>Username:-{username}</span><br/>
          <span>Email:-{email}</span><br/>
          <span>Phone:-{phone}</span><br/>
          <span>Website:-{website}</span><br/>
        </div>
      </>
  
  )
}
