import React from 'react';
import { useLocation, Navigate, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
// import Header from './app/Header';
import Header from './app/Header/Header';
import GuardedRoute from './guards/GuardedRoute';
import Resume from './app/Resume/Resume';
import DownloadResume from './app/Resume/DownloadResume';
import AuthDashboard from './app/Dashboard/AuthDashboard';
import Login from './app/Auth/Login';
import Register from './app/Auth/Register';
import NotFound from './app/Pages/404';
import { FormDataProvider } from './contexts/Data/FormDataContext';
import { DarkModeProvider } from './contexts/Theme/DarkModeContext';

function App() {
    const location = useLocation();
    const shouldRenderHeader = location.pathname !== '/404' && location.pathname !== '/download';

    return (
        <AuthProvider>
            <DarkModeProvider>
                    <FormDataProvider>
                        {shouldRenderHeader && <Header />}
                        <div className=" bg-background dark:bg-background-dark"> {/*h-[calc(100vh-4rem)] overflow-auto*/}
                            <Routes>
                                <Route path="/404" element={<NotFound />} />
                                <Route path="*" element={<Navigate to="/404" replace={true} />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/" element={<Navigate to="/login" replace={true} />} />
                                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                                <Route path="/dashboard" element={<AuthDashboard />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="/download" element={<GuardedRoute><DownloadResume /></GuardedRoute>} />
                            </Routes>
                        </div>
                    </FormDataProvider>
            </DarkModeProvider>
        </AuthProvider>
    );
}

export default App;
