import Input from './componentes/Input'
function TelaDeRegistro(){
    return(
        <>
         <div className='flex flex-col gap-5 items-center h-full'>
        <h1 className='text-3xlfont-bold tracking-tight text-gray-900 sm:text-3xl '>Registro da Compra:</h1>
        <form className='flex flex-col gap-4 items-center h-full' method='post'>
        <Input name="Quantidade Adquirida:"
                type="number"
        >
        </Input>
        <Input name="Valor Unitário:"
                type="number"
        >
        </Input>
        <Input name="Valor Total:"
                type="number"
        >
        </Input>
        <Input name="Data da Entrada:"
                type="number"
        >
        </Input>
        <Input name="Fornecedor:"
                type="number"
        >
        </Input>
        <Input name="Numero da Nota Fiscal:"
                type="number"
        >
        </Input>
        <Input name="Anexação de documentos (PDF/XML):"
                type="number"
        >
        </Input>
        <Input name="Nome do responsável pelo recebimento:"
                type="number"
        >
        </Input>
        
         
         
    </form>
    </div>
        </>
    )
    
}
export default TelaDeRegistro