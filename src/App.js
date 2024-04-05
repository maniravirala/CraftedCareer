import React, { lazy, Suspense } from 'react';
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

// Lazy load components
// const Login = lazy(() => import('./app/Auth/Login'));
// const Register = lazy(() => import('./app/Auth/Register'));
// const Dashboard = lazy(() => import('./app/Dashboard/Dashboard'));
// const DownloadResume = lazy(() => import('./app/Pages/DownloadResume'));
// const Resume = lazy(() => import('./app/Pages/Resume'));

function App() {
    const location = useLocation();
    const shouldRenderHeader = location.pathname !== '/404' && location.pathname !== '/download';

    return (
        <AuthProvider>
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
                    <Route path="/download" element={<DownloadResume />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
