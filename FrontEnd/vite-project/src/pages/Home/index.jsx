import { useEffect, useState } from "react";
import api from "../../services/api";
import Trash from "../../assets/reuse-16.ico";
import "./style.css";

function Home() {
  // 🔹 STATES
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // 🔹 GET - buscar usuários
  async function getUsers() {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  // 🔹 POST - cadastrar usuário
  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !age || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await api.post("/users", {
        name: name,
        age: Number(age),
        email: email,
      });

      setName("");
      setAge("");
      setEmail("");

      getUsers();
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  }

  // 🔹 DELETE - remover usuário
  async function handleDelete(id) {
    try {
      await api.delete(`/users/${id}`);
      getUsers();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  // 🔹 PUT - editar usuário
  async function handleUpdate(id) {
    try {
      // Pegar os dados atuais do usuário
      const user = users.find(u => u.id === id);

      const newName = prompt("Digite o novo nome:", user.name);
      const newAge = prompt("Digite a nova idade:", user.age);
      const newEmail = prompt("Digite o novo email:", user.email);

      // Se cancelar algum prompt, não atualiza
      if (!newName || !newAge || !newEmail) return;

      await api.put(`/users/${id}`, {
        name: newName,
        age: Number(newAge),
        email: newEmail,
      });

      getUsers(); // atualiza lista
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {/* Formulário de cadastro */}
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Usuários</h1>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      {/* Botão Atualizar */}
      <button id="update-btn" type="button" onClick={getUsers}>
        Atualizar Lista
      </button>


      {/* Lista de usuários */}
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>

            
              <div className="card-buttons">
                <button className="edit-btn" onClick={() => handleUpdate(user.id)}>Editar</button>
                
              </div>


              {/* Botão Deletar */}
              <button onClick={() => handleDelete(user.id)}>
                <img src={Trash} className="icon" alt="Excluir" />
              </button>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Home;
