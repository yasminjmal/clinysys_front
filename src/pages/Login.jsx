import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // 👇 À remplacer plus tard par un vrai appel au backend
    const utilisateurs = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'user1', password: 'user123', role: 'user' },
    ];

    const user = utilisateurs.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      setMessage('Utilisateur non existant');
    } else if (user.role !== role) {
      setMessage('Utilisateur existant mais rôle incorrect');
    } else {
      setMessage(`Accès réussi Mr/Mme ${user.username}`);
      setTimeout(() => {
        navigate(role === 'admin' ? '/admin' : '/acceuil');
      }, 1000);
    }
  };

  return (
    <div style={styles.page}>
        <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.box}>
        {message && <div style={styles.message}>{message}</div>}
        <h2 style={styles.title}>Connexion</h2>
        <input
          type="text"
          placeholder="Nom utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" style={styles.button}>Se connecter</button>
      </form>
      </div>
    </div>
  );
}

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',        // centre verticalement
        justifyContent: 'center',    // centre horizontalement
        backgroundColor: '#f2f2f2',  // blanc un peu sale
      },    
  box: {
    backgroundColor: '#b2dfdb', // bleu-vert clair
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
  },
  input: {
    padding: '10px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '6px',
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  message: {
    color: 'darkred',
    backgroundColor: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
};
