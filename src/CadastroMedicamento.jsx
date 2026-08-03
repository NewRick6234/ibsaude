
import Input from './componentes/Input'
import Botao from './componentes/Botao';

function CadastroMedicamento(){

    return(
        <>
    <div className='flex flex-col gap-5 items-center h-full'className="w-full" border="1" cellPadding="8" cellSpacing="0"> 

    <h1 className='text-3xlfont-bold tracking-tight text-gray-100 sm:text-3xl '>Cadastro de Medicamentos</h1>
    <form className='flex flex-col gap-4 items-center h-full' method='post'>
        <Input name="Nome do medicamento:">Nome do Medicamento</Input>
       <Input name="Classificação:" options={['Venda Livre', 'Antibiótico', 'Controlado (Receita Especial)', 'Uso Hospitalar']}>Classificação</Input>
        
        
       
        <Input name="Codigo interno e/ ou código oficial:" >Código interno e/ou Código oficial</Input>
        <Input name="Uso específico:" >Uso Específico</Input>
       

    <Botao></Botao>
    </form>
    </div>
    </>
    )

}
export default CadastroMedicamento;