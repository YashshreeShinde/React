import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import AppContext from '../App/Context/AppProvider';

const ProtectedRoutes = () => {
    const {app:{accessToken}}=useContext(AppContext);
    return(
        accessToken ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes