import { useLocation, Navigate,  Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import React from "react";

const RequireAuth = ({allowedRoles}) => {
    const { user } = useAuth();
    const location = useLocation();
    
    if (allowedRoles.includes(user?.Role_ID)) {
        console.log('User is authorized!');
        return <Outlet />;
    }
    if (user) {
        console.log('User is not authorized!');
        return <Navigate to="/other" state={{from: location}} />;
    }
    console.log('Redirecting to login page...');
    return <Navigate to="/login" state={{ from: location }} />;
    
}

export default RequireAuth;