import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Admin from './pages/Admin';
// pages à créer plus tard
import ConfigModules from './pages/ConfigModules';
import ConfigUsers from './pages/ConfigUsers';
import ConfigClients from './pages/ConfigClients';
import ConfigTickets from './pages/ConfigTickets';
import AjouterUtilisateur from './pages/AjouterUtilisateur';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/config_modules" element={<ConfigModules />} />
        <Route path="/config_users" element={<ConfigUsers />} />
        <Route path="/config_clients" element={<ConfigClients />} />
        <Route path="/config_tickets" element={<ConfigTickets />} />
        <Route path="/ajouter-utilisateur" element={<AjouterUtilisateur />} />

      </Routes>
    </Router>
    
  );
}

export default App;
 