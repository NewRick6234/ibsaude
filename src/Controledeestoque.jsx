
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
let estoqueBaixo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    
}

const corSinaleira = (quantidade, minimo) => {
  if (quantidade === 0) return "🔴";
  if (quantidade <= minimo) return "🟠";
  return "🟢";
};

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

 <table style={tabela} className="w-full" border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr style={linhaTabela}>
            <th>Nome do Medicamento</th>
          <th>Saldo atual por Medicamento</th>
          <th>Controle por Lote </th>
          <th>Controle por Validade</th>
          <th> Estoque Baixo</th>
          <th>Medicamentos próximos ao Vencimento</th>
          <th>Movimentações Realizadas </th>
        </tr>
      </thead>  


<tbody>
        {remedios.map((remedio, index) => (
          <tr style={linhaTabela} key={index}>
            <td className="text-center">{remedio.nome}</td>
            <td className="text-center">{remedio.saldoAtual}</td>
            <td className="text-center">{remedio.controlePorLote}</td>
            <td className="text-center">{remedio.controlePorValidade}</td>
            <td className="text-center">
                {corSinaleira(remedio.saldoAtual, 10)} 
      
            </td>
            <td className="text-center">{remedio.medicamentosProximosAoVencimento}</td>
            <td className="text-center">{remedio.movimentacoesRealizadas}</td>
          </tr>


    
        ))}
      </tbody>
    </table>

<br></br>

<p>Status do Estoque</p>

    🟢 Verde → quantidade maior que 10.
🟠 Laranja → quantidade entre 1 e 10.
🔴 Vermelho → quantidade igual a 0.

</>











)

}




    export default ControledeEstoque;