// src/authConfig.ts
import { Configuration, LogLevel } from '@azure/msal-browser';

const {
  REACT_APP_CLIENT_ID,
  REACT_APP_TENANT_ID,
  REACT_APP_REDIRECT_URI
} = process.env;

export const msalConfig: Configuration = {
  auth: {
    clientId: REACT_APP_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${REACT_APP_TENANT_ID}`,
    redirectUri: REACT_APP_REDIRECT_URI || 'http://localhost:3000',
    postLogoutRedirectUri: REACT_APP_REDIRECT_URI || 'http://localhost:3000'
  },
  cache: {
    cacheLocation: 'sessionStorage', // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string, containsPii: boolean) => {
        if (containsPii) { 
          return; 
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
        }
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false
    }
  }
};

export const loginRequest = {
  scopes: ['User.Read']
};

export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me'
};
