import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './ResetCSS/Reset.css';
import LoginProvider from './LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <LoginProvider>
      <App />
    </LoginProvider>

  </>
);


