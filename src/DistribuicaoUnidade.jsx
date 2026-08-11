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
        border: "1px solid black"
    }

    let linhaTabela = {
        borderBottom: "1px solid black",
    }

        const [unidadesSaude, setUnidadesSaude] = useState([])
        const [tabela, setTabela]  = useState([])
        const [unidadeDestino, setUnidadeDestino] = useState('')
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

const acaoBotaoAdicionar = (event) => {
event.preventDefault()


        let objeto =  {

            
      id: contador++,
      unidadeDestino: unidadeDestino,
      dataEnvio: dataEnvio,
      responsavelLiberacao:responsavelLiberacao,
      responsavelLiberacao:responsavelRecebimento,
      anexacaoPedidoFormal:anexacaoPedidoFormal,
      valorSaida:valorSaida
    }

        setTabela((prevTabela) => [...prevTabela, objeto]);
          }
//}
return(
<>
 <div className="flex justify-center">
        <div className="bg-blue-300 w-1/4 flex flex-col items-center">
         <img style={imagem} src={imagens} className="w-1/4" />
        <p className="font-semibold">Bem vindo ao IBSaúde</p>  {/*descricao ou introducao */}

        <p>______________</p>

        <form className="flex flex-col items-center" style={form} method="post">
        
        {/* criar componente da área onde estará o label e o input */}

        <Input>Unidade de Destino</Input>

        <Input type="number">Quantidade</Input>

        <Input type="date">Data de Envio</Input>

        <Input>Responsável pela Liberação</Input>

        <Input>Responsável pelo Recebimento</Input>

        <Input type="file">Anexação do Pedido Formal</Input>

        <Input type="number">Valor de saída</Input>

        <Botao onclick={acaoBotaoAdicionar}>Enviar</Botao>

        </form>
        </div>
        </div>

        <table style={tabela} className="w-full" border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr style={linhaTabela}>
          <th>Unidade Destino</th>
          <th>Quantidade</th>
          <th>Data de Envio</th>
          <th>Responsável pela Liberação</th>
          <th>Responsável pelo Recebimento</th>
          <th>Anexação do Pedido Formal</th>
          <th>Valor de Saída</th>
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