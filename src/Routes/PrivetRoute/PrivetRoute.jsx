import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Loyout/Pages/Loading/Loading';



const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user,loading } = useContext(AuthContext)
    if(loading){
        return <Loading/>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;