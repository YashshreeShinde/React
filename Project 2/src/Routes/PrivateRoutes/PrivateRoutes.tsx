import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../Components/Auth/Context/AuthProvider';

const PrivateRoutes = () => {
    const {auth:{accessToken}}=useContext(AuthContext);
    return(
        accessToken ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes