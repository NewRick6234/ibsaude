import { useState } from "react"

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
    }

    const [remedios, setRemedios] = useState()

return(
<>
    <h1 style={titulo}>Tabela de Medicamentos</h1>

 <table style={tabela} className="w-full" border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr style={linhaTabela}>
          <th>Nome</th>
          <th>Classificação</th>
          <th>Código interno</th>
          <th>Código oficial</th>
          <th>Uso específico</th>
        </tr>
      </thead>
      <tbody>
        {remedios.map((remedio, index) => (
          <tr style={linhaTabela} key={index}>
            <td className="text-center">{remedio.nome}</td>
            <td className="text-center">{remedio.classificacao}</td>
            <td className="text-center">{remedio.codigoInterno}</td>
            <td className="text-center">{remedio.codigoOficial}</td>
            <td className="text-center">{remedio.usoEspecifico}</td>
          </tr>
        ))}
      </tbody>
    </table>
</>

)

}
export default ViewRemedios