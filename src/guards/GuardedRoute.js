import React from 'react';
import { useAuth } from '../contexts/authContext/AuthContext';
import { Navigate } from 'react-router-dom';

const GuardedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" replace={true} />;
};

export default GuardedRoute;
