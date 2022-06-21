import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './AuthProvider';

const ProtectedRoutes = () => {
    const {auth} = useAuth();
    let authToken = {'token':false}
    authToken.token = localStorage.getItem('token')?true:false;
    return(
        authToken.token && auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes;