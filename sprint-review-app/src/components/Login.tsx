// src/components/Login.tsx
import React from 'react';
import SignInButton from './SignInButton';
import './login.css';

const Login: React.FC = () => {
  return (
    <div className="login-outer-container">
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Sprint planning</h1>
          <p className="login-subtitle">Please sign in to continue</p>
          <SignInButton />
        </div>
      </div>
    </div>
  );

};

export default Login;
