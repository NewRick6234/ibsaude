
import Input from './componentes/Input'
import Botao from './componentes/Botao';

function CadastroMedicamento(){

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
        <Input name="Uso específico:" ></Input>
        <Input 
            name="Tipo:" 
            options={['Comprimido', 'Cápsula', 'Drágea', 'Ampola', 'Frasco-ampola', 'Xarope', 'Suspensão', 'Pomada', 'Gel', 'Spray']}
        />
        <Input name="Fabricante:" ></Input>
        <Input name="Lote:" ></Input>
        <Input name="Data de validade:" tipo='date' ></Input>
    
    <Botao></Botao>
    </form>
    </div>
    </>
    )

}
export default CadastroMedicamento;