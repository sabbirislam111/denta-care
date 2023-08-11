import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const AdminRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, loadingAdmin] = useAdmin(user?.email);  
    const location = useLocation()


    if(loading || loadingAdmin){
        return <h1>Loading....</h1>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRouter;