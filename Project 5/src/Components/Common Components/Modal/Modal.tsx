import React, { Component } from 'react'
import styles from "./Modal.module.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import IconComponent from '../Icon Component/IconComponent';
import { withRouter } from '../Routes Component/RoutesComponent';
import { AiFillCloseSquare } from 'react-icons/ai';

class ModalComponent extends Component<any>  {
render(){
  const {navigate}=this.props.router;
  return (
    <div className={styles.background}>
        <div className={styles.content}>
          <AiFillCloseSquare cursor={"pointer"} size={"2rem"} onClick={()=>navigate(-1)}/>
          
          {this.props.children}
          
        </div>
    </div>
  )
}
}

export default withRouter(ModalComponent)