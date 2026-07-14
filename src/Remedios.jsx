import Input from "../Input";
import Botao from './componentes/Botao';
import back from "./imagens/medicamento.webp"
function Remedios(){
let fundo= {backgroundImage:`url(${back})`}
    return(
    
    <form style={fundo} className='flex flex-col items-center' method='post'>
     <Input name="Nome do Medicamento">Nome do medicamento</Input>
<Input name="Classificacao">Classificação</Input>
<Input name=" Codigo interno ">Código interno</Input>
<Input name="Uso especifico">Uso específico</Input>
<Input name= "Apresentacao">Apresentação</Input>
<Input name="Fabricante">Fabricante</Input>
<Input name="Lote">Lote</Input>
<Input name="Data de validade">Data de validade</Input>






    <Botao></Botao>
    </form>


    )

}
export default Remedios;