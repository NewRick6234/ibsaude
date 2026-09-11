import Container from "./componentes/Container"

function ViewLote(){
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
      },
      {
        tipo: 'Frasco',
        fabricante: 'Benegripe',
        lote: 3,
        data_validade: '09-09-2026',
      },
      {
        tipo: 'Frasco',
        fabricante: 'Benegripe',
        lote: 3,
        data_validade: '09-09-2026',
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
        <Container>
        <h1 className="flex justify-center pb-10 font-bold">Tabela de Lote Medicamentos</h1>
        <div className="w-5xl border rounded-lg px-4 border-gray-300">
        <table className="w-full">
              <thead>
                <tr>
                  {/* Bordas aplicadas diretamente no th */}
                  <th className="py-4 border-b border-gray-300">Tipo</th>
                  <th className="py-4 border-b border-gray-300">Fabricante</th>
                  <th className="py-4 border-b border-gray-300">Lote</th>
                  <th className="py-4 border-b border-gray-300">Data de Validade</th>
                </tr>
              </thead>
              <tbody>
                {remedios.map((remedio, index) => (
                  <tr key={index}>
                    {/* Bordas aplicadas em cada td (exceto na última linha se não quiser borda no final) */}
                    <td className="text-center pt-4 border-b border-gray-300">{remedio.tipo}</td>
                    <td className="text-center pt-4 border-b border-gray-300">{remedio.fabricante}</td>
                    <td className="text-center pt-4 border-b border-gray-300">{remedio.lote}</td>
                    <td className="text-center pt-4 border-b border-gray-300">{remedio.data_validade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </Container>
        </>
    )
}

export default ViewLote;