import { useEffect, useState } from "react"
import Botao from "./componentes/Botao"
import Input from "./componentes/Input"
import imagens from "./imagens/ib_saude.png"

let contador = 0
function DistribuicaoUnidade(){

     let imagem = {
        marginTop: "5px"
     }

      let form = {
        marginTop: "20px"
    }
    
    let tabelacss = {
        marginTop: "40px",
        border: "1px solid black",
        
    }

    let linhaTabela = {
        borderBottom: "1px solid black",
    }

        const [unidadesSaude, setUnidadesSaude] = useState([])
        const [tabela, setTabela]  = useState([])
        const [unidadeDestino, setUnidadeDestino] = useState('')
        const [quantidade, setQuantidade] = useState(0)
        const [dataEnvio, setDataEnvio] = useState('')
        const [responsavelLiberacao, setResponsavelLiberacao] = useState('')
        const [responsavelRecebimento, setResponsavelRecebimento] = useState('')
        const [anexacaoPedidoFormal, setAnexacaoPedidoFormal] = useState('')
        const [valorSaida, setValorSaida] = useState(0)


     
//const MostrarTabela = () => {
        useEffect(
            () => {
                async function buscarDados(){
                    const resposta = await fetch('/unidadeSaude.json')
                    const dados = await resposta.json()
                    setUnidadesSaude(dados)
                    console.log(dados)
                }     
                buscarDados()
            }
        , [])

const acaoBotaoAdicionar = () => {

    alert('Caminho novo')

        let objeto =  {

            
      id: contador++,
      unidadeDestino: unidadeDestino,
      quantidade: quantidade,
      dataEnvio: dataEnvio,
      responsavelLiberacao:responsavelLiberacao,
      responsavelRecebimento:responsavelRecebimento,
      anexacaoPedidoFormal:anexacaoPedidoFormal,
      valorSaida:valorSaida
    }

        setTabela((prevTabela) => [...prevTabela, objeto]);
          }
//}
return(
<>
 <div className='flex flex-col gap-5 items-center h-full'className="w-full" border="1" cellPadding="8" cellSpacing="0"> 

        <h1 className="font-semibold sm:text-3xl">Distribuição por Unidade de Saúde</h1>  {/*descricao ou introducao */}

        <form className="flex flex-col items-center" style={form} method="post">
        
        {/* criar componente da área onde estará o label e o input */}

        <Input value={unidadeDestino} onChange={(e) => setUnidadeDestino(e.target.value)}>Unidade de Destino</Input>

        <Input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}>Quantidade</Input>

        <Input type="date" value={dataEnvio} onChange={(e) => setDataEnvio(e.target.value)}>Data de Envio</Input>

        <Input value={responsavelLiberacao} onChange={(e) => setResponsavelLiberacao(e.target.value)}>Responsável pela Liberação</Input>

        <Input value={responsavelRecebimento} onChange={(e) => setResponsavelRecebimento(e.target.value)}>Responsável pelo Recebimento</Input>

        <Input type="file" value={anexacaoPedidoFormal} onChange={(e) => setAnexacaoPedidoFormal(e.target.value)}>Anexação do Pedido Formal</Input>

        <Input type="number" value={valorSaida} onChange={(e) => setValorSaida(e.target.value)}>Valor de saída</Input>

        <Botao onClick={acaoBotaoAdicionar}>Enviar</Botao>

        </form>
        </div>


        <table style={tabelacss} className="w-full " border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr style={linhaTabela}>
          <th className="px-6">Unidade Destino</th>
          <th className="px-6">Quantidade</th>
          <th className="px-6">Data de Envio</th>
          <th className="px-6">Responsável pela Liberação</th>
          <th className="px-6">Responsável pelo Recebimento</th>
          <th className="px-6">Anexação do Pedido Formal</th>
          <th className="px-6">Valor de Saída</th>
        </tr>
      </thead>
      <tbody>
        {unidadesSaude.map((unidadeSaude, index) => (
          <tr style={linhaTabela} key={index}>
            <td className="text-center">{unidadeSaude.unidadeDestino}</td>
            <td className="text-center">{unidadeSaude.quantidade}</td>
            <td className="text-center">{unidadeSaude.dataEnvio}</td>
            <td className="text-center">{unidadeSaude.responsavelLiberacao}</td>
            <td className="text-center">{unidadeSaude.responsavelRecebimento}</td>
            <td className="text-center">{unidadeSaude.anexacaoPedidoFormal}</td>
            <td className="text-center">{unidadeSaude.valorSaida}</td>
          </tr>
        ))}
        {tabela.map(
            (linha) => (
              <tr style={linhaTabela} key={linha.id}>
                <td className='border text-center'>{linha.unidadeDestino}</td>
                <td className="text-center">{linha.quantidade}</td>
                <td className='border text-center'>{linha.dataEnvio}</td>
                <td className='border text-center'>{linha.responsavelLiberacao}</td>
                <td className='border text-center'>{linha.responsavelRecebimento}</td>
                <td className='border text-center'>{linha.anexacaoPedidoFormal}</td>
                <td className='border text-center'>{linha.valorSaida}</td>
                 
              </tr>
                )
          )}
      </tbody>
    </table>

</>
)


}
export default DistribuicaoUnidade