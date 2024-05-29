// src/routes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useIsAuthenticated } from '@azure/msal-react';
import Home from './components/Home';
import Login from './components/Login';
import Planning from './components/Planning';
import Profile from './components/Profile';

const AppRoutes: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/planning" element={isAuthenticated ? <Planning /> : <Navigate to="/login" />} />
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />  
    </Routes>
  );
};

export default AppRoutes;
