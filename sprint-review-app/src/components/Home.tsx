// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import './home.css';

const Home: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (accounts.length > 0) {
      instance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0]
      }).then(response => {
        setUserData(response.account);
      }).catch(err => {
        console.error(err);
      });
    }
  }, [accounts, instance]);

  return (
    <div>
      <h1>Welcome to Sprint Planning Demo collection!</h1>
      {userData && (
        <div>
          <p>Welcome, {userData.name}</p>
          
        </div>
      )}
    </div>
  );
};

export default Home;
