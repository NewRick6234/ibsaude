
import { useState, useEffect } from "react"

function ControledeEstoque() {
    let titulo = {
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center"
    }

    let tabela = {
        marginTop: "40px",
        border: "1px solid black"
    }

    let linhaTabela = {
        borderBottom: "1px solid black",
    }

    const [remedios, setRemedios] = useState([])

    useEffect(
        () => {
            async function buscarDados(){
                const resposta = await fetch('/remedios.json')
                const dados = await resposta.json()
                setRemedios(dados)
                console.log(dados)
            }     
            buscarDados()
        }
    , [])


return (
 
<>
 <h1 style={titulo}>Controle de Estoque Inteligente</h1>
 🔴 Crítico (0–5)
🟠 Baixo (6–10)
🟡 Atenção (11–15)
🟢 Normal (&gt;15)
 <table style={tabela} className="w-full" border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr style={linhaTabela}>
          <th>Saldo atual por medicamento</th>
          <th>Controle por lote </th>
          <th>Controle por validade</th>
          <th> Estoque baixo</th>
          <th>Medicamentos próximos ao vencimento</th>
          <th>Movimentações realizadas </th>
        </tr>
      </thead>

<tbody>
        {remedios.map((remedio, index) => (
          <tr style={linhaTabela} key={index}>
            <td className="text-center">{remedio.saldoAtual}</td>
            <td className="text-center">{remedio.controlePorLote}</td>
            <td className="text-center">{remedio.controlePorValidade}</td>
            <td className="text-center">{remedio.estoqueBaixo}</td>
            <td className="text-center">{remedio.medicamentosProximosAoVencimento}</td>
            <td className="text-center">{remedio.movimentacoesRealizadas}</td>
          </tr>
        ))}
      </tbody>
    </table>
</>











)

}




    export default ControledeEstoque;