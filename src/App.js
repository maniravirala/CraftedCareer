import React, { useEffect } from 'react';
import { useLocation, Navigate, Routes, Route } from 'react-router-dom';
import Header from './app/Header';
//import Header from './app/Header/Header'; 
import Resume from './app/Resume/Resume';
import AuthDashboard from './app/Dashboard/AuthDashboard';
import PublicDashboard from './app/Dashboard/PublicDashboard';
import Login from './app/Auth/Login';
import Register from './app/Auth/Register';
import ForgotPassword from './app/Auth/PasswordReset/ForgotPassword';
import ResetPassword from './app/Auth/PasswordReset/ResetPassword';
import NotFound from './app/Pages/404';
import { hero_dark, hero_light } from './assets';

// Contexts
import { useAuth } from './contexts/authContext/AuthContext';
import { useDarkMode } from "./contexts/Theme/DarkModeContext";
import Profile from './app/Profile/Profile';
import { Spin } from 'antd';
import Test from './app/Test/Test';
import DownloadResume from './app/Resume/DownloadResume';

function App() {
    const location = useLocation();
    const shouldRenderHeader = location.pathname !== '/404' && location.pathname !== '/download';
    const { darkMode } = useDarkMode();
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
    }, [loading]);

    if (loading) {
        return <Spin fullscreen />;
    }

    return (
        <>
            {shouldRenderHeader && <Header />}
            <div className=""> {/*h-[calc(100vh-4rem)] overflow-auto*/}
                <div
                    className="absolute inset-0 z-[-100] bg-cover bg-no-repeat h-screen"
                    style={{
                        backgroundImage: darkMode
                            ? `url(${hero_dark})`
                            : `url(${hero_light})`,
                    }}
                ></div>

                <Routes>
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace={true} />} />
                    <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace={true} /> : <Login />} />
                    <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" replace={true} /> : <Register />} />
                    <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" replace={true} /> : <ForgotPassword />} />
                    <Route path="/reset-password/:token" element={isAuthenticated ? <Navigate to="/dashboard" replace={true} /> : <ResetPassword />} />
                    <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
                    <Route path="/dashboard" element={isAuthenticated ? <AuthDashboard /> : <PublicDashboard />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace={true} />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/download" element={<DownloadResume />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
