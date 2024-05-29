// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';
import AppRoutes from './routes';
import Header from './components/Header'; 
import './App.css';
const msalInstance = new PublicClientApplication(msalConfig);

const App: React.FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
    <Router>
      <div className="app-container">
        <Header /> {/* Add the Header component here */}
          <div className="main-content">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </MsalProvider>
  );
};

export default App;
