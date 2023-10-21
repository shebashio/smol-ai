import React, { useContext } from 'react';
import { AuthContext } from '../services/auth';
import '../styles/Logout.css';

const Logout: React.FC = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="logout">
      <button id="logoutButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;