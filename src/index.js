import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';
import {Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot (document.getElementById ('root'));

root.render (
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}>
      <App />
      <Toaster />
    </GoogleOAuthProvider>

  </React.StrictMode>
);

reportWebVitals ();
