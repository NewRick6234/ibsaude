function ViewLote(){

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

    let ted = {
    borderRight: "1px solid black"
    }

    const remedios = [
     {
      tipo: 'Comprimido',
      fabricante: 'Diesel',
      lote: 1,
      data_validade: '04-08-2026',
    },
    {
      tipo: 'Ampola',
      fabricante: 'Teixeira',
      lote: 2,
      data_validade: '24-08-2026',
    },
    {
      tipo: 'Frasco',
      fabricante: 'Benegripe',
      lote: 3,
      data_validade: '09-09-2026',
    }
    ]

    return(
        <>
        <h1 style={titulo}>Tabela de Lote Medicamentos</h1>

 <table style={tabela} className="w-full" border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr style={linhaTabela} >
          <th>Tipo</th>
          <th>Fabricante</th>
          <th>Lote</th>
          <th>Data de Validade</th>
        </tr>
      </thead>
      <tbody>
        {remedios.map((remedio, index) => (
          <tr style={linhaTabela} key={index}>
            <td style={ted}  className="text-center">{remedio.tipo}</td>
            <td style={ted}  className="text-center">{remedio.fabricante}</td>
            <td style={ted} className="text-center">{remedio.lote}</td>
            <td style={ted} className="text-center">{remedio.data_validade}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </>
    )


}
export default ViewLote;