import { useState, useEffect } from "react"

function ViewRemedios(){

    // count[setTabela, tabela] = useState([

    //let tabela = { nome: "", idade: "", id: "", numero: "";  commit setTabela = inserção tabela }

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
        borderRight: "1px solid black",
    }

    let contCabecalho = {
      padding: "20px",
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

    

return(
<>
    <h1 style={titulo} className="sm:text-3xl">Tabela de Medicamentos</h1>

 {/* <div className="w-full overflow-x-auto"> */}
 <table style={tabela} className="w-full min-w-[760px] table-fixed" border="1" cellPadding="8" cellSpacing="0">
   {/* <colgroup>
     <col className="w-[16%]" />
     <col className="w-[24%]" />
     <col className="w-[17%]" />
     <col className="w-[17%]" />
     <col className="w-[26%]" />
   </colgroup> */}
      <thead>
        <tr style={linhaTabela}>
          <th className="px-6" style={contCabecalho}>Nome</th>
          <th className="whitespace-normal break-words" style={contCabecalho}>Classificação</th>
          <th className="px-6" style={contCabecalho}>Código interno</th>
          <th className="px-6" style={contCabecalho}>Código oficial</th>
          <th>Uso específico</th>
        </tr>
      </thead>
      <tbody>
        {remedios.map((remedio, index) => (
          <tr style={linhaTabela} key={index}>
            <td className="text-center"style={contCabecalho}>{remedio.nome}</td>
            <td className="whitespace-normal break-words text-center align-middle" style={contCabecalho}>{remedio.classificacao}</td>
            <td className="px-6 text-center" style={contCabecalho}>{remedio.codigoInterno}</td>
            <td className="px-6 text-center" style={contCabecalho}>{remedio.codigoOficial}</td>
            <td className="text-center"style={contCabecalho}>{remedio.usoEspecifico}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* </div> */}
</>

)

}
export default ViewRemedios