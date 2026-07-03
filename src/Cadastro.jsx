import Input from './componentes/Input'
import Botao from './Botao';

function Cadastro(){

    return(
        <>
    <div className='flex flex-col items-center h-full'>
    <h1 className='text-3xl font-semibold tracking-tight text--900 sm:text-3xl '>Cadastro de Medicamentos</h1>
    <form className='flex flex-col items-center h-screen' method='post'>
     <Input name="Nome do medicamento:"></Input>
     <Input name="Classificação:" ></Input>
     <Input name="Codigo interno e/ ou código oficial:" ></Input>
     <Input name="Uso específico:" ></Input>
     <Input name="Tipo:" ></Input>
     <Input name="Fabricante:" ></Input>
     <Input name="Lote:" ></Input>
     <Input name="Data de validade:" tipo='date' ></Input>
    
    <Botao></Botao>
    </form>
    </div>
    </>
    )

}
export default Cadastro;