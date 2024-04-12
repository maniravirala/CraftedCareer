import React from 'react';
import { useAuth } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';

const GuardedRoute = ({ children }) => {
    const { currentUser } = useAuth();
    return currentUser ? children : <Navigate to="/login" replace={true} />;
};

export default GuardedRoute;
