// src/components/Header.tsx
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import './header.css'; // Import the CSS file for styling

const Header: React.FC = () => {
  const { instance, accounts } = useMsal();
  const navigate = useNavigate();
  const isAuthenticated = accounts.length > 0;

  const handleLogout = () => {
    instance.logoutPopup().then(() => {
      navigate('/login');
    }).catch(e => {
      console.error(e);
    });
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="nav-buttons">
        {isAuthenticated ? (
          <>
            <button className="nav-button" onClick={handleProfile}>Profile</button>
            <button className="nav-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className="nav-button" onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </header>
  );
};

export default Header;