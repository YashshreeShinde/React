import React from 'react'
import { GoogleLogout } from 'react-google-login';
import { clientID } from './../../Constants/Constants';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const navigate=useNavigate();
  const onSuccess=()=>{
    navigate("/login");
  }
  return (
    <div>
        <GoogleLogout 
        clientId={clientID}
        buttonText='LOGOUT'
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout