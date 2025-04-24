import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ConfigUsers() {
  const [searchId, setSearchId] = useState("");
  const [searchNom, setSearchNom] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      nom: "Ahmed",
      prenom: "Ben Ali",
      equipe: "Dev Front",
      poste: "Développeur",
      role: "Admin",
      dateCreation: "2024-03-01",
      userCreation: "Admin",
      login: "ahmed@mail.com",
      password: "******",
      activated: true,
      nbTickets: 3,
      idsTickets: [101, 102, 103],
    },
    {
      id: 2,
      nom: "Amira",
      prenom: "Bouraoui",
      equipe: "QA",
      poste: "Testeur",
      role: "User",
      dateCreation: "2024-04-01",
      userCreation: "Admin",
      login: "amira@mail.com",
      password: "******",
      activated: false,
      nbTickets: 1,
      idsTickets: [104],
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const navigate = useNavigate();

  useEffect(() => {
    let result = users;

    if (searchId.trim() !== "") {
      result = result.filter(user => user.id.toString().includes(searchId));
    }

    if (searchNom.trim() !== "") {
      result = result.filter(user => user.nom.toLowerCase().startsWith(searchNom.toLowerCase()));
    }

    setFilteredUsers(result);
  }, [searchId, searchNom, users]);

  return (
    <div className="bg-[#f5f5f5] min-h-screen p-6">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-[#b2e2e2] px-4 py-2 rounded-md mb-6 shadow">
        <h1 className="text-xl font-semibold">Configuration des Utilisateurs</h1>
        <button
          onClick={() => window.history.back()}
          className="bg-[#fdfdfd] hover:bg-[#eeeeee] px-4 py-2 rounded shadow text-sm"
        >
          Retourner
        </button>
      </div>

      {/* Ligne 1 */}
      {/* Ligne 1 */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <button onClick={() => navigate('/ajouter-utilisateur')} className="bg-[#fdfdfd] hover:bg-[#eeeeee] px-6 h-12 rounded-lg shadow text-base font-medium">
          Ajouter un utilisateur
        </button>

        <input
          type="text"
          placeholder="Rechercher par ID..."
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
          className="border border-gray-300 px-4 h-12 rounded-lg shadow text-base w-[300px] bg-white"
        />
      </div>


      {/* Ligne 2 */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <span className="text-base font-medium mr-2">Filtrer :</span>

        <select className="border border-gray-300 px-4 h-12 rounded-lg text-base bg-white w-[180px]">
          <option>Équipes</option>
        </select>

        <select className="border border-gray-300 px-4 h-12 rounded-lg text-base bg-white w-[180px]">
          <option>Postes</option>
        </select>

        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchNom}
          onChange={e => setSearchNom(e.target.value)}
          className="border border-gray-300 px-4 h-12 rounded-lg shadow text-base w-[300px] bg-white"
        />
      </div>

      {/* Tableau */}
      <table className="w-full border border-black text-sm">
        <thead className="bg-[#b2e2e2]">
          <tr>
            <th className="border border-black p-2">ID</th>
            <th className="border border-black p-2">Nom et Prénoms</th>
            <th className="border border-black p-2">Équipe</th>
            <th className="border border-black p-2">Poste</th>
            <th className="border border-black p-2">Rôle</th>
            <th className="border border-black p-2">Date création</th>
            <th className="border border-black p-2">User création</th>
            <th className="border border-black p-2">Activité</th>
            <th className="border border-black p-2">Infos</th>
            <th className="border border-black p-2">Modifier</th>
            <th className="border border-black p-2">Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td className="border border-black p-2">{user.id}</td>
              <td className="border border-black p-2">{user.nom} {user.prenom}</td>
              <td className="border border-black p-2">{user.equipe}</td>
              <td className="border border-black p-2">{user.poste}</td>
              <td className="border border-black p-2">{user.role}</td>
              <td className="border border-black p-2">{user.dateCreation}</td>
              <td className="border border-black p-2">{user.userCreation}</td>
              <td className="border border-black p-2">{user.activated ? "Oui" : "Non"}</td>
              <td className="border border-black p-2">
                <button className="text-green-600 hover:underline">Infos</button>
              </td>
              <td className="border border-black p-2">
                <button className="text-blue-600 hover:underline">Modifier</button>
              </td>
              <td className="border border-black p-2">
                <button className="text-red-600 hover:underline">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConfigUsers;
