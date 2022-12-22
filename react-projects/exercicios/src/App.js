import React from "react";
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => console.log(response));
  }

  function handleChange({ target }) {
    const { id, value } = target;

    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        name="senha"
        type="password"
        value={form.senha}
        onChange={handleChange}
      />

      <label htmlFor="cep">Cep</label>
      <input
        id="cep"
        name="cep"
        type="text"
        value={form.cep}
        onChange={handleChange}
      />

      <label htmlFor="rua">Rua</label>
      <input
        id="rua"
        name="rua"
        type="text"
        value={form.rua}
        onChange={handleChange}
      />

      <label htmlFor="numero">Numero</label>
      <input
        id="numero"
        name="numero"
        type="text"
        value={form.numero}
        onChange={handleChange}
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        name="bairro"
        type="text"
        value={form.bairro}
        onChange={handleChange}
      />

      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        name="cidade"
        type="text"
        value={form.cidade}
        onChange={handleChange}
      />

      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        name="estado"
        type="text"
        value={form.estado}
        onChange={handleChange}
      />

      <button>Cadastrar</button>
    </form>
  );
};

export default App;
