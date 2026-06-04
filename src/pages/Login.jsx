import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    senha: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function entrar(e) {

    e.preventDefault();

    if (form.email && form.senha) {

      alert("Login realizado com sucesso!");

      navigate("/vagas");

    } else {

      alert("Preencha todos os campos");

    }
  }

  return (
    <div className="container">

      <h1>🔐 Login</h1>

      <form onSubmit={entrar} className="job-card">

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </div>
  );
}