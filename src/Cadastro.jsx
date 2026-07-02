import Input from '../Input'
import Botao from './Botao';

function Cadastro(){

    return(
    <form className='flex flex-col items-center' method='post'>
     <Input name="Usuario">Usuário</Input>
     <Input name="Email" tipo="email">e-mail</Input>
    
    <Botao></Botao>
    </form>
    )

}
export default Cadastro;