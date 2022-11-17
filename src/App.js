// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const ativo = {
  color: "green",
};

const inativo = {
  color: "red",
};

const App = () => {
  const dados = mario;
  const precos = dados.compras.map((compra) => {
    return +compra.preco.replace("R$ ", "");
  });

  let total = 0;
  precos.map((preco) => (total = total + preco));
  let gastandoMuito = false;
  if (total > 10000) {
    gastandoMuito = true;
  }

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={dados.ativa ? ativo : inativo}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: {total}</p>
      {gastandoMuito ? <p>Você está gastando muito.</p> : ""}
    </div>
  );
};

export default App;
