import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <h1>Loading....</h1>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouter;