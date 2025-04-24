import React from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

const Admin= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Ici tu peux aussi effacer le token ou la session si nécessaire
    navigate('/');
  };

  return (
    <div>
      <div className="navbar">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Déconnecter
        </button>
      </div>

      <div className="container">
        <div className="card" onClick={() => navigate('/config_modules')}>
          Modules
        </div>
        <div className="card" onClick={() => navigate('/config_users')}>
          Utilisateurs
        </div>
        <div className="card" onClick={() => navigate('/config_clients')}>
          Clients
        </div>
        <div className="card" onClick={() => navigate('/config_tickets')}>
          Tickets
        </div>
      </div>
    </div>
  );
};

export default Admin;
