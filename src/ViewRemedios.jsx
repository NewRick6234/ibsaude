import { useState, useEffect } from "react";

// Define a URL base puxando da Vercel ou do fallback do seu backend
const API_URL = import.meta.env.VITE_API_URL || 'https://back-end-eta-ten.vercel.app';

function ViewRemedios() {
    let titulo = {
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center"
    };

    let tabela = {
        marginTop: "40px",
        border: "1px solid black"
    };

    let linhaTabela = {
        borderBottom: "1px solid black",
        borderRight: "1px solid black",
    };

    let contCabecalho = {
        padding: "20px",
    };

    const [remedios, setRemedios] = useState([]);

    useEffect(() => {
        async function buscarDados() {
            try {
                // Chama a rota /remedios do seu backend Express
                const resposta = await fetch(`${API_URL}/remedios`);
                const dados = await resposta.json();
                
                // Como sua API retorna { total: X, remedios: [...] }, pegamos dados.remedios
                if (dados && dados.remedios) {
                    setRemedios(dados.remedios);
                }
            } catch (error) {
                console.error("Erro ao buscar remédios do backend:", error);
            }
        }     
        buscarDados();
    }, []);

    return (
        <>
            <h1 style={titulo} className="sm:text-3xl">Tabela de Medicamentos</h1>

            <table style={tabela} className="w-full min-w-[760px] table-fixed" border="1" cellPadding="8" cellSpacing="0">
              <thead>
                <tr style={linhaTabela}>
                  <th className="px-6" style={contCabecalho}>Nome</th>
                  <th className="whitespace-normal break-words" style={contCabecalho}>Classificação</th>
                  <th className="px-6" style={contCabecalho}>Código</th>
                  <th className="px-6" style={contCabecalho}>Código Interno</th>
                  <th className="px-6" style={contCabecalho}>Uso específico</th>
                </tr>
              </thead>
              <tbody>
                {remedios.map((remedio, index) => (
                  <tr style={linhaTabela} key={remedio.id || index}>
                    <td className="text-center" style={contCabecalho}>{remedio.nome}</td>
                    <td className="whitespace-normal break-words text-center align-middle" style={contCabecalho}>{remedio.classificacao || '-'}</td>
                    <td className="px-6 text-center" style={contCabecalho}>{remedio.codigo}</td>
                    <td className="px-6 text-center" style={contCabecalho}>-</td>
                    <td className="text-center" style={contCabecalho}>{remedio.uso || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </>
    );
}

export default ViewRemedios;