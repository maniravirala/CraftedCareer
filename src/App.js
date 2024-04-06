import React from 'react';
import { useLocation, Navigate, Routes, Route } from 'react-router-dom';
import { Result } from 'antd';
import { AuthProvider } from './contexts/authContext';
import Header from './app/Header';
import GuardedRoute from './guards/GuardedRoute';
import Resume from './app/Resume/Resume';
import DownloadResume from './app/Resume/DownloadResume';
import Dashboard from './app/Dashboard/Dashboard';
import Login from './app/Auth/Login';
import Register from './app/Auth/Register';
import { FormDataProvider } from './contexts/Data/FormDataContext';

function App() {
    const location = useLocation();
    const shouldRenderHeader = location.pathname !== '/404' && location.pathname !== '/download';

    return (
        <AuthProvider>
            <FormDataProvider>
                {shouldRenderHeader && <Header />}
                <div className="">
                    <Routes>
                        <Route path="/404" element={<Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." className="h-screen" />} />
                        <Route path="*" element={<Navigate to="/404" replace={true} />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Navigate to="/login" replace={true} />} />
                        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                        <Route path="/dashboard" element={<GuardedRoute><Dashboard /></GuardedRoute>} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/download" element={<GuardedRoute><DownloadResume /></GuardedRoute>} />
                    </Routes>
                </div>
            </FormDataProvider>
        </AuthProvider>
    );
}

export default App;
