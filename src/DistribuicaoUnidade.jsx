import Botao from "./componentes/Botao"
import Input from "./componentes/Input"
import imagens from "./imagens/ib_saude.png"
function DistribuicaoUnidade(){

     let imagem = {
        marginTop: "5px"
     }

      let form = {
        marginTop: "20px"
    }
    

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

        <Botao>Enviar</Botao>

        </form>
        </div>
        </div>

</>
)


}
export default DistribuicaoUnidade