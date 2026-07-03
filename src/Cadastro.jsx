import Input from '../Input'
import Botao from './Botao';

function Cadastro(){

    return(
    <form className='flex flex-col items-center' method='post'>
     <Input name="Nome do medicamento"></Input>
     <Input name="Classificação" ></Input>
     <Input name="Codigo interno e/ ou código oficial" ></Input>
     <Input name="Uso específico" ></Input>
     <Input name="Tipo" ></Input>
     <Input name="Fabricante" ></Input>
     <Input name="Lote" ></Input>
     <Input name="Data de validade" tipo='date' ></Input>
    
    <Botao></Botao>
    </form>
    )

}
export default Cadastro;