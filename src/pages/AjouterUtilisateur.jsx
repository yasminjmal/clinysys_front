import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";
import "./AjouterUtilisateur.css";

function AjouterUtilisateur() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    poste: "",
    equipe: "",
    role: "user",
    dateCreation: new Date().toISOString().split("T")[0],
    userCreation: "AdminConnecté",
    activite: "actif",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.");
      return;
    }
    console.log("Utilisateur ajouté :", formData);
    navigate("/configusers");
  };

  return (
    <div className="ajouter-utilisateur-page d-flex align-items-center justify-content-center">
      <Container className="form-container shadow p-4 rounded">
        <Form onSubmit={handleSubmit}>
          <Row>
            {/* Colonne gauche */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Login (email)</Form.Label>
                <Form.Control
                  type="email"
                  name="login"
                  value={formData.login}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirmer le mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Poste</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    name="poste"
                    placeholder="Filtrer poste..."
                    value={formData.poste}
                    onChange={handleChange}
                  />
                  <Button variant="outline-secondary">+</Button>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Activité</Form.Label>
                <Form.Select
                  name="activite"
                  value={formData.activite}
                  onChange={handleChange}
                >
                  <option value="actif">Actif</option>
                  <option value="congé">En congé</option>
                  <option value="introuvable">Introuvable</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Colonne droite */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Équipe</Form.Label>
                <Form.Control
                  type="text"
                  name="equipe"
                  placeholder="Filtrer équipe..."
                  value={formData.equipe}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rôle</Form.Label>
                <Form.Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date de création</Form.Label>
                <Form.Control
                  type="text"
                  name="dateCreation"
                  value={formData.dateCreation}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Créé par</Form.Label>
                <Form.Control
                  type="text"
                  name="userCreation"
                  value={formData.userCreation}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Boutons */}
          <div className="text-center mt-4">
            <Button type="submit" className="me-3 custom-button">
              Ajouter
            </Button>
            <Button variant="secondary" onClick={() => navigate("/configusers")}>
              Annuler
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AjouterUtilisateur;
