import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const access_token = Cookies.get('access_token');
        if (access_token) {
            setToken(access_token);
            setIsAuthenticated(true);
        }
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const SignIn = (newToken) => {
        setToken(newToken);
        setIsAuthenticated(true);
    };

    const SignOut = () => {
        setToken(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, SignIn, SignOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

