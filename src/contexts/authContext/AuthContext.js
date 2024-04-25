import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const storedData = JSON.parse(localStorage.getItem('userData'));

    useEffect(() => {
        if (storedData && storedData.userToken) {
            setToken(storedData.userToken);
            setUserData(storedData.user);
            setIsAuthenticated(true);
        }
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const SignIn = (newToken, newUser) => {
        localStorage.setItem('userData', JSON.stringify({ userToken: newToken, user: newUser }));
        setToken(newToken);
        setUserData(newUser);
        setIsAuthenticated(true);
    };

    const SignOut = () => {
        localStorage.removeItem('userData');
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ token, userData, isAuthenticated, SignIn, SignOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

