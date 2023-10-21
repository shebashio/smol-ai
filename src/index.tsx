import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import { AuthProvider } from './services/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);