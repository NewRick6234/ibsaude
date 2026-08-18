
import { useState, useEffect } from "react"

function ControledeEstoque() {
    let titulo = {
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        
    }

    let tabela = {
        marginTop: "60px",
        border: "1px solid black",
       

  borderSpacing:'40px',
    }

    let linhaTabela = {
        borderBottom: "1px solid black",
        

    }
let estoqueBaixo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"   
    
}

let th={
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#f2f2f2",
    fontWeight: "bold"
}

const corSinaleira = (quantidade, minimo) => {
  if (quantidade === 0) return "🔴";
  if (quantidade <= minimo) return "🟠";
  return "🟢";
};

const Sinaleira = ({ validade = 0, minimo = 0 }) => {
  if (validade <= 0) {
    return (
      <div className="flex items-center justify-center">
     <td className="text-center align-middle">
  <span className="relative inline-flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
  </span>
</td>
</div>
    );
  }

  if (validade <= minimo) {
    return <span className="inline-block h-3 w-3 rounded-full bg-orange-500 align-middle" />;
  }

  return <span className="inline-block h-3 w-3 rounded-full bg-green-500 align-middle" />;
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

 <table style={tabela} className="w-full" border="1" cellSpacing="40" cellPadding="5">
      <thead>
        <tr style={linhaTabela}>
            <th style={th}>Nome do Medicamento</th>
          <th style={th}>Saldo atual por Medicamento</th>
          <th style={th}>Controle por Lote </th>
          <th style={th}>Controle por Validade</th>
          <th style={th}> Estoque Baixo</th>
          <th style={th}>Medicamentos próximos ao Vencimento</th>
          <th style={th}>Movimentações Realizadas </th>
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
            <td className="text-center"><Sinaleira validade={remedio.medicamentosProximosAoVencimento} minimo={10} /></td>
            <td className="text-center">{remedio.movimentacoesRealizadas}</td>
          </tr>


    
        ))}
      </tbody>
    </table>

<br></br>

<div style={{ backgroundColor: '#e8f5fd', padding: '10px', borderRadius: '5px',
 fontWeight: 'bold', display: 'flex', justifyContent: 'space-around', gap: '15px', 


    
}}>
    <div>

    <p>Status da Validade:</p>
    
<div style={{ display: 'flex',  justifyContent: 'space-around', gap: '10px',flexDirection: 'column'

}}>
   <span>
    🟢 Verde →
    validade maior que 30 dias. 
    </span>
    <span>

    🟠 Laranja →
    validade entre 10 e 30 dias.
    </span>
    <span>
    🔴 Vermelho →
    validade  1 dia.
        </span>
</div>
     </div>
<div>

<p>Status do Estoque:</p>

<div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px',flexDirection: 'column' }}>
    <span>
    🟢 Verde → quantidade maior que 10.</span>

    <span >
    🟠 Laranja → quantidade entre 1 e 10.</span>

<span>  
    🔴 Vermelho → quantidade igual a 0.</span>
</div>
</div>
      

    




</div>

</>








)

}




    export default ControledeEstoque;