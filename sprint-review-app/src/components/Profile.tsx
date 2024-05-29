import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest, graphConfig } from '../authConfig';
import axios from 'axios';
import './profile.css'; // Import CSS for styling

interface UserProfile {
  displayName: string;
  jobTitle: string;
  mail: string;
  userPrincipalName: string;
}

const Profile: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (accounts.length > 0) {
      const request = {
        ...loginRequest,
        account: accounts[0]
      };

      instance.acquireTokenSilent(request).then(response => {
        const accessToken = response.accessToken;
        axios.get(graphConfig.graphMeEndpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(response => {
          setUserProfile(response.data);
        }).catch(error => {
          console.error('Error fetching user profile:', error);
        });
      }).catch(error => {
        console.error('Error acquiring token:', error);
      });
    }
  }, [instance, accounts]);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> {userProfile.displayName}</p>
        <p><strong>Job Title:</strong> {userProfile.jobTitle}</p>
        <p><strong>Email:</strong> {userProfile.mail}</p>
        <p><strong>Username:</strong> {userProfile.userPrincipalName}</p>
      </div>
    </div>
  );
};

export default Profile;
