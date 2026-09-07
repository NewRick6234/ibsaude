import { useEffect, useState } from "react"
import Botao from "./componentes/Botao"
import Input from "./componentes/Input"
import imagens from "./imagens/ib_saude.png"

let contador = 0

function DistribuicaoUnidade() {
  let form = {
    marginTop: "20px"
  }

  const [unidadesSaude, setUnidadesSaude] = useState([])
  const [tabela, setTabela] = useState([])
  const [unidadeDestino, setUnidadeDestino] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [dataEnvio, setDataEnvio] = useState('')
  const [responsavelLiberacao, setResponsavelLiberacao] = useState('')
  const [responsavelRecebimento, setResponsavelRecebimento] = useState('')
  const [anexacaoPedidoFormal, setAnexacaoPedidoFormal] = useState('')
  const [valorSaida, setValorSaida] = useState(0)

  useEffect(() => {
    async function buscarDados() {
      try {
        const resposta = await fetch('/unidadeSaude.json')
        const dados = await resposta.json()
        setUnidadesSaude(dados)
      } catch (erro) {
        console.error("Erro ao carregar dados:", erro)
      }
    }
    buscarDados()
  }, [])

  const acaoBotaoAdicionar = (e) => {
    if (e) e.preventDefault(); // Previne o recarregamento da página pelo <form>

    let objeto = {
      id: contador++,
      unidadeDestino,
      quantidade,
      dataEnvio,
      responsavelLiberacao,
      responsavelRecebimento,
      anexacaoPedidoFormal,
      valorSaida
    }

    setTabela((prevTabela) => [...prevTabela, objeto]);
  }

  return (
    <>
      <div className="flex flex-col gap-5 items-center w-full">
        <h1 className="font-semibold sm:text-3xl">Distribuição por Unidade de Saúde</h1>

        <form className="flex flex-col items-center gap-3 mb-3" style={form} onSubmit={acaoBotaoAdicionar}>
          <Input value={unidadeDestino} onChange={(e) => setUnidadeDestino(e.target.value)}>Unidade de Destino</Input>
          <Input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}>Quantidade</Input>
          <Input type="date" value={dataEnvio} onChange={(e) => setDataEnvio(e.target.value)}>Data de Envio</Input>
          <Input value={responsavelLiberacao} onChange={(e) => setResponsavelLiberacao(e.target.value)}>Responsável pela Liberação</Input>
          <Input value={responsavelRecebimento} onChange={(e) => setResponsavelRecebimento(e.target.value)}>Responsável pelo Recebimento</Input>
          <Input type="file" value={anexacaoPedidoFormal} onChange={(e) => setAnexacaoPedidoFormal(e.target.value)}>Anexação do Pedido Formal</Input>
          <Input type="number" value={valorSaida} onChange={(e) => setValorSaida(e.target.value)}>Valor de saída</Input>

          <Botao type="submit">Enviar</Botao>
        </form>
      </div>

      {/* Container envoltório que aplica as bordas arredondadas sem cortar */}
      <div className="w-full mt-10 border border-gray-300 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="px-4 py-3 text-center font-bold">Unidade Destino</th>
              <th className="px-4 py-3 text-center font-bold">Quantidade</th>
              <th className="px-4 py-3 text-center font-bold">Data de Envio</th>
              <th className="px-4 py-3 text-center font-bold">Responsável pela Liberação</th>
              <th className="px-4 py-3 text-center font-bold">Responsável pelo Recebimento</th>
              <th className="px-4 py-3 text-center font-bold">Anexação do Pedido Formal</th>
              <th className="px-4 py-3 text-center font-bold">Valor de Saída</th>
            </tr>
          </thead>
          <tbody>
            {unidadesSaude.map((unidadeSaude, index) => (
              <tr className="border-b border-gray-200 hover:bg-gray-50" key={index}>
                <td className="text-center p-3">{unidadeSaude.unidadeDestino}</td>
                <td className="text-center p-3">{unidadeSaude.quantidade}</td>
                <td className="text-center p-3">{unidadeSaude.dataEnvio}</td>
                <td className="text-center p-3">{unidadeSaude.responsavelLiberacao}</td>
                <td className="text-center p-3">{unidadeSaude.responsavelRecebimento}</td>
                <td className="text-center p-3">{unidadeSaude.anexacaoPedidoFormal}</td>
                <td className="text-center p-3">{unidadeSaude.valorSaida}</td>
              </tr>
            ))}
            {tabela.map((linha) => (
              <tr className="border-b border-gray-200 hover:bg-gray-50" key={linha.id}>
                <td className="text-center p-3">{linha.unidadeDestino}</td>
                <td className="text-center p-3">{linha.quantidade}</td>
                <td className="text-center p-3">{linha.dataEnvio}</td>
                <td className="text-center p-3">{linha.responsavelLiberacao}</td>
                <td className="text-center p-3">{linha.responsavelRecebimento}</td>
                <td className="text-center p-3">{linha.anexacaoPedidoFormal}</td>
                <td className="text-center p-3">{linha.valorSaida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DistribuicaoUnidade;