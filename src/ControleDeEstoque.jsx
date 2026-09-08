import Container from "./componentes/Container";
import { useState, useEffect } from "react";

function ControledeEstoque() {
  let titulo = {
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px"
  };

  let linhaTabela = {
    borderBottom: "1px solid #e5e7eb",
  };

  let th = {
    textAlign: "center",
    padding: "12px",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold"
  };

  const corSinaleira = (quantidade, minimo) => {
    if (quantidade === 0) return "🔴";
    if (quantidade <= minimo) return "🟠";
    return "🟢";
  };

  const Sinaleira = ({ validade = 0, minimo = 0 }) => {
    if (validade <= 0) {
      return (
        <span className="relative inline-flex h-3 w-3 align-middle">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      );
    }

    if (validade <= minimo) {
      return <span className="inline-block h-3 w-3 rounded-full bg-orange-500 align-middle" />;
    }

    return <span className="inline-block h-3 w-3 rounded-full bg-green-500 align-middle" />;
  };

  const [remedios, setRemedios] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      try {
        const resposta = await fetch('/remedios.json');
        const dados = await resposta.json();
        setRemedios(dados);
      } catch (erro) {
        console.error("Erro ao carregar os dados:", erro);
      }
    }
    buscarDados();
  }, []);

  return (
    <Container>
      <h1 style={titulo}>Controle de Estoque Inteligente</h1>

      {/* Div container responsável por aplicar o border-radius e fechar a borda sem quebrar */}
      <div className="w-full border border-gray-300 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr style={linhaTabela}>
              <th style={th}>Nome do Medicamento</th>
              <th style={th}>Saldo atual por Medicamento</th>
              <th style={th}>Controle por Lote</th>
              <th style={th}>Controle por Validade</th>
              <th style={th}>Estoque Baixo</th>
              <th style={th}>Medicamentos próximos ao Vencimento</th>
              <th style={th}>Movimentações Realizadas</th>
            </tr>
          </thead>

          <tbody>
            {remedios.map((remedio, index) => (
              <tr style={linhaTabela} key={index} className="hover:bg-gray-50">
                <td className="text-center p-3">{remedio.nome}</td>
                <td className="text-center p-3">{remedio.saldoAtual}</td>
                <td className="text-center p-3">{remedio.controlePorLote}</td>
                <td className="text-center p-3">{remedio.controlePorValidade}</td>
                <td className="text-center p-3">
                  {corSinaleira(remedio.saldoAtual, 10)}
                </td>
                <td className="text-center p-3">
                  <Sinaleira validade={remedio.medicamentosProximosAoVencimento} minimo={10} />
                </td>
                <td className="text-center p-3">{remedio.movimentacoesRealizadas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />

      <div style={{
        backgroundColor: '#e8f5fd',
        padding: '15px',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'flex',
        justify: 'space-around',
        gap: '15px'
      }}>
        <div>
          <p className="mb-2">Status da Validade:</p>
          <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
            <span>🟢 Verde → validade maior que 30 dias.</span>
            <span>🟠 Laranja → validade entre 10 e 30 dias.</span>
            <span>🔴 Vermelho → validade 1 dia.</span>
          </div>
        </div>

        <div>
          <p className="mb-2">Status do Estoque:</p>
          <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
            <span>🟢 Verde → quantidade maior que 10.</span>
            <span>🟠 Laranja → quantidade entre 1 e 10.</span>
            <span>🔴 Vermelho → quantidade igual a 0.</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ControledeEstoque;