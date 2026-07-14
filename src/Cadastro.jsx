
import Input from './componentes/Input'
import Botao from './Botao';

function Cadastro(){

    return(
        <>
    <div className='flex flex-col gap-5 items-center h-full'>
    <h1 className='text-3xlfont-bold tracking-tight text-gray-900 sm:text-3xl '>Cadastro de Medicamentos</h1>
    <form className='flex flex-col gap-4 items-center h-full' method='post'>
        <Input name="Nome do medicamento:"></Input>
        <Input 
            name="Classificação:" 
            options={['Venda Livre', 'Antibiótico', 'Controlado (Receita Especial)', 'Uso Hospitalar']}
        />
        <Input name="Codigo interno e/ ou código oficial:" ></Input>
        
        
       
    
    <Botao></Botao>
    </form>
    </div>
    </>
    )

}
export default Cadastro;