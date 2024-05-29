// src/SignInButton.tsx
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';
import './signInButton.css';

const SignInButton: React.FC = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleLogin = () => {
    instance.loginPopup().then(response => {
        navigate('/home'); // redirect to the planning page after login
    }).catch(e => {
        console.error(e);
    });
  };

  return <button className="login-button" onClick={handleLogin}>Sign in with Microsoft</button>;
};

export default SignInButton;
